import { Member } from "../resources/member";
import { Presence } from "../resources/presence";
import { Snowflake } from "../resources/snowflake";

/**
 * @interface GuildMembersChunk
 * @see https://discord.com/developers/docs/topics/gateway#guild-members-chunk
 */
export interface GuildMembersChunk extends Event {
    /**
     * @param { Snowflake } guild_id - the id of the guild
     */
    guild_id: Snowflake;

    /**
     * @param { Array<Member> } members - set of guild members
     * @see https://discord.com/developers/docs/resources/guild#guild-member-object
     */
    members: Array<Member>;

    /**
     * @param { number } chunk_index - the chunk index in the expected chunks for this response (0 <= chunk_index < chunk_count)
     */
    chunk_index: number;

    /**
     * @param { number } chunk_count - the total number of expected chunks for this response
     */
    chunk_count: number;

    /**
     * @param { Array<any> } not_found - if passing an invalid id to REQUEST_GUILD_MEMBERS, it will be returned here
     */
    not_found: Array<any>;

    /**
     * @param { Array<Presence> } presences - if passing true to REQUEST_GUILD_MEMBERS, presences of the returned members will be here
     * @see https://discord.com/developers/docs/topics/gateway#presence
     */
    presences: Array<Presence>;

    /**
     * @param { string } nonce - the nonce used in the Guild Members Request
     * @see https://discord.com/developers/docs/topics/gateway#request-guild-members
     */
    nonce: string;
}