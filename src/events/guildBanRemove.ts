import { Snowflake } from '../objects/snowflake';
import { User } from '../objects/user';

/**
 * @interface GuildBanRemove
 * @see https://discord.com/developers/docs/topics/gateway#guild-ban-remove
 */
export interface GuildBanRemove extends Event {
    /**
     * @property { Snowflake } guild_id - id of the guild
     */
    guild_id: Snowflake;

    /**
     * @property { User } user - the unbanned user
     * @see https://discord.com/developers/docs/resources/user#user-object
     */
    user: User;
}
