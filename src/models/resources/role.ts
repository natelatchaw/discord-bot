import { Snowflake } from './snowflake';

/**
 * @interface Role
 * @see https://discord.com/developers/docs/topics/permissions#role-object
 */
export interface Role {
    /**
     * @param { Snowflake } id - role id
     */
    id: Snowflake;

    /**
     * @param { string } name - role name
     */
    name: string;

    /**
     * @param { integer } color - integer representation of hexadecimal color code
     */
    color: number;

    /**
     * @param { boolean } hoist - if this role is pinned in the user listing
     */
    hoist: boolean;

    /**
     * @param { number } position - position of this role
     */
    position: number;

    /**
     * @param { string } permissions - permission bit set
     */
    permissions: string;

    /**
     * @param { boolean } managed - whether this role is managed by an integration
     */
    managed: boolean;

    /**
     * @param { boolean } mentionable - whether this role is mentionable
     */
    mentionable: boolean;

    /**
     * @param { RoleTags } tags - the tags this role has
     */
    tags: RoleTags;
}

export interface RoleTags {
    /**
     * @param { Snowflake } bot_id - the id of the bot this role belongs to
     */
    bot_id: Snowflake;

    /**
     * @param { Snowflake } integration_id - the id of the integration this role belongs to
     */
    integration_id: Snowflake;

    /**
     * @param { null } premium_subscriber - whether this is the guild's premium subscriber role
     */
    premium_subscriber: null;
}
