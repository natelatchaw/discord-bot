import WebSocket from "ws";
import { URL } from "url";
import { Heartbeat } from "./models/payload/heartbeat";

export type Resolution = (value?: any) => void;
export type Rejection = (reason?: Error) => void;

export class Client {
    private webSocket: WebSocket;
    public sequence: number;

    /**
     * @constructor
     * @param { URL } endpoint
     */
    public constructor(endpoint: URL) {
        this.webSocket = new WebSocket(endpoint);
        this.sequence = 0;
    }

    /**
     * @event
     * @param { () => void } listener
     */
    public onOpen = (listener: () => void) => this.webSocket.on('open', listener);

    /**
     * @event
     * @param { (number, string) => void } listener
     */
    public onClose = (listener: (code: number, reason: string) => void) => this.webSocket.on('close', listener);

    /**
     * @event
     * @param { (WebSocket.Data) => void } listener
     */
    public onMessage = (listener: (data: WebSocket.Data) => void) => this.webSocket.on('message', listener);

    /**
     * @function send
     * @param { string } data
     * @return { Promise<void> }
     */
    public async send(data: string, timeout: number = 0): Promise<void> {
        return new Promise((resolve: Resolution, reject: Rejection) => {
            this.webSocket.send(data, (error?: Error) => {
                if (error) reject(error);
                else setTimeout(resolve, timeout);
            });
        });
    }

    /**
     * @function beat
     * @param { number } interval
     * @return { Promise<void> }
     */
    public async beat(interval: number): Promise<void> {
        const payload: Heartbeat = new Heartbeat(++this.sequence);
        const data: string = JSON.stringify(payload);
        return this.send(data, interval);
    }

    /**
     * @function close
     * @param { number | undefined } code
     * @param { string | undefined } data
     */
    public close(code?: number, data?: string): void {
        this.webSocket.close(code, data);
    }
}