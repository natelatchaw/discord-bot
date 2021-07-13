import { Payload, PayloadData } from '../payload';

/**
 * OPCODE 2 IDENTIFY
 * @see https://discord.com/developers/docs/topics/gateway#identify
 * @property { number } op - The OPCode identifying the payload
 * @property { IdentifyData } d - the payload's encapsulated data
 */
export class Identify implements Payload {
    public op: number = 2;
    public d: IdentifyData;
    public s?: number;
    public t?: string;

    /**
     * @constructor
     * @param { Identify } data
     */
    public constructor(data: IdentifyData) {
      this.d = data;
      this.s = undefined;
      this.t = undefined;
    }
}

/**
 * OPCODE 2 IDENTIFY
 * @see https://discord.com/developers/docs/topics/gateway#identify-identify-structure
 * @property { string } token
 * @property { number } intents
 * @property { object } properties
 */
export class IdentifyData implements PayloadData {
    public token: string;
    public intents: number;
    public properties: object;
    public compress: boolean;

    /**
     * @constructor
     * @param { string } token
     * @param { number } intents
     * @param { object } properties
     * @param { boolean } compress
     */
    public constructor(
        token: string,
        intents: number,
        properties: object,
        compress: boolean = false,
    ) {
      this.token = token;
      this.intents = intents;
      this.properties = properties;
      this.compress = compress;
    }
}
