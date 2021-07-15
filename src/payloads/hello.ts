import { EventData } from '../eventData';
import { GatewayPayload } from '../gatewayPayload';

/**
 * OPCODE 10 HELLO
 * @interface Hello
 * @see https://discord.com/developers/docs/topics/gateway#hello
 */
export interface Hello extends GatewayPayload {
  /**
   * @property { number } op - the opcode for the payload
   */
  op: 10;

  /**
   * @property { HelloData } d - object containing the heartbeat interval
   * @see https://discord.com/developers/docs/topics/gateway#hello-hello-structure
   */
  d: HelloData;

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
 * OPCODE 10 HELLO
 * @interface HelloData
 * @see https://discord.com/developers/docs/topics/gateway#hello-hello-structure
 */
export interface HelloData extends EventData {
  /**
   * @property { number } heartbeat_interval - the interval (in milliseconds) the client should heartbeat with
   */
  heartbeat_interval: number;
}
