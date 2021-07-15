import { Event } from '../event';
import { Channel } from '../objects/channel';

/**
 * @interface ThreadDelete
 * @see https://discord.com/developers/docs/topics/gateway#thread-delete
 */
export interface ThreadDelete extends Event, Channel { }
