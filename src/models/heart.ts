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
        const payload: Heartbeat = new Heartbeat(++this.sequence);
        const data: string = JSON.stringify(payload);
        return await new Promise((resolve: () => void, reject: (reason?: Error) => void) => {
            console.log(`SEND OPCODE ${payload.op}`);
            webSocket.send(data, (error: Error | undefined) => {
                if (error) reject(error);
                setTimeout(resolve, this.interval);
            });
        });
    }
}