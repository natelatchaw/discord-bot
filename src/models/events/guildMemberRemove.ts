import { Snowflake } from "../resources/snowflake";
import { User } from "../resources/user";

/**
 * @interface GuildMemberRemove
 * @see https://discord.com/developers/docs/topics/gateway#guild-member-remove
 */
export interface GuildMemberRemove extends Event {
    /**
     * @param { Snowflake } guild_id - the id of the guild
     */
    guild_id: Snowflake;

    /**
     * @param { User } user - the user who was removed
     * @see https://discord.com/developers/docs/resources/user#user-object
     */
    user: User;
}