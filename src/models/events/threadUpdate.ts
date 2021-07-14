import { Event } from '../event';
import { Channel } from '../resources/channel';

/**
 * @interface ThreadUpdate
 * @see https://discord.com/developers/docs/topics/gateway#thread-update
 */
export interface ThreadUpdate extends Event, Channel { }
