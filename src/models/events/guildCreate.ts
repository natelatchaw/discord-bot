import { Event } from '../event';
import { Guild } from '../resources/guild';

/**
 * @interface GuildCreate
 * @see https://discord.com/developers/docs/topics/gateway#guild-create
 */
export interface GuildCreate extends Event, Guild { }
