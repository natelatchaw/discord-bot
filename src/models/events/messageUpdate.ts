import { Message } from '../resources/message';
import { Event } from '../event';

/**
 * @interface MessageUpdate
 * @see https://discord.com/developers/docs/topics/gateway#message-update
 */
export interface MessageUpdate extends Event, Message { }
