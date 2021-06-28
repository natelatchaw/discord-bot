import { Application } from "./application";
import { Guild } from "./guild";
import { User } from "./user";

export interface PayloadData { }

/**
 * OPCODE 0 DISPATCH
 * @class DispatchData
 */
export class DispatchData implements PayloadData {
    public v: number;
    public user_settings: any;
    public user: User;
    public session_id: string;
    public relationships: Array<any>;
    public private_channels: Array<string>;
    public presences: Array<string>;
    public guilds: Array<Guild>;
    public guild_join_requests: Array<string>;
    public geo_ordered_rtc_regions: Array<string>;
    public application: Application;

    public constructor(
        v: number,
        user_settings: any,
        user: User,
        session_id: string,
        relationships: Array<any>,
        private_channels: Array<string>,
        presences: Array<string>,
        guilds: Array<Guild>,
        guild_join_requests: Array<string>,
        geo_ordered_rtc_regions: Array<string>,
        application: Application,
    ) {
        this.v = v;
        this.user_settings = user_settings;
        this.user = user;
        this.session_id = session_id;
        this.relationships = relationships;
        this.private_channels = private_channels;
        this.presences = presences;
        this.guilds = guilds;
        this.guild_join_requests = guild_join_requests;
        this.geo_ordered_rtc_regions = geo_ordered_rtc_regions;
        this.application = application;
    }
}

/**
 * OPCODE 1 HEARTBEAT
 * @class HeartbeatData
 */
 export class HeartbeatData extends Number implements PayloadData { }

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
 * OPCODE 11 HEARTBEAT ACK
 * @class HeartbeatACKData
 */
export class HeartbeatACKData implements PayloadData { }