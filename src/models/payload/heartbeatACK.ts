import { Payload, PayloadData } from "./payload";

/**
 * OPCODE 11 HEARTBEATACK
 * @class HeartbeatACK
 * @property { number } op - The OPCode identifying the payload
 * @property { HeartbeatData } d - the payload's encapsulated data
 */
export class HeartbeatACK implements Payload {
    public op: number = 11;
    public d: HeartbeatACKData;
    public s?: number = undefined;
    public t?: string = undefined;

    public constructor(data: HeartbeatACKData = new HeartbeatACKData()) {
        this.d = data;
    }
}

/**
 * OPCODE 11 HEARTBEAT ACK
 * @class HeartbeatACKData
 */
 export class HeartbeatACKData implements PayloadData { }