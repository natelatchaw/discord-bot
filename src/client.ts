import WebSocket from "ws";
import { URL } from "url";

export type Resolution = (value?: any) => void;
export type Rejection = (reason?: Error) => void;

export class Client {
    private webSocket: WebSocket;

    public constructor(endpoint: URL) {
        this.webSocket = new WebSocket(endpoint);
    }

    public open = (listener: () => void) => this.webSocket.on('open', listener);

    public close = (listener: (code: number, reason: string) => void) => this.webSocket.on('close', listener);

    public on = (listener: (data: WebSocket.Data) => void) => this.webSocket.on('message', listener);

    /**
     * @function send
     * @param { any } data
     * @return { Promise<void> }
     */
    public async send(data: any): Promise<void> {
        return new Promise((resolve: Resolution, reject: Rejection) => {
            this.webSocket.send(data, (error?: Error) => {
                if (error) reject(error);
                else resolve();
            });
        });
    }
}