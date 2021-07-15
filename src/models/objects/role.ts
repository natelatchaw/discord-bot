import { RoleTags } from './roleTags';
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
     * @property { RoleTags | undefined } tags - the tags this role has
     * @see https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure
     */
    tags?: RoleTags;
}
