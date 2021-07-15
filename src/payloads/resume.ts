import { EventData } from '../eventData';
import { GatewayPayload } from '../gatewayPayload';

/**
 * OPCODE 6 RESUME
 * @interface Resume
 * @see https://discord.com/developers/docs/topics/gateway#resume
 */
export interface Resume extends GatewayPayload {
  /**
   * @property { number } op - the opcode for the payload
   */
  op: 6;

  /**
   * @property { ResumeData } d - object containing the resume data
   */
  d: ResumeData;

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
 * OPCODE 6 RESUME
 * @interface ResumeData
 * @see https://discord.com/developers/docs/topics/gateway#resume-resume-structure
 */
export interface ResumeData extends EventData {
  /**
   * @property { string } token - session token
   */
  token: string;

  /**
   * @property { string } session_id - session id
   */
  session_id: string;

  /**
   * @property { number } seq - last sequence number received
   */
  seq: number;
}
