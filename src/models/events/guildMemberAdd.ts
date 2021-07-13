import { Member } from "../resources/member";
import { Snowflake } from "../resources/snowflake";

/**
 * @interface GuildMemberAdd
 * @see https://discord.com/developers/docs/topics/gateway#guild-member-add
 */
export interface GuildMemberAdd extends Event, Member {
    /**
     * @param { Snowflake } guild_id - id of the guild
     */
    guild_id: Snowflake;
}