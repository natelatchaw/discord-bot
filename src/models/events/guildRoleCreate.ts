import { Role } from "../resources/role";
import { Snowflake } from "../resources/snowflake";

/**
 * @interface GuildRoleCreate
 * @see https://discord.com/developers/docs/topics/gateway#guild-role-create
 */
export interface GuildRoleCreate extends Event {
    /**
     * @param { Snowflake } guild_id - the id of the guild
     */
    guild_id: Snowflake;

    /**
     * @param { Role } role - the role created
     * @see https://discord.com/developers/docs/topics/permissions#role-object
     */
    role: Role;
}