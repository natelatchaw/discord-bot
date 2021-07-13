import { Snowflake } from '../resources/snowflake';

/**
 * @interface GuildRoleDelete
 * @see https://discord.com/developers/docs/topics/gateway#guild-role-delete
 */
export interface GuildRoleDelete extends Event {
    /**
     * @param { Snowflake } guild_id - id of the guild
     */
    guild_id: Snowflake;

    /**
     * @param { Snowflake } role_id - id of the role
     */
    role_id: Snowflake;
}
