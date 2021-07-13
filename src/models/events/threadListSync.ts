import { Channel } from '../resources/channel';
import { Snowflake } from '../resources/snowflake';
import { ThreadMember } from '../resources/threadMember';

/**
 * @interface ThreadListSync
 * @see https://discord.com/developers/docs/topics/gateway#thread-list-sync
 */
export interface ThreadListSync extends Event {
    /**
     * @param { Snowflake } guild_id - the id of the guild
     */
    guild_id: Snowflake;

    /**
     * @param { Array<Snowflake> } channel_ids - the parent channel ids whose threads are being synced. If omitted, then threads were synced for the entire guild. This array may contain channel_ids that have no active threads as well, so you know to clear that data.
     */
    channel_ids: Array<Snowflake>;

    /**
     * @param { Array<Channel> } threads - all active threads in the given channels that the current user can access
     * @see https://discord.com/developers/docs/resources/channel#channel-object
     */
    threads: Array<Channel>;

    /**
     * @param { Array<ThreadMember> } members - all thread member objects from the synced threads for the current user, indicating which threads the current user has been added to
     * @see https://discord.com/developers/docs/resources/channel#thread-member-object
     */
    members: Array<ThreadMember>;
}
