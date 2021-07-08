import { User, Guild, Application } from "../interface";
import { Payload, PayloadData } from "../payload";

/**
 * OPCODE 0 DISPATCH
 * @class Dispatch
 * @property { number } op - The OPCode identifying the payload
 * @property { HeartbeatData } d - the payload's encapsulated data
 */
 export interface Dispatch extends Payload {
    op: number; // 0
    d: DispatchData;
    s?: number;
    t?: string;
}

/**
 * OPCODE 0 DISPATCH
 * @class DispatchData
 */
export interface DispatchData extends PayloadData { }


////////////////////////////////////////////

