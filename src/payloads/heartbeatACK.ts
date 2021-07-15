import { GatewayPayload } from '../gatewayPayload';

/**
 * OPCODE 11 HEARTBEATACK
 * @interface HeartbeatACK
 * @see https://discord.com/developers/docs/topics/gateway#heartbeating
 */
export interface HeartbeatACK extends GatewayPayload {
  /**
   * @property { number } op - the opcode for the payload
   */
  op: 11;

  /**
   * @property { null } d - not applicable for heartbeat ack payload
   */
  d: null;

  /**
   * @property { null } s - not applicable for non-zero opcode payloads
   */
  s: null;

  /**
   * @property { null } t - not applicable for non-zero opcode payloads
   */
  t: null;
}
