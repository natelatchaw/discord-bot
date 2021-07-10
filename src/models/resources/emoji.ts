import { Role } from "./role";
import { Snowflake } from "./snowflake";
import { User } from "./user";

/**
 * @interface Emoji
 * <https://discord.com/developers/docs/resources/emoji#emoji-object>
 */
export interface Emoji {
    /**
     * @param { Snowflake | undefined } id - emoji id
     * <https://discord.com/developers/docs/reference#image-formatting>
     */
    id?: Snowflake;

    /**
     * @param { string | undefined } name - emoji name (can be null only in reaction emoji objects)
     */
    name?: string;

    /**
     * @param { Array<Role> } roles - roles allowed to use this emoji
     * <https://discord.com/developers/docs/topics/permissions#role-object>
     */
    roles: Array<Role>;

    /**
     * @param { User } user - user that created this emoji
     * <https://discord.com/developers/docs/resources/user#user-object>
     */
    user: User;

    /**
     * @param { boolean } require_colons - whether this emoji must be wrapped in colons
     */
    require_colons: boolean;

    /**
     * @param { boolean } managed - whether this emoji is managed
     */
    managed: boolean;

    /**
     * @param { boolean } animated - whether this emoji is animated
     */
    animated: boolean;

    /**
     * @param { boolean } available - whether this emoji can be used, may be false due to loss of Server Boosts
     */
    available: boolean;
}