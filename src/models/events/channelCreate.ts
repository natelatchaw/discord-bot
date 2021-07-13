import { Event } from '../payloads/dispatch';
import { Channel } from '../resources/channel';

/**
 * @interface ChannelCreate
 * @see https://discord.com/developers/docs/topics/gateway#channel-create
 */
export interface ChannelCreate extends Event, Channel { }