import { EventData } from './eventData';

/**
 * @interface GatewayPayload
 * @see https://discord.com/developers/docs/topics/gateway#payloads
 */
export interface GatewayPayload {
    /**
     * @property { number } op - opcode for the payload
     * @see https://discord.com/developers/docs/topics/gateway#payloads-gateway-payload-structure
     */
    op: number;

    /**
     * @property { EventData | null } d - event data
     */
    d?: EventData | null;

    /**
     * @property { number | null } s - sequence number, used for resuming sessions and heartbeats
     * null when op is not 0 (Gateway Dispatch Opcode)
     */
    s?: number | null;

    /**
     * @property { string | null } t - the event name for this payload
     * null when op is not 0 (Gateway Dispatch Opcode)
     */
    t?: string | null;
}
