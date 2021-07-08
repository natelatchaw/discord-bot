export interface Guild {
    // basic info
    name: string;
    description: string;

    // booleans
    unavailable?: boolean;
    nsfw: boolean;
    lazy: boolean;
    large: boolean;

    // guild IDs
    id: string;
    system_channel_id: string;
    owner_id: string;
    application_id: string;

    // preset channel IDs
    rules_channel_id: string;
    public_updates_channel_id: string;
    afk_channel_id: string;

    // localization
    preferred_locale: string;
    region: string;

    // arrays
    members: Array<Member>
    stage_instances: Array<any>;        // TODO
    features: Array<any>;               // TODO

    // counts
    member_count: number;
    max_members: number;
    max_video_channel_users: number;
    afk_timeout: number;
    application_command_count: number;
}

export interface Member {
    user: User;
    roles: Array<string>;
    joined_at: string;
    hoisted_role: any;                  // TODO
    
    mute: boolean;
    deaf: boolean;
}

export interface User {
    verified: boolean;
    username: string;
    mfa_enabled: boolean;
    id: string;
    flags: number;
    email: string;
    discriminator: string;
    bot: boolean;
    avatar: string;
}

export interface Application {
    id: string;
    flags: number;
}