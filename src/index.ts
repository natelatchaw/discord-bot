import WebSocket from "ws";
import { URL } from "url";
import { Heartbeat, Hello, Payload } from "./models/payload";
import { Heart } from "./models/heart";

const url: URL = new URL('wss://gateway.discord.gg/?v=9&encoding=json');
const webSocket: WebSocket = new WebSocket(url);
webSocket.on('message', onMessage);
webSocket.on('close', onClose);


async function onMessage(data: string) {
    const payload: Payload = JSON.parse(data)
    console.log(`RECV OPCODE ${payload.op}`)
    if (payload.op == 10) await beginHeartbeat(payload as Hello);
}

function onClose(this: WebSocket, code: number, reason: string) {
    console.log(`RECV CLCODE ${code}: ${reason}`);
}

async function beginHeartbeat(payload: Hello) {
    const heart: Heart = new Heart(payload.d.heartbeat_interval);
    while (true) await heart.beat(webSocket);
}