import { Payload, PayloadData } from "../payload";

/**
 * OPCODE 6 RESUME
 * @class Resume
 * @property { number } op - The OPCode identifying the payload
 * @property { ResumeData } d - the payload's encapsulated data
 */
export class Resume implements Payload {
    public op: number = 6;
    public d: ResumeData;
    public s?: number = undefined;
    public t?: string = undefined;

    public constructor(data: ResumeData) {
        this.d = data;
    }
}

/**
 * OPCODE 6 RESUME
 * @class ResumeData
 * @property { string } token
 * @property { string } session_id
 * @property { number } seq
 */
 export class ResumeData implements PayloadData {
    public token: string;
    public session_id: string;
    public seq: number;

    public constructor(token: string, session_id: string, seq: number) {
        this.token = token;
        this.session_id = session_id;
        this.seq = seq;
    }
}