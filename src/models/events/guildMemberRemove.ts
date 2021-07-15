import { Snowflake } from '../objects/snowflake';
import { User } from '../objects/user';

/**
 * @interface GuildMemberRemove
 * @see https://discord.com/developers/docs/topics/gateway#guild-member-remove
 */
export interface GuildMemberRemove extends Event {
    /**
     * @property { Snowflake } guild_id - the id of the guild
     */
    guild_id: Snowflake;

    /**
     * @property { User } user - the user who was removed
     * @see https://discord.com/developers/docs/resources/user#user-object
     */
    user: User;
}
