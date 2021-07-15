import { Message } from '../objects/message';
import { Event } from '../event';

/**
 * @interface MessageCreate
 * @see https://discord.com/developers/docs/topics/gateway#message-create
 */
export interface MessageCreate extends Event, Message { }
