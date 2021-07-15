import { Snowflake } from '../objects/snowflake';
import { User } from '../objects/user';

/**
 * @interface GuildBanAdd
 * @see https://discord.com/developers/docs/topics/gateway#guild-ban-add
 */
export interface GuildBanAdd extends Event {
    /**
     * @property { Snowflake } guild_id - id of the guild
     */
    guild_id: Snowflake;

    /**
     * @property { User } user - the banned user
     * @see https://discord.com/developers/docs/resources/user#user-object
     */
    user: User;
}
