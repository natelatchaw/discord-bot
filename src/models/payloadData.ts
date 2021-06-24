export interface PayloadData { }

/**
 * OPCODE 2 IDENTIFY
 * @class IdentifyData
 * @property { string } token
 * @property { number } intents
 * @property { object } properties
 */
export class IdentifyData implements PayloadData {
    public token: string;
    public intents: number;
    public properties: object;

    public constructor(token: string, intents: number, properties: object) {
        this.token = token;
        this.intents = intents;
        this.properties = properties;
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

/**
 * OPCODE 10 HELLO
 * @class HelloData
 * @property { number } heartbeat_interval
 */
export class HelloData implements PayloadData {
    public heartbeat_interval: number;

    public constructor(interval: number) {
        this.heartbeat_interval = interval;
    }
}

/**
 * OPCODE 11 HEARTBEAT
 * @class HeartbeatData
 */
export class HeartbeatData implements PayloadData { }