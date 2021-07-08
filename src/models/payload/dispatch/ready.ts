import { User, Guild, Application, Init } from "../../interface";
import { Dispatch, DispatchData } from "../dispatch";

export class Ready implements Dispatch {
    op: number = 0;
    d: ReadyData;
    s: number;
    t: string = 'READY';
    
    public constructor(
        data: ReadyData,
        sequence: number,
    ) {
        this.d = data;
        this.s = sequence;
    }
}

export class ReadyData implements Init, DispatchData {
    public v: number;
    public user_settings: any;
    public user: User;
    public session_id: string;
    public relationships: any[];
    public private_channels: string[];
    public presences: string[];
    public guilds: Guild[];
    public guild_join_requests: string[];
    public geo_ordered_rtc_regions: string[];
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