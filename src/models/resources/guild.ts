import { Channel } from './channel';
import { Emoji } from './emoji';
import { Feature } from './feature';
import { Member } from './member';
import { Role } from './role';
import { Snowflake } from './snowflake';
import { VoiceState } from './voiceState';
import { Presence } from './presence';
import { Stage } from './stage';
import { WelcomeScreen } from './welcomeScreen';

/**
 * @interface Guild
 * @see https://discord.com/developers/docs/resources/guild#guild-object
 */
export interface Guild {
    /**
     * @param { Snowflake } id - guild id
     */
    id: Snowflake;

    /**
     * @param { string } name - guild name
     * (2-100 characters, excluding trailing and leading whitespace)
     */
    name: string;

    /**
     * @param { string | undefined } icon - icon hash
     * @see https://discord.com/developers/docs/reference#image-formatting
     */
    icon?: string;

    /**
     * @param { string | undefined } icon_hash - icon hash, returned when in the template object
     * @see https://discord.com/developers/docs/reference#image-formatting
     */
    icon_hash?: string;

    /**
     * @param { string | undefined } splash - splash hash
     * @see https://discord.com/developers/docs/reference#image-formatting
     */
    splash?: string;

    /**
     * @param { string | undefined } discovery_splash - discovery splash hash; only present for guilds with the "DISCOVERABLE" feature
     * @see https://discord.com/developers/docs/reference#image-formatting
     */
    discovery_splash?: string;

    /**
     * @param { boolean } owner - true if the user is the owner of the guild
     * @see https://discord.com/developers/docs/resources/user#get-current-user-guilds
     */
    owner: boolean;

    /**
     * @param { Snowflake } owner_id - id of owner
     */
    owner_id: Snowflake;

    /**
     * @param { string } permissions - total permissions for the user in the guild (excludes overwrites)
     * @see https://discord.com/developers/docs/resources/user#get-current-user-guilds
     */
    permissions: string;

    /**
     * @param { string | undefined } region - voice region id for the guild (deprecated)
     * @see https://discord.com/developers/docs/resources/voice#voice-region-object
     */
    region?: string;

    /**
     * @param { Snowflake | undefined } afk_channel_id - id of afk channel
     */
    afk_channel_id?: Snowflake;

    /**
     * @param { number } afk_timeout - afk timeout in seconds
     */
    afk_timeout: number;

    /**
     * @param { boolean } widget_enabled - true if the server widget is enabled
     */
    widget_enabled: boolean;

    /**
     * @param { Snowflake | undefined } widget_channel_id - the channel id that the widget will generate an invite to, or null if set to no invite
     */
    widget_channel_id?: Snowflake;

    /**
     * @param { number } verification_level - verification level required for the guild
     * @see https://discord.com/developers/docs/resources/guild#guild-object-verification-level
     */
    verification_level: number;

    /**
     * @param { number } default_message_notifications - default message notifications level
     * @see https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level
     */
    default_message_notifications: number;

    /**
     * @param { number } explicit_content_filter - explicit content filter level
     * @see https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level
     */
    explicit_content_filter: number;

    /**
     * @param { Array<Role> } roles - roles in the guild
     * @see https://discord.com/developers/docs/topics/permissions#role-object
     */
    roles: Array<Role>;

    /**
     * @param { Array<Emoji> } emojis - custom guild emojis
     * @see https://discord.com/developers/docs/resources/emoji#emoji-object
     */
    emojis: Array<Emoji>;

    /**
     * @param { Array<Feature> } features - enabled guild features
     * @see https://discord.com/developers/docs/resources/guild#guild-object-guild-features
     */
    features: Array<Feature>;

    /**
     * @param { number } mfa_level - required MFA level for the guild
     * @see https://discord.com/developers/docs/resources/guild#guild-object-mfa-level
     */
    mfa_level: number;

    /**
     * @param { Snowflake | undefined } application_id - application id of the guild creator if it is bot-created
     */
    application_id?: Snowflake;

    /**
     * @param { Snowflake | undefined } system_channel_id - the id of the channel where guild notices such as welcome messages and boost events are posted
     */
    system_channel_id?: Snowflake;

