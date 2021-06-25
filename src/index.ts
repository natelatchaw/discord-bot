import WebSocket from "ws";
import { URL } from "url";
import { Hello, Payload, Resume } from "./models/payload";
import { Heart } from "./models/heart";
import { ResumeData } from "./models/payloadData";

export class Core {
    private server: URL;
    private webSocket: WebSocket;
    private heart: Heart;
    private acknowledged: boolean;

    public constructor(server: URL) {
        this.server = server;
        this.webSocket = new WebSocket(this.server);
        this.heart = new Heart(Number.MAX_SAFE_INTEGER);
        this.attachListeners();
        this.acknowledged = false;
    }

    private attachListeners(): void {
        //this.webSocket.on('message', (data: WebSocket.Data) => this.onMessage(data));
        //this.webSocket.on('close', (code: number, reason: string) => this.onClose(code, reason));
        this.webSocket.on('message', this.onMessage);
        this.webSocket.on('close', this.onClose); 
    }

    public async send(payload: Payload): Promise<void> {
        const data: string = JSON.stringify(payload);
        return await new Promise((resolve: () => void, reject: (reason?: Error) => void) => {  
            this.webSocket.send(data, (error?: Error) => {
                if (error) reject(error);
                else resolve();
            });
        });
    }

    private onMessage = async (data: WebSocket.Data) => {
        const payload: Payload = JSON.parse(data.toString());
        console.log(`RECV OPCODE ${payload.op}`);
        if (payload.op == 10) await this.beginHeartbeat(payload as Hello);
        if (payload.op == 1) await this.heart.beat(this.webSocket);
        if (payload.op == 11) this.acknowledged = true;
    }

    private async beginHeartbeat(payload: Hello) {
        this.heart.interval = payload.d.heartbeat_interval;
        while (true) await this.heart.beat(this.webSocket);
        {   
            //console.log(`Acknowledged? ${this.acknowledged}`)
            //if (this.acknowledged) continue;
            //this.restart();
        }
    }
    
    public onClose = (code: number, reason: string) => {
        console.log(`RECV CLCODE ${code}: ${reason}`);
    }

    public async restart() {
        this.webSocket.close(1012);
        this.webSocket = new WebSocket(this.server);
        this.attachListeners();
        const token: string = '';
        const session_id: string = '';
        const seq: number = this.heart.sequence;
        await this.send(new Resume(new ResumeData(token, session_id, seq)));
    }
}

const core: Core = new Core(new URL('wss://gateway.discord.gg/?v=9&encoding=json'));
let acknowledged: boolean = false;