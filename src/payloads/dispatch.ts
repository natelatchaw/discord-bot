import { GatewayPayload } from '../gatewayPayload';
import { Event } from '../event';

/**
 * OPCODE 0 DISPATCH
 * @interface Dispatch
 * @see https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes
 */
export interface Dispatch<T extends Event> extends GatewayPayload {
    /**
     * @property { number } op - opcode for the payload
     * @see https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-opcodes
     */
    op: number;

    /**
     * @property { Event } d - event data
     * @see https://discord.com/developers/docs/topics/gateway#commands-and-events-gateway-events
     */
    d: T;

    /**
     * @property { number | undefined } s - sequence number, used for resuming sessions and heartbeats
     */
    s?: number;

    /**
     * @property { string | undefined } t - the event name for this payload
     * @see https://discord.com/developers/docs/topics/gateway#event-names
     */
    t?: string;
}
