import { EventData } from '../eventData';
import { GatewayPayload } from '../gatewayPayload';

/**
 * OPCODE 1 HEARTBEAT
 * @interface Heartbeat
 * @see https://discord.com/developers/docs/topics/gateway#heartbeat
 */
export interface Heartbeat extends GatewayPayload {
  /**
   * @property { number } op - the opcode for the payload
   */
  op: 1;

  /**
   * @property { EventData } d - the last sequence number received by the client
   */
  d: HeartbeatData;

  /**
   * @property { null } s - not applicable for non-zero opcode payloads
   */
  s: null;

  /**
   * @property { null } t - not applicable for non-zero opcode payloads
   */
  t: null;
}

/**
 * OPCODE 1 HEARTBEAT
 * @interface HeartbeatData
 * @see https://discord.com/developers/docs/topics/gateway#heartbeat-example-heartbeat
 */
export interface HeartbeatData extends Number, EventData { }
