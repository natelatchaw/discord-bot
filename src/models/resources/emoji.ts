import { Role } from './role';
import { Snowflake } from './snowflake';
import { User } from './user';

/**
 * @interface Emoji
 * @see https://discord.com/developers/docs/resources/emoji#emoji-object
 */
export interface Emoji {
    /**
     * @property { Snowflake | null } id - emoji id
     * @see https://discord.com/developers/docs/reference#image-formatting
     */
    id: Snowflake | null;

    /**
     * @property { string | null } name - emoji name (can be null only in reaction emoji objects)
     */
    name: string | null;

    /**
     * @property { Array<Role> } roles - roles allowed to use this emoji
     * @see https://discord.com/developers/docs/topics/permissions#role-object
     */
    roles: Array<Role>;

    /**
     * @property { User } user - user that created this emoji
     * @see https://discord.com/developers/docs/resources/user#user-object
     */
    user: User;

    /**
     * @property { boolean } require_colons - whether this emoji must be wrapped in colons
     */
    require_colons: boolean;

    /**
     * @property { boolean } managed - whether this emoji is managed
     */
    managed: boolean;

    /**
     * @property { boolean } animated - whether this emoji is animated
     */
    animated: boolean;

    /**
     * @property { boolean } available - whether this emoji can be used, may be false due to loss of Server Boosts
     */
    available: boolean;
}
