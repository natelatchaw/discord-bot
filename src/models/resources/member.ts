import { Snowflake } from './snowflake';
import { User } from './user';

/**
 * @interface Member
 * @see https://discord.com/developers/docs/resources/guild#guild-member-object
 */
export interface Member {
    /**
     * @property { User | undefined } user - the user this guild member represents
     * @see https://discord.com/developers/docs/resources/user#user-object
     */
    user?: User;

    /**
     * @property { string | undefined | null } nick - this user's guild nickname
     */
    nick?: string | null;

    /**
     * @property { Array<Snowflake> } roles - array of role object ids
     * @see https://discord.com/developers/docs/topics/permissions#role-object
     */
    roles: Array<Snowflake>;

    /**
     * @property { string } joined_at - when the user joined the guild
     * ISO8601 formatted timestamp
     */
    joined_at: string;

    /**
     * @property { string | undefined | null } premium_since - when the user started boosting the guild
     * @see https://support.discord.com/hc/en-us/articles/360028038352-Server-Boosting
     * ISO8601 formatted timestamp
     */
    premium_since?: string | null;

    /**
     * @property { boolean } deaf - whether the user is deafened in voice channels
     */
    deaf: boolean;

    /**
     * @property { boolean } mute - whether the user is muted in voice channels
     */
    mute: boolean;

    /**
     * @property { boolean | undefined } pending - whether the user has not yet passed the guild's Membership Screening requirements
     * @see https://discord.com/developers/docs/resources/guild#membership-screening-object
     */
    pending?: boolean;

    /**
     * @property { string | undefined } permissions - total permissions of the member in the channel, including overwrites, returned when in the interaction object
     */
    permissions?: string;
}
