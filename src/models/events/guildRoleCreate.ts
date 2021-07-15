import { Role } from '../objects/role';
import { Snowflake } from '../objects/snowflake';

/**
 * @interface GuildRoleCreate
 * @see https://discord.com/developers/docs/topics/gateway#guild-role-create
 */
export interface GuildRoleCreate extends Event {
    /**
     * @property { Snowflake } guild_id - the id of the guild
     */
    guild_id: Snowflake;

    /**
     * @property { Role } role - the role created
     * @see https://discord.com/developers/docs/topics/permissions#role-object
     */
    role: Role;
}
