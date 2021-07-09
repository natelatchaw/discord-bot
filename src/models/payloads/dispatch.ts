import { Payload, PayloadData } from "../payload";

/**
 * OPCODE 0 DISPATCH
 * @class Dispatch
 * @property { number } op - The OPCode identifying the payload
 * @property { HeartbeatData } d - the payload's encapsulated data
 */
export class Dispatch<T extends Event> implements Payload {
    /**
     * @param { number } op - opcode for the payload
     * <https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-opcodes>
     */
    op: number = 0;

    /**
     * @param { Event } d - event data
     * <https://discord.com/developers/docs/topics/gateway#commands-and-events-gateway-events>
     */
    d: T;

    /**
     * @param { number | undefined } s - sequence number, used for resuming sessions and heartbeats
     */
    s?: number;

    /**
     * @param { string | undefined } t - the event name for this payload
     * <https://discord.com/developers/docs/topics/gateway#event-names>
     */
    t?: string;

    /**
     * @constructor
     * @param { T } event
     * @param { number | undefined } sequence 
     * @param { string | undefined } name 
     */
    public constructor(
        event: T,
        sequence?: number,
        name?: string,
    ) {
        this.d = event;
        this.s = sequence;
        this.t = name;
    }
}

/**
 * OPCODE 0 DISPATCH
 * @class DispatchData
 */
export interface Event extends PayloadData { }

