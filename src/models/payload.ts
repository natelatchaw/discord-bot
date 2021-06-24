import { HeartbeatACKData, HeartbeatData, HelloData, IdentifyData, PayloadData, ResumeData } from "./payloadData";

export interface Payload {
    op: number;
    d: PayloadData | number
}

/**
 * OPCODE 1 HEARTBEAT
 * @class Heartbeat
 * @property { number } op - The OPCode identifying the payload
 * @property { HeartbeatData } d - the payload's encapsulated data
 */
export class Heartbeat implements Payload {
    public op: number = 2;
    public d: HeartbeatData;

    public constructor(data: number) {
        this.d = data;
    }
}

/**
 * OPCODE 2 IDENTIFY
 * @class Identify
 * @property { number } op - The OPCode identifying the payload
 * @property { IdentifyData } d - the payload's encapsulated data
 */
export class Identify implements Payload {
    public op: number = 2;
    public d: IdentifyData;

    public constructor(data: IdentifyData) {
        this.d = data;
    }
}

/**
 * OPCODE 6 RESUME
 * @class Resume
 * @property { number } op - The OPCode identifying the payload
 * @property { ResumeData } d - the payload's encapsulated data
 */
export class Resume implements Payload {
    public op: number = 6;
    public d: ResumeData;

    public constructor(data: ResumeData) {
        this.d = data;
    }
}

/**
 * OPCODE 10 HELLO
 * @class Hello
 * @property { number } op - The OPCode identifying the payload
 * @property { HeartbeatData } d - the payload's encapsulated data
 */
export class Hello implements Payload {
    public op: number = 10;
    public d: HelloData;

    public constructor(data: HelloData) {
        this.d = data;
    }
}

/**
 * OPCODE 11 HEARTBEATACK
 * @class HeartbeatACK
 * @property { number } op - The OPCode identifying the payload
 * @property { HeartbeatData } d - the payload's encapsulated data
 */
export class HeartbeatACK implements Payload {
    public op: number = 11;
    public d: HeartbeatACKData;

    public constructor(data: HeartbeatACKData = new HeartbeatACKData()) {
        this.d = data;
    }
}