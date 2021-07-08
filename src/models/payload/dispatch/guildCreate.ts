import { Dispatch, DispatchData } from "../dispatch";
import { Guild, Member } from '../../interface';

export class GuildCreate implements Dispatch {
    op: number = 0;
    d: GuildCreateData;
    s: number;
    t: string = 'GUILD_CREATE';

    public constructor(
        data: GuildCreateData,
        sequence: number,
    ) {
        this.d = data;
        this.s = sequence;
    }
}

export class GuildCreateData implements Guild, DispatchData {
    public name: string;
    public description: string;
    public unavailable: boolean;
    public nsfw: boolean;
    public lazy: boolean;
    public large: boolean;
    public id: string;
    public system_channel_id: string;
    public owner_id: string;
    public application_id: string;
    public rules_channel_id: string;
    public public_updates_channel_id: string;
    public afk_channel_id: string;
    public preferred_locale: string;
    public region: string;
    public members: Member[];
    public stage_instances: any[];
    public features: any[];
    public member_count: number;
    public max_members: number;
    public max_video_channel_users: number;
    public afk_timeout: number;
    public application_command_count: number;

    public constructor(
        name: string,
        description: string,
        unavailable: boolean,
        nsfw: boolean,
        lazy: boolean,
        large: boolean,
        id: string,
        system_channel_id: string,
        owner_id: string,
        application_id: string,
        rules_channel_id: string,
        public_updates_channel_id: string,
        afk_channel_id: string,
        preferred_locale: string,
        region: string,
        members: Member[],
        stage_instances: any[],
        features: any[],
        member_count: number,
        max_members: number,
        max_video_channel_users: number,
        afk_timeout: number,
        application_command_count: number,
    ) {
        this.name = name;
        this.description = description;
        this.unavailable = unavailable;
        this.nsfw = nsfw;
        this.lazy = lazy;
        this.large = large;
        this.id = id;
        this.system_channel_id = system_channel_id;
        this.owner_id = owner_id;
        this.application_id = application_id;
        this.rules_channel_id = rules_channel_id;
        this.public_updates_channel_id = public_updates_channel_id;
        this.afk_channel_id = afk_channel_id;
        this.preferred_locale = preferred_locale;
        this.region = region;
        this.members = members;
        this.stage_instances = stage_instances;
        this.features = features;
        this.member_count = member_count;
        this.max_members = max_members;
        this.max_video_channel_users = max_video_channel_users;
        this.afk_timeout = afk_timeout;
        this.application_command_count = application_command_count;
    }
}