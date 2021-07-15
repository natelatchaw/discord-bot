import { Channel } from './channel';
import { Emoji } from './emoji';
import { Feature } from './feature';
import { Member } from './member';
import { Role } from './role';
import { Snowflake } from './snowflake';
import { VoiceState } from './voiceState';
import { PresenceUpdate } from '../events/presenceUpdate';
import { StageInstance } from './stageInstance';
import { WelcomeScreen } from './welcomeScreen';

/**
 * @interface Guild
 * @see https://discord.com/developers/docs/resources/guild#guild-object
 */
export interface Guild {
    /**
     * @property { Snowflake } id - guild id
     */
    id: Snowflake;

    /**
     * @property { string } name - guild name
     * (2-100 characters, excluding trailing and leading whitespace)
     */
    name: string;

    /**
     * @property { string | null } icon - icon hash
     * @see https://discord.com/developers/docs/reference#image-formatting
     */
    icon: string | null;

    /**
     * @property { string | undefined | null } icon_hash - icon hash, returned when in the template object
     * @see https://discord.com/developers/docs/reference#image-formatting
     */
    icon_hash?: string | null;

    /**
     * @property { string | null } splash - splash hash
     * @see https://discord.com/developers/docs/reference#image-formatting
     */
    splash: string | null;

    /**
     * @property { string | null } discovery_splash - discovery splash hash; only present for guilds with the "DISCOVERABLE" feature
     * @see https://discord.com/developers/docs/reference#image-formatting
     */
    discovery_splash: string | null;

    /**
     * @property { boolean | undefined } owner - true if the user is the owner of the guild
     * @see https://discord.com/developers/docs/resources/user#get-current-user-guilds
     */
    owner?: boolean;

    /**
     * @property { Snowflake } owner_id - id of owner
     */
    owner_id: Snowflake;

    /**
     * @property { string | undefined } permissions - total permissions for the user in the guild (excludes overwrites)
     * @see https://discord.com/developers/docs/resources/user#get-current-user-guilds
     */
    permissions?: string;

    /**
     * @property { string | undefined | null } region - voice region id for the guild (deprecated)
     * @see https://discord.com/developers/docs/resources/voice#voice-region-object
     */
    region?: string | null;

    /**
     * @property { Snowflake | null } afk_channel_id - id of afk channel
     */
    afk_channel_id: Snowflake | null;

    /**
     * @property { number } afk_timeout - afk timeout in seconds
     */
    afk_timeout: number;

    /**
     * @property { boolean | undefined } widget_enabled - true if the server widget is enabled
     */
    widget_enabled?: boolean;

    /**
     * @property { Snowflake | undefined | null } widget_channel_id - the channel id that the widget will generate an invite to, or null if set to no invite
     */
    widget_channel_id?: Snowflake | null;

    /**
     * @property { number } verification_level - verification level required for the guild
     * @see https://discord.com/developers/docs/resources/guild#guild-object-verification-level
     */
    verification_level: number;

    /**
     * @property { number } default_message_notifications - default message notifications level
     * @see https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level
     */
    default_message_notifications: number;

    /**
     * @property { number } explicit_content_filter - explicit content filter level
     * @see https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level
     */
    explicit_content_filter: number;

    /**
     * @property { Array<Role> } roles - roles in the guild
     * @see https://discord.com/developers/docs/topics/permissions#role-object
     */
    roles: Array<Role>;

    /**
     * @property { Array<Emoji> } emojis - custom guild emojis
     * @see https://discord.com/developers/docs/resources/emoji#emoji-object
     */
    emojis: Array<Emoji>;

    /**
     * @property { Array<Feature> } features - enabled guild features
     * @see https://discord.com/developers/docs/resources/guild#guild-object-guild-features
     */
    features: Array<Feature>;

    /**
     * @property { number } mfa_level - required MFA level for the guild
     * @see https://discord.com/developers/docs/resources/guild#guild-object-mfa-level
     */
    mfa_level: number;

    /**
     * @property { Snowflake | null } application_id - application id of the guild creator if it is bot-created
     */
    application_id: Snowflake | null;

    /**
     * @property { Snowflake | null } system_channel_id - the id of the channel where guild notices such as welcome messages and boost events are posted
     */
    system_channel_id: Snowflake | null;

    /**
     * @property { number } system_channel_flags - system channel flags
     * @see https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags
     */
    system_channel_flags: number;

    /**
     * @property { Snowflake | null } rules_channel_id - the id of the channel where Community guilds can display rules and/or guidelines
     */
    rules_channel_id: Snowflake | null;

    /**
     * @property { string | undefined } joined_at - when this guild was joined at
     * ISO8601 formatted timestamp
     */
    joined_at?: string;

    /**
     * @property { boolean | undefined } large - true if this is considered a large guild
     */
    large?: boolean;

    /**
     * @property { boolean | undefined } unavailable - true if this guild is unavailable due to an outage
     */
    unavailable?: boolean;

    /**
     * @property { number | undefined } member_count - total number of members in this guild
     */
    member_count?: number;

    /**
     * @property { Array<VoiceState> | undefined } voice_states - states of members currently in voice channels; lacks the guild_id key
     * @see https://discord.com/developers/docs/resources/voice#voice-state-object
     */
    voice_states?: Array<VoiceState>;

    /**
     * @property { Array<Member> | undefined } members - users in the guild
     * @see https://discord.com/developers/docs/resources/guild#guild-member-object
     */
    members?: Array<Member>;

    /**
     * @property { Array<Channel> | undefined } channels - channels in the guild
     * @see https://discord.com/developers/docs/resources/channel#channel-object
     */
    channels?: Array<Channel>;

    /**
     * @property { Array<Channel> | undefined } threads - all active threads in the guild that current user has permission to view
     * @see https://discord.com/developers/docs/resources/channel#channel-object
     */
    threads?: Array<Channel>;

    /**
     * @property { Array<Presence> | undefined } presences - presences of the members in the guild, will only include non-offline members if the size is greater than large threshold
     * @see https://discord.com/developers/docs/topics/gateway#presence-update
     */
    presences?: Array<PresenceUpdate>

    /**
     * @property { number | undefined | null } max_presences - the maximum number of presences for the guild (null is always returned, apart from the largest of guilds)
     */
    max_presences?: number | null;

    /**
     * @property { number | undefined } max_members - the maximum number of members for the guild
     */
    max_members?: number;

    /**
     * @property { string | null } vanity_url_code - the vanity url code for the guild
     */
    vanity_url_code: string | null;

    /**
     * @property { string | null } description - the description of a Community guild
     */
    description: string | null;

    /**
     * @property { string | null } banner - banner hash
     * @see https://discord.com/developers/docs/reference#image-formatting
     */
    banner: string | null;

    /**
     * @property { number } premium_tier - premium tier (Server Boost level)
     * @see https://discord.com/developers/docs/resources/guild#guild-object-premium-tier
     */
    premium_tier: number;

    /**
     * @property { number | undefined } premium_subscription_count - the number of boosts this guild currently has
     */
    premium_subscription_count?: number;

    /**
     * @property { string } preferred_locale - the preferred locale of a Community guild; used in server discovery and notices from Discord; defaults to "en-US"
     */
    preferred_locale: string;

    /**
     * @property { Snowflake | null } public_updates_channel_id - the id of the channel where admins and moderators of Community guilds receive notices from Discord
     */
    public_updates_channel_id: Snowflake | null;

    /**
     * @property { number | undefined } max_video_channel_users - the maximum amount of users in a video channel
     */
    max_video_channel_users?: number;

    /**
     * @property { number | undefined } approximate_member_count - approximate number of members in this guild, returned from the GET /guilds/<id> endpoint when with_counts is true
     */
    approximate_member_count?: number;

    /**
     * @property { integer | undefined } approximate_presence_count - approximate number of non-offline members in this guild, returned from the GET /guilds/<id> endpoint when with_counts is true
     */
    approximate_presence_count?: number;

    /**
     * @property { WelcomeScreen | undefined } welcome_screen - the welcome screen of a Community guild, shown to new members, returned in an Invite's guild object
     * @see https://discord.com/developers/docs/resources/guild#welcome-screen-object
     */
    welcome_screen?: WelcomeScreen;

    /**
     * @property { number } nsfw_level - guild NSFW level
     * @see https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level
     */
    nsfw_level: number;

    /**
     * @property { Array<Stage> | undefined } stage_instances - Stage instances in the guild
     * @see https://discord.com/developers/docs/resources/stage-instance#stage-instance-object
     */
    stage_instances?: Array<StageInstance>;
}
