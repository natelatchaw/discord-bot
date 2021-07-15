import { Snowflake } from '../objects/snowflake';

/**
 * @interface GuildRoleDelete
 * @see https://discord.com/developers/docs/topics/gateway#guild-role-delete
 */
export interface GuildRoleDelete extends Event {
    /**
     * @property { Snowflake } guild_id - id of the guild
     */
    guild_id: Snowflake;

    /**
     * @property { Snowflake } role_id - id of the role
     */
    role_id: Snowflake;
}
