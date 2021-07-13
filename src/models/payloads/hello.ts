import { Payload, PayloadData } from '../payload';

/**
 * OPCODE 10 HELLO
 * @see https://discord.com/developers/docs/topics/gateway#hello
 * @property { number } op - The OPCode identifying the payload
 * @property { HeartbeatData } d - the payload's encapsulated data
 */
export class Hello implements Payload {
    public op: number = 10;
    public d: HelloData;
    public s?: number;
    public t?: string;

    /**
     * @constructor
     * @param { HelloData } data
     */
    public constructor(
        data: HelloData,
    ) {
      this.d = data;
      this.s = undefined;
      this.t = undefined;
    }
}

/**
 * OPCODE 10 HELLO
 * @see https://discord.com/developers/docs/topics/gateway#hello-hello-structure
 * @property { number } heartbeat_interval
 */
export class HelloData implements PayloadData {
    public heartbeat_interval: number;

    /**
     * @constructor
     * @param { number } interval
     */
    public constructor(interval: number) {
      this.heartbeat_interval = interval;
    }
}
