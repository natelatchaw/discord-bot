import { Event } from '../event';
import { Channel } from '../resources/channel';

/**
 * @interface ChannelUpdate
 * @see https://discord.com/developers/docs/topics/gateway#channel-update
 */
export interface ChannelUpdate extends Event, Channel { }
