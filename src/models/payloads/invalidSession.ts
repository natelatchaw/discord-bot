import { Payload, PayloadData } from "../payload";

/**
 * OPCODE 9 INVALID SESSION
 * @see https://discord.com/developers/docs/topics/gateway#invalid-session
 * @property { number } op - The OPCode identifying the payload
 * @property { InvalidSessionData } d - the payload's encapsulated data
 */
export class InvalidSession implements Payload {
    public op: number = 9;
    public d: InvalidSessionData;
    public s?: number;
    public t?: string;

    /**
     * @constructor
     * @param { ResumeData } data
     */
    public constructor(resumable: boolean) {
        this.d = resumable;
        this.s = undefined;
        this.t = undefined;
    }
}

/**
 * OPCODE 9 INVALID SESSION
 * @see https://discord.com/developers/docs/topics/gateway#invalid-session-example-gateway-invalid-session
 */
export class InvalidSessionData extends Boolean implements PayloadData { }