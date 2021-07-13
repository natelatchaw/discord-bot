import { Event } from '../payloads/dispatch';
import { Channel } from '../resources/channel';

/**
 * @interface ThreadDelete
 * @see https://discord.com/developers/docs/topics/gateway#thread-delete
 */
export interface ThreadDelete extends Event, Channel { }