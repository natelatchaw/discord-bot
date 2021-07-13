import { Role } from "../resources/role";
import { Snowflake } from "../resources/snowflake";

/**
 * @interface GuildRoleUpdate
 * @see https://discord.com/developers/docs/topics/gateway#guild-role-update
 */
export interface GuildRoleUpdate extends Event {
    /**
     * @param { Snowflake } guild_id - the id of the guild
     */
    guild_id: Snowflake;

    /**
     * @param { Role } role - the role updated
     * @see https://discord.com/developers/docs/topics/permissions#role-object
     */
    role: Role;
}