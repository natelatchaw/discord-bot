import { User, Guild, Application } from "../interface";
import { Payload, PayloadData } from "./payload";

/**
 * OPCODE 0 DISPATCH
 * @class Dispatch
 * @property { number } op - The OPCode identifying the payload
 * @property { HeartbeatData } d - the payload's encapsulated data
 */
 export class Dispatch implements Payload {
    public op: number = 0;
    public d: DispatchData;
    public s?: number = undefined;
    public t?: string = undefined;

    public constructor(data: DispatchData) {
        this.d = data;
    }
}

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