/**
 * OPCODE PAYLOAD
 * @see https://discord.com/developers/docs/topics/gateway#payloads
 * @property { number } op - The OPCode identifying the payload
 * @property { PayloadData } d - the payload's encapsulated data
 */
export interface Payload {
    op: number;
    d: PayloadData | number;
    s?: number;
    t?: string;
}

/**
 * OPCODE PAYLOAD
 * @see https://discord.com/developers/docs/topics/gateway#payloads-gateway-payload-structure
 */
export interface PayloadData { }
