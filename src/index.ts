import WebSocket from "ws";
import { URL } from "url";
import { Hello, Payload } from "./models/payload";

const url: URL = new URL('wss://gateway.discord.gg/?v=9&encoding=json');
const webSocket: WebSocket = new WebSocket(url);
webSocket.on('message', onMessage);
webSocket.on('close', onClose);


function onMessage(data: string) {
    const payload: Payload = JSON.parse(data)
    console.log(`OPCODE: ${payload.op}`)
    if (payload.op == 10) {
        const hello: Hello = payload as Hello;
        console.log(`INTERVAL: ${hello.d.heartbeat_interval}`)
    }
}

function onClose(this: WebSocket, code: number, reason: string) {
    console.log(`CLCODE: ${code}`);
    console.log(`REASON: ${reason}`);
}