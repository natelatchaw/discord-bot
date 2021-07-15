import { Role } from '../objects/role';
import { Snowflake } from '../objects/snowflake';

/**
 * @interface GuildRoleUpdate
 * @see https://discord.com/developers/docs/topics/gateway#guild-role-update
 */
export interface GuildRoleUpdate extends Event {
    /**
     * @property { Snowflake } guild_id - the id of the guild
     */
    guild_id: Snowflake;

    /**
     * @property { Role } role - the role updated
     * @see https://discord.com/developers/docs/topics/permissions#role-object
     */
    role: Role;
}
