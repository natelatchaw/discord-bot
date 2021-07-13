import { Snowflake } from "../resources/snowflake";
import { User } from "../resources/user";

/**
 * @interface GuildBanAdd
 * @see https://discord.com/developers/docs/topics/gateway#guild-ban-add
 */
export interface GuildBanAdd extends Event {
    /**
     * @param { Snowflake } guild_id - id of the guild
     */
    guild_id: Snowflake;

    /**
     * @param { User } user - the banned user
     * @see https://discord.com/developers/docs/resources/user#user-object
     */
    user: User;
}