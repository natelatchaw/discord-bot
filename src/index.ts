import WebSocket from "ws";
import { URL } from "url";
import { Heartbeat, Hello, Payload } from "./models/payload";

const url: URL = new URL('wss://gateway.discord.gg/?v=9&encoding=json');
const webSocket: WebSocket = new WebSocket(url);
webSocket.on('message', onMessage);
webSocket.on('close', onClose);


function onMessage(data: string) {
    const payload: Payload = JSON.parse(data)
    console.log(`OPCODE: ${payload.op}`)
    if (payload.op == 10) {
        const delay: number = Math.random() * 1000;
        setTimeout(() => beginHeartbeat(payload as Hello), delay);
    }
}

function onClose(this: WebSocket, code: number, reason: string) {
    console.log(`CLCODE: ${code}`);
    console.log(`REASON: ${reason}`);
}

function beginHeartbeat(payload: Hello) {
    const condition: Boolean = true;
    let sequence_number: number = 1;
    while (condition) {
        const heartbeat: Heartbeat = new Heartbeat(sequence_number);
        const data: string = JSON.stringify(heartbeat)
        webSocket.send(data);
    }    
}