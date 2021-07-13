import { Payload, PayloadData } from "../payload";

/**
 * OPCODE 7 RECONNECT
 * @see https://discord.com/developers/docs/topics/gateway#reconnect
 * @property { number } op - The OPCode identifying the payload
 * @property { ResumeData } d - the payload's encapsulated data
 */
export class Reconnect implements Payload {
    public op: number = 7;
    public d: ReconnectData;
    public s?: number;
    public t?: string;

    /**
     * @constructor
     * @param { ResumeData } data
     */
    public constructor() {
        this.d = new ReconnectData();
        this.s = undefined;
        this.t = undefined;
    }
}

/**
 * OPCODE 7 RECONNECT
 * @see https://discord.com/developers/docs/topics/gateway#reconnect-example-gateway-reconnect
 */
export class ReconnectData implements PayloadData { this = null }