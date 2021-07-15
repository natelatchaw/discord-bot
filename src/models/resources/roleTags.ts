import { Snowflake } from './snowflake';

/**
 * @interface RoleTags
 * @see https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure
 */
export interface RoleTags {
    /**
     * @property { Snowflake | undefined } bot_id - the id of the bot this role belongs to
     */
    bot_id?: Snowflake;

    /**
     * @property { Snowflake | undefined } integration_id - the id of the integration this role belongs to
     */
    integration_id?: Snowflake;

    /**
     * @property { undefined | null } premium_subscriber - whether this is the guild's premium subscriber role
     */
    premium_subscriber?: null;
}
