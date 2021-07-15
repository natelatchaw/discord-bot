import { Member } from '../objects/member';
import { Snowflake } from '../objects/snowflake';

/**
 * @interface GuildMemberAdd
 * @see https://discord.com/developers/docs/topics/gateway#guild-member-add
 */
export interface GuildMemberAdd extends Event, Member {
    /**
     * @property { Snowflake } guild_id - id of the guild
     */
    guild_id: Snowflake;
}
