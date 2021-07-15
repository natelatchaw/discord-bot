import { GatewayPayload } from '../gatewayPayload';

/**
 * OPCODE 7 RECONNECT
 * @interface Reconnect
 * @see https://discord.com/developers/docs/topics/gateway#reconnect
 */
export interface Reconnect extends GatewayPayload {
  /**
   * @property { number } op - the opcode for the payload
   */
  op: 7;

  /**
   * @property { null } d - constant null for reconnect payloads
   * @see https://discord.com/developers/docs/topics/gateway#reconnect-example-gateway-reconnect
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
