import { ThreadMember } from '../resources/threadMember';

/**
 * @interface ThreadMemberUpdate
 * @see https://discord.com/developers/docs/topics/gateway#thread-member-update
 */
export interface ThreadMemberUpdate extends Event, ThreadMember { }
