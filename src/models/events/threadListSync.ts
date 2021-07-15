import { Channel } from '../objects/channel';
import { Snowflake } from '../objects/snowflake';
import { ThreadMember } from '../objects/threadMember';

/**
 * @interface ThreadListSync
 * @see https://discord.com/developers/docs/topics/gateway#thread-list-sync
 */
export interface ThreadListSync extends Event {
    /**
     * @property { Snowflake } guild_id - the id of the guild
     */
    guild_id: Snowflake;

    /**
     * @property { Array<Snowflake> | undefined } channel_ids - the parent channel ids whose threads are being synced. If omitted, then threads were synced for the entire guild. This array may contain channel_ids that have no active threads as well, so you know to clear that data.
     */
    channel_ids?: Array<Snowflake>;

    /**
     * @property { Array<Channel> } threads - all active threads in the given channels that the current user can access
     * @see https://discord.com/developers/docs/resources/channel#channel-object
     */
    threads: Array<Channel>;

    /**
     * @property { Array<ThreadMember> } members - all thread member objects from the synced threads for the current user, indicating which threads the current user has been added to
     * @see https://discord.com/developers/docs/resources/channel#thread-member-object
     */
    members: Array<ThreadMember>;
}
