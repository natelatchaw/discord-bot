import { Payload, PayloadData } from "../payload";

/**
 * OPCODE 10 HELLO
 * @class Hello
 * @property { number } op - The OPCode identifying the payload
 * @property { HeartbeatData } d - the payload's encapsulated data
 */
export class Hello implements Payload {
    public op: number = 10;
    public d: HelloData;
    public s?: number = undefined;
    public t?: string = undefined;

    public constructor(data: HelloData) {
        this.d = data;
    }
}

/**
 * OPCODE 10 HELLO
 * @class HelloData
 * @property { number } heartbeat_interval
 */
 export class HelloData implements PayloadData {
    public heartbeat_interval: number;

    public constructor(interval: number) {
        this.heartbeat_interval = interval;
    }
}