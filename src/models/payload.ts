/**
 * OPCODE PAYLOAD
 * @class Payload
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
 * @class PayloadData
 */
export interface PayloadData { }
