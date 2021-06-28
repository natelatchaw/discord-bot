import WebSocket from "ws";
import { URL } from "url";
import { Dispatch, Hello, Identify, Payload, Resume } from "./models/payload";
import { Heart } from "./models/heart";
import { IdentifyData, ResumeData } from "./models/payloadData";
import { env } from "process";

export class Core {
    private server: URL;
    private token: string;
    private webSocket: WebSocket;
    private heart: Heart;
    private acknowledged: boolean;
    private session_id?: string;

    public constructor(server: URL, token: string) {
        this.server = server;
        this.token = token;
        this.webSocket = new WebSocket(this.server);
        this.heart = new Heart(Number.MAX_SAFE_INTEGER);
        this.attachListeners();
        this.acknowledged = false;
    }

    private attachListeners(): void {
        this.webSocket.on('message', this.onMessage);
        this.webSocket.on('close', this.onClose); 
    }

    public async send(payload: Payload): Promise<void> {
        const data: string = JSON.stringify(payload);
        return new Promise((resolve: () => void, reject: (reason?: Error) => void) => {  
            console.log(`SEND OPCODE ${payload.op}`);
            this.webSocket.send(data, (error?: Error) => {
                if (error) reject(error);
                else resolve();
            });
        });
    }

    //#region EVENTS

    /**
     * @event onMessage - Event invoked on receipt of websocket message
     * @param { WebSocket.Data } data 
     */
    private onMessage = async (data: WebSocket.Data) => {
        const payload: Payload = JSON.parse(data.toString());
        console.log(`RECV OPCODE ${payload.op}`);
        console.log(JSON.stringify(payload));
        if (payload.op == 0) await this.onDispatch(payload as Dispatch);
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
        console.log(`RECV CLCODE ${code}: ${reason}`);
    }

    //#endregion

    //#region OPCODE RESPONSES

    /**
     * @function onDispatch - Invoked on receipt of OPCODE 0 DISPATCH
     */
    private async onDispatch(payload: Dispatch) {
        if (payload.t == 'READY') {
            this.session_id = payload.d.session_id;
        }
    }

    /**
     * @function onHeartbeat - Invoked on receipt of OPCODE 1 HEARTBEAT
     */
    private async onHeartbeat() {
        await this.heart.beat(this.webSocket);
    }

    /**
     * @function onHello - Invoked on receipt of OPCODE 10 HELLO
     * @param { Hello } payload
     */
    private async onHello(payload: Hello) {
        this.heart.interval = payload.d.heartbeat_interval;
        while (true)
        {
            if (this.heart.sequence == 1) await this.identify();
            this.acknowledged = false;
            await this.heart.beat(this.webSocket);
            if (this.acknowledged) continue;
            else this.reconnect();
        }
    }

    /**
     * @function reconnect - Invoke to reset the websocket and attempt to resume
     */
    public async reconnect() {
        this.webSocket.close(1012);
        this.webSocket = new WebSocket(this.server);
        if (this.session_id == undefined) return;
        const data: ResumeData = new ResumeData(this.token, this.session_id, this.heart.sequence);
        const payload: Resume = new Resume(data);
        await this.send(payload);
    }

    //#endregion

    //#region CONNECTION MANAGEMENT

    /**
     * @function identify - Invoke to authenticate to the websocket
     */
    private async identify() {
        const intents: number = 0;
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

const endpoint: URL = new URL('wss://gateway.discord.gg/?v=9&encoding=json');
const token: string = env.TOKEN ?? '';
const core: Core = new Core(endpoint, token);