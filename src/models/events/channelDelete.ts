import { Event } from '../event';
import { Channel } from '../resources/channel';

/**
 * @interface ChannelDelete
 * @see https://discord.com/developers/docs/topics/gateway#channel-delete
 */
export interface ChannelDelete extends Event, Channel { }
