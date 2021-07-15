import { Event } from '../event';
import { Channel } from '../objects/channel';

/**
 * @interface ThreadCreate
 * @see https://discord.com/developers/docs/topics/gateway#thread-create
 */
export interface ThreadCreate extends Event, Channel { }
