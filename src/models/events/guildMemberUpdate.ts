import { Snowflake } from '../resources/snowflake';
import { User } from '../resources/user';

/**
 * @interface GuildMemberUpdate
 * @see https://discord.com/developers/docs/topics/gateway#guild-member-update
 */
export interface GuildMemberUpdate extends Event {
    /**
     * @param { Snowflake } guild_id - the id of the guild
     */
    guild_id: Snowflake;

    /**
     * @param { Array<Snowflake> } roles - user role ids
     */
    roles: Array<Snowflake>;

    /**
     * @param { User } user - the user
     * @see https://discord.com/developers/docs/resources/user#user-object
     */
    user: User;

    /**
     * @param { string | undefined } nick - nickname of the user in the guild
     */
    nick?: string;

    /**
     * @param { string | undefined } joined_at - when the user joined the guild
     * ISO8601 formatted timestamp
     */
    joined_at?: string;

    /**
     * @param { string | undefined } premium_since - when the user starting boosting the guild
     * @see https://support.discord.com/hc/en-us/articles/360028038352-Server-Boosting-
     * ISO8601 formatted timestamp
     */
    premium_since?: string;

    /**
     * @param { boolean } deaf - whether the user is deafened in voice channels
     */
    deaf: boolean;

    /**
     * @param { boolean } mute - whether the user is muted in voice channels
     */
    mute: boolean;

    /**
     * @param { boolean } pending - whether the user has not yet passed the guild's Membership Screening requirements
     * @see https://discord.com/developers/docs/resources/guild#membership-screening-object
     */
    pending: boolean;
}
