import { Payload, PayloadData } from '../payload';

/**
 * OPCODE 1 HEARTBEAT
 * @see https://discord.com/developers/docs/topics/gateway#heartbeat
 * @property { number } op - The OPCode identifying the payload
 * @property { HeartbeatData } d - the payload's encapsulated data
 */
export class Heartbeat implements Payload {
    public op: number = 1;
    public d: HeartbeatData;
    public s?: number = undefined;
    public t?: string = undefined;

    /**
     * @constructor
     * @param { number } data
     */
    public constructor(data: number) {
      this.d = data;
    }
}

/**
 * OPCODE 1 HEARTBEAT
 * @see https://discord.com/developers/docs/topics/gateway#heartbeat-example-heartbeat
 */
export class HeartbeatData extends Number implements PayloadData { }
