import { Event } from '../payloads/dispatch';
import { Channel } from '../resources/channel';

/**
 * @interface ThreadCreate
 * @see https://discord.com/developers/docs/topics/gateway#thread-create
 */
export interface ThreadCreate extends Event, Channel { }