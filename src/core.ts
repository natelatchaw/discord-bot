import { URL } from 'url';
import WebSocket from 'ws';
import { Client } from './client';
import { Console } from './console';
import { GuildCreate } from './models/events/guildCreate';
import { Ready } from './models/events/ready';
import { Payload } from './models/payload';
import { Dispatch } from './models/payloads/dispatch';
import { Hello } from './models/payloads/hello';
import { Identify, IdentifyData } from './models/payloads/identify';
import { Resume, ResumeData } from './models/payloads/resume';
import { Event } from './models/payloads/dispatch';

/**
 * @class Core
 */
export class Core {
    private endpoint: URL;
    private token: string;
    private client: Client;
    private interval: number = Number.MAX_SAFE_INTEGER;
    private acknowledged: boolean;
    private session_id?: string;

    /**
     * @constructor
     * @param { URL } endpoint
     * @param { string } token
     */
    public constructor(endpoint: URL, token: string) {
      this.endpoint = endpoint;
      this.token = token;
      this.client = new Client(endpoint);
      this.attachListeners();
      this.acknowledged = false;
    }

    /**
     * @return { void }
     */
    private attachListeners(): void {
      this.client.onMessage(this.onMessage);
      this.client.onClose(this.onClose);
    }

    /**
     * Send a payload object via WebSocket message
     * @param { Payload } payload
     * @return { Promise<void> }
     */
    public async send(payload: Payload): Promise<void> {
      const data: string = JSON.stringify(payload);
      return this.client.send(data);
    }

    // #region EVENTS

    /**
     * @event onMessage - Event invoked on receipt of websocket message
     * @param { WebSocket.Data } data
     */
    private onMessage = async (data: WebSocket.Data) => {
      const payload: Payload = JSON.parse(data.toString());
      Console.log(`RECV OPCODE ${payload.op}`);
      // Console.warn(JSON.stringify(payload));
      // if (payload.op == 0) await this.onDispatch(payload as Dispatch<Event>);
      if (payload.op == 1) await this.onHeartbeat();
      if (payload.op == 10) await this.onHello(payload as Hello);
      if (payload.op == 11) this.acknowledged = true;
    }

    /**
     * @event onClose - Event invoked on receipt of websocket close
     * @param { number } code
     * @param { string } reason
     */
    public onClose = (code: number, reason: string): void => {
      Console.log(`RECV CLCODE ${code}: ${reason}`);
    }

    /**
     * @callback onDispatchCallback
     * @param { Dispatch<Event> } dispatch
     */
    /**
     * @event onDispatch
     * @param { onDispatchCallback } listener
     * @return { void }
     */
    public onDispatch = (listener: (dispatch: Dispatch<Event>) => void): void => {
      this.client.onMessage((data: WebSocket.Data) => {
        // parse the data to a Payload object
        const payload: Payload = JSON.parse(data.toString()) as Payload;
        // if the Payload object is not a Dispatch object, return
        if (payload.op !== 0) return;
        // parse the data to a Dispatch object
        const dispatch: Dispatch<Event> = JSON.parse(data.toString()) as Dispatch<Event>;
        // pass the Dispatch object
        listener(dispatch);
      });
    }

    // #endregion

    // #region OPCODE RESPONSES

    /**
     * Invoked on receipt of OPCODE 1 HEARTBEAT
     */
    private async onHeartbeat() {
      await this.client.beat(this.interval);
    }

    /**
     * Invoked on receipt of OPCODE 10 HELLO
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
     * Invoke to reset the websocket and attempt to resume
     */
    public async reconnect() {
      this.client.close(1012);
      this.client = new Client(this.endpoint);
      if (this.session_id == undefined) return;
      const data: ResumeData = new ResumeData(this.token, this.session_id, this.client.sequence);
      const payload: Resume = new Resume(data);
      await this.send(payload);
    }

    // #endregion

    // #region CONNECTION MANAGEMENT

    /**
     * Invoke to authenticate to the websocket
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

  // #endregion
}
