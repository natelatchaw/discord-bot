import { EventData } from '../eventData';
import { GatewayPayload } from '../gatewayPayload';

/**
 * OPCODE 9 INVALID SESSION
 * @interface InvalidSession
 * @see https://discord.com/developers/docs/topics/gateway#invalid-session
 */
export interface InvalidSession extends GatewayPayload {
  /**
   * @property { number } op - the opcode for the payload
   */
  op: 9;

  /**
   * @property { InvalidSessionData } d - object containing the invalid session data
   */
  d: InvalidSessionData;

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
 * OPCODE 9 INVALID SESSION
 * @interface InvalidSessionData
 * @see https://discord.com/developers/docs/topics/gateway#invalid-session-example-gateway-invalid-session
 */
export class InvalidSessionData extends Boolean implements EventData { }
