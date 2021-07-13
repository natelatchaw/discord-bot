import { Payload, PayloadData } from '../payload';

/**
 * OPCODE 11 HEARTBEATACK
 * @see https://discord.com/developers/docs/topics/gateway#heartbeating
 * @property { number } op - The OPCode identifying the payload
 * @property { HeartbeatData } d - the payload's encapsulated data
 */
export class HeartbeatACK implements Payload {
    public op: number = 11;
    public d: HeartbeatACKData;
    public s?: number = undefined;
    public t?: string = undefined;

    /**
     * @constructor
     * @param {HeartbeatACKData } data
     */
    public constructor() {
      this.d = new HeartbeatACKData();
    }
}

/**
 * OPCODE 11 HEARTBEAT ACK
 * @see https://discord.com/developers/docs/topics/gateway#heartbeating-example-gateway-heartbeat-ack
 */
export class HeartbeatACKData implements PayloadData { this = undefined; }
