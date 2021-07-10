import { URL } from 'url';
import WebSocket from 'ws';
import { Client } from "./client";
import { Console } from "./console";
import { GuildCreate } from './models/events/guildCreate';
import { Ready } from './models/events/ready';
import { Payload } from "./models/payload";
import { Dispatch } from "./models/payloads/dispatch";
import { Hello } from "./models/payloads/hello";
import { Identify, IdentifyData } from "./models/payloads/identify";
import { Resume, ResumeData } from "./models/payloads/resume";
import { Event } from './models/payloads/dispatch';


export class Core {
    private endpoint: URL;
    private token: string;
    private client: Client;
    private interval: number = Number.MAX_SAFE_INTEGER;
    private acknowledged: boolean;
    private session_id?: string;

    public constructor(endpoint: URL, token: string) {
        this.endpoint = endpoint;
        this.token = token;
        this.client = new Client(endpoint);
        this.attachListeners();
        this.acknowledged = false;
    }

    /**
     * @function attachListeners
     * @return { void }
     */
    private attachListeners(): void {
        this.client.onMessage(this.onMessage);
        this.client.onClose(this.onClose);
    }

    /**
     * @function send
     * @param { Payload } payload
     * @return { Promise<void> }
     */
    public async send(payload: Payload): Promise<void> {
        const data: string = JSON.stringify(payload);
        return this.client.send(data);
    }

    //#region EVENTS

    /**
     * @event onMessage - Event invoked on receipt of websocket message
     * @param { WebSocket.Data } data 
     */
    private onMessage = async (data: WebSocket.Data) => {
        const payload: Payload = JSON.parse(data.toString());
        Console.log(`RECV OPCODE ${payload.op}`);
        //Console.warn(JSON.stringify(payload));
        if (payload.op == 0) await this.onDispatch(payload as Dispatch<Event>);
        if (payload.op == 1) await this.onHeartbeat();
        if (payload.op == 10) await this.onHello(payload as Hello);
        if (payload.op == 11) this.acknowledged = true;
    }

    /**
     * @event onMessage - Event invoked on receipt of websocket close
     * @param { number } code
     * @param { string } reason 
     */
    public onClose = (code: number, reason: string) => {
        Console.log(`RECV CLCODE ${code}: ${reason}`);
    }

    //#endregion

    //#region OPCODE RESPONSES

    /**
     * @function onDispatch - Invoked on receipt of OPCODE 0 DISPATCH
     */
    private async onDispatch(payload: Dispatch<Event>) {
        switch (payload.t) {
            case 'READY':
                const ready: Dispatch<Ready> = payload as Dispatch<Ready>;
                this.session_id = ready.d.session_id;
                break;
            case 'GUILD_CREATE':
                const guildCreate: Dispatch<GuildCreate> = payload as Dispatch<GuildCreate>;
                Console.highlight(`Received guild ${guildCreate.d.name}`);
            default:
                break;
        }
    }

    /**
     * @function onHeartbeat - Invoked on receipt of OPCODE 1 HEARTBEAT
     */
    private async onHeartbeat() {
        await this.client.beat(this.interval);
    }

    /**
     * @function onHello - Invoked on receipt of OPCODE 10 HELLO
     * @param { Hello } payload
     */
    private async onHello(payload: Hello) {
        this.interval = payload.d.heartbeat_interval;
        await this.identify();
        while (true) {
            this.acknowledged = false;
            await this.client.beat(this.interval);
            if (this.acknowledged) continue;
            else this.reconnect();
        }
    }

    /**
     * @function reconnect - Invoke to reset the websocket and attempt to resume
     */
    public async reconnect() {
        this.client.close(1012);
        this.client = new Client(this.endpoint);
        if (this.session_id == undefined) return;
        const data: ResumeData = new ResumeData(this.token, this.session_id, this.client.sequence);
        const payload: Resume = new Resume(data);
        await this.send(payload);
    }

    //#endregion

    //#region CONNECTION MANAGEMENT

    /**
     * @function identify - Invoke to authenticate to the websocket
     */
    private async identify() {
        const intents: number = 32509;
        const properties: any = {
            '$os': 'linux',
            '$browser': 'library',
            '$device': 'library',
        };
        const data: IdentifyData = new IdentifyData(this.token, intents, properties);
        const payload: Identify = new Identify(data);
        await this.send(payload);
    }

    //#endregion
}