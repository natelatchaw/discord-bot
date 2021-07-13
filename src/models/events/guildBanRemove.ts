import { Snowflake } from '../resources/snowflake';
import { User } from '../resources/user';

/**
 * @interface GuildBanRemove
 * @see https://discord.com/developers/docs/topics/gateway#guild-ban-remove
 */
export interface GuildBanRemove extends Event {
    /**
     * @param { Snowflake } guild_id - id of the guild
     */
    guild_id: Snowflake;

    /**
     * @param { User } user - the unbanned user
     * @see https://discord.com/developers/docs/resources/user#user-object
     */
    user: User;
}
