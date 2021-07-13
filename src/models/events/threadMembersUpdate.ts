import { Snowflake } from '../resources/snowflake';
import { ThreadMember } from '../resources/threadMember';

/**
 * @interface ThreadMembersUpdate
 * @see https://discord.com/developers/docs/topics/gateway#thread-members-update
 */
export interface ThreadMembersUpdate extends Event {
    /**
     * @param { Snowflake } id - the id of the thread
     */
    id: Snowflake;

    /**
     * @param { Snowflake } guild_id - the id of the guild
     */
    guild_id: Snowflake;

    /**
     * @param { number } member_count - the approximate number of members in the thread, capped at 50
     */
    member_count: number;

    /**
     * @param { Array<ThreadMember> } added_members - the users who were added to the thread
     * @see https://discord.com/developers/docs/resources/channel#thread-member-object
     */
    added_members: Array<ThreadMember>;

    /**
     * @param { Array<Snowflake> } removed_member_ids - the id of the users who were removed from the thread
     */
    removed_member_ids: Array<Snowflake>;
}
