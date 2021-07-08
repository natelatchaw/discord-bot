import { Payload, PayloadData } from "./payload";

/**
 * OPCODE 2 IDENTIFY
 * @class Identify
 * @property { number } op - The OPCode identifying the payload
 * @property { IdentifyData } d - the payload's encapsulated data
 */
export class Identify implements Payload {
    public op: number = 2;
    public d: IdentifyData;
    public s?: number = undefined;
    public t?: string = undefined;

    public constructor(data: IdentifyData) {
        this.d = data;
    }
}

/**
 * OPCODE 2 IDENTIFY
 * @class IdentifyData
 * @property { string } token
 * @property { number } intents
 * @property { object } properties
 */
 export class IdentifyData implements PayloadData {
    public token: string;
    public intents: number;
    public properties: object;
    public compress: boolean;

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