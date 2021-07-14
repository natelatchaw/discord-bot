import { Snowflake } from './snowflake';

/**
 * @interface Role
 * @see https://discord.com/developers/docs/topics/permissions#role-object
 */
export interface Role {
    /**
     * @property { Snowflake } id - role id
     */
    id: Snowflake;

    /**
     * @property { string } name - role name
     */
    name: string;

    /**
     * @property { integer } color - integer representation of hexadecimal color code
     */
    color: number;

    /**
     * @property { boolean } hoist - if this role is pinned in the user listing
     */
    hoist: boolean;

    /**
     * @property { number } position - position of this role
     */
    position: number;

    /**
     * @property { string } permissions - permission bit set
     */
    permissions: string;

    /**
     * @property { boolean } managed - whether this role is managed by an integration
     */
    managed: boolean;

    /**
     * @property { boolean } mentionable - whether this role is mentionable
     */
    mentionable: boolean;

    /**
     * @property { RoleTags } tags - the tags this role has
     */
    tags: RoleTags;
}

export interface RoleTags {
    /**
     * @property { Snowflake } bot_id - the id of the bot this role belongs to
     */
    bot_id: Snowflake;

    /**
     * @property { Snowflake } integration_id - the id of the integration this role belongs to
     */
    integration_id: Snowflake;

    /**
     * @property { null } premium_subscriber - whether this is the guild's premium subscriber role
     */
    premium_subscriber: null;
}
