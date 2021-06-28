import WebSocket from "ws";
import { URL } from "url";

export type Resolution = (value?: any) => void;
export type Rejection = (reason?: Error) => void;

export class Client {
    private endpoint: URL;
    private webSocket: WebSocket;

    public constructor(endpoint: URL) {
        this.endpoint = endpoint;
        this.webSocket = new WebSocket(endpoint);
        this.attachListeners();
    }

    private attachListeners(): void {
        this.webSocket.on('open', this.onOpen);
        this.webSocket.on('close', this.onClose);
    }

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

    public onOpen = async () => {
        console.log(`Connection to ${this.endpoint.host} established.`);
    };

    public onClose = async (code: number, reason: string) => {
        console.log(`Connection to ${this.endpoint.host} terminated.`);
        console.log(`Reason: Code ${code} - ${reason}`)
    };
}