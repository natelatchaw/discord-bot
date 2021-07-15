import { Event } from '../event';
import { User } from '../resources/user';

/**
 * @interface UserUpdate
 * @see https://discord.com/developers/docs/topics/gateway#user-update
 */
export interface UserUpdate extends Event, User { }