    /**
     * @param { number } system_channel_flags - system channel flags
     * @see https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags
     */
    system_channel_flags: number;

    /**
     * @param { Snowflake | undefined } rules_channel_id - the id of the channel where Community guilds can display rules and/or guidelines
     */
    rules_channel_id?: Snowflake;

    /**
     * @param { string } joined_at - when this guild was joined at
     * ISO8601 formatted timestamp
     */
    joined_at: string;

    /**
     * @param { boolean } large - true if this is considered a large guild
     */
    large?: boolean;

    /**
     * @param { boolean } unavailable - true if this guild is unavailable due to an outage
     */
    unavailable: boolean;

    /**
     * @param { number } member_count - total number of members in this guild
     */
    member_count: number;

    /**
     * @param { Array<VoiceState> } voice_states - states of members currently in voice channels; lacks the guild_id key
     * @see https://discord.com/developers/docs/resources/voice#voice-state-object
     */
    voice_states: Array<VoiceState>;

    /**
     * @param { Array<Member> } members - users in the guild
     * @see https://discord.com/developers/docs/resources/guild#guild-member-object
     */
    members: Array<Member>;

    /**
     * @param { Array<Channel> } channels - channels in the guild
     * @see https://discord.com/developers/docs/resources/channel#channel-object
     */
    channels: Array<Channel>;

    /**
     * @param { Array<Channel> } threads - all active threads in the guild that current user has permission to view
     * @see https://discord.com/developers/docs/resources/channel#channel-object
     */
    threads: Array<Channel>;

    /**
     * @param { Array<Presence> } presences - presences of the members in the guild, will only include non-offline members if the size is greater than large threshold
     * @see https://discord.com/developers/docs/topics/gateway#presence-update
     */
    presences: Array<Presence>

    /**
     * @param { number | undefined } max_presences - the maximum number of presences for the guild (null is always returned, apart from the largest of guilds)
     */
    max_presences?: number;

    /**
     * @param { number } max_members - the maximum number of members for the guild
     */
    max_members: number;

    /**
     * @param { string | undefined } vanity_url_code - the vanity url code for the guild
     */
    vanity_url_code?: string;

    /**
     * @param { string | undefined } description - the description of a Community guild
     */
    description?: string;

    /**
     * @param { string | undefined } banner - banner hash
     * @see https://discord.com/developers/docs/reference#image-formatting
     */
    banner?: string;

    /**
     * @param { number } premium_tier - premium tier (Server Boost level)
     * @see https://discord.com/developers/docs/resources/guild#guild-object-premium-tier
     */
    premium_tier: number;

    /**
     * @param { number } premium_subscription_count - the number of boosts this guild currently has
     */
    premium_subscription_count: number;

    /**
     * @param { string } preferred_locale - the preferred locale of a Community guild; used in server discovery and notices from Discord; defaults to "en-US"
     */
    preferred_locale: string;

    /**
     * @param { Snowflake | undefined } public_updates_channel_id - the id of the channel where admins and moderators of Community guilds receive notices from Discord
     */
    public_updates_channel_id?: Snowflake;

    /**
     * @param { number } max_video_channel_users - the maximum amount of users in a video channel
     */
    max_video_channel_users: number;

    /**
     * @param { number } approximate_member_count - approximate number of members in this guild, returned from the GET /guilds/<id> endpoint when with_counts is true
     */
    approximate_member_count: number;

    /**
     * @param { integer } approximate_presence_count - approximate number of non-offline members in this guild, returned from the GET /guilds/<id> endpoint when with_counts is true
     */
    approximate_presence_count: number;

    /**
     * @param { WelcomeScreen } welcome_screen - the welcome screen of a Community guild, shown to new members, returned in an Invite's guild object
     * @see https://discord.com/developers/docs/resources/guild#welcome-screen-object
     */
    welcome_screen: WelcomeScreen;

    /**
     * @param { number } nsfw_level - guild NSFW level
     * @see https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level
     */
    nsfw_level: number;

    /**
     * @param { Array<Stage> } stage_instances - Stage instances in the guild
     * @see https://discord.com/developers/docs/resources/stage-instance#stage-instance-object
     */
    stage_instances: Array<Stage>;
}
