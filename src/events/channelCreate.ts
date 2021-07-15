import { Event } from '../event';
import { Channel } from '../objects/channel';

/**
 * @interface ChannelCreate
 * @see https://discord.com/developers/docs/topics/gateway#channel-create
 */
export interface ChannelCreate extends Event, Channel { }
