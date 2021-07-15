import { Snowflake } from '../objects/snowflake';
import { User } from '../objects/user';

/**
 * @interface GuildMemberUpdate
 * @see https://discord.com/developers/docs/topics/gateway#guild-member-update
 */
export interface GuildMemberUpdate extends Event {
    /**
     * @property { Snowflake } guild_id - the id of the guild
     */
    guild_id: Snowflake;

    /**
     * @property { Array<Snowflake> } roles - user role ids
     */
    roles: Array<Snowflake>;

    /**
     * @property { User } user - the user
     * @see https://discord.com/developers/docs/resources/user#user-object
     */
    user: User;

    /**
     * @property { string | undefined | null } nick - nickname of the user in the guild
     */
    nick?: string;

    /**
     * @property { string | null } joined_at - when the user joined the guild
     * ISO8601 formatted timestamp
     */
    joined_at?: string | null;

    /**
     * @property { string | undefined | null } premium_since - when the user starting boosting the guild
     * @see https://support.discord.com/hc/en-us/articles/360028038352-Server-Boosting-
     * ISO8601 formatted timestamp
     */
    premium_since?: string | null;

    /**
     * @property { boolean | undefined } deaf - whether the user is deafened in voice channels
     */
    deaf?: boolean;

    /**
     * @property { boolean | undefined } mute - whether the user is muted in voice channels
     */
    mute?: boolean;

    /**
     * @property { boolean | undefined } pending - whether the user has not yet passed the guild's Membership Screening requirements
     * @see https://discord.com/developers/docs/resources/guild#membership-screening-object
     */
    pending?: boolean;
}
