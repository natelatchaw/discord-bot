import { Payload, PayloadData } from '../payload';

/**
 * OPCODE 6 RESUME
 * @see https://discord.com/developers/docs/topics/gateway#resume
 * @property { number } op - The OPCode identifying the payload
 * @property { ResumeData } d - the payload's encapsulated data
 */
export class Resume implements Payload {
    public op: number = 6;
    public d: ResumeData;
    public s?: number;
    public t?: string;

    /**
     * @constructor
     * @param { ResumeData } data
     */
    public constructor(data: ResumeData) {
      this.d = data;
      this.s = undefined;
      this.t = undefined;
    }
}

/**
 * OPCODE 6 RESUME
 * @see https://discord.com/developers/docs/topics/gateway#resume-resume-structure
 * @property { string } token
 * @property { string } session_id
 * @property { number } seq
 */
export class ResumeData implements PayloadData {
    public token: string;
    public session_id: string;
    public seq: number;

    /**
     * @constructor
     * @param { string } token
     * @param { string } session_id
     * @param { number } sequence
     */
    public constructor(token: string, session_id: string, sequence: number) {
      this.token = token;
      this.session_id = session_id;
      this.seq = sequence;
    }
}
