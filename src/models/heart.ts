import { Heartbeat } from "./payload";
import WebSocket from "ws";

export class Heart {
    public sequence: number;
    public interval: number;

    public constructor(interval: number) {
        this.sequence = 0;
        this.interval = interval;
    }

    public async beat(webSocket: WebSocket): Promise<void> {
        const heartbeat: Heartbeat = new Heartbeat(++this.sequence);
        const payload: string = JSON.stringify(heartbeat);
        return await new Promise((resolve: () => void, reject: (reason?: Error) => void) => {
            setTimeout(() => {
                console.log(`SEND OPCODE ${heartbeat.op}`)
                webSocket.send(payload, (error: Error | undefined) => {
                    if (error) reject(error);
                    else resolve();
                });
            }, this.interval)
        });
    }
}