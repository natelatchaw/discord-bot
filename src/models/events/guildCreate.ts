import { Event } from '../event';
import { Guild } from '../objects/guild';

/**
 * @interface GuildCreate
 * @see https://discord.com/developers/docs/topics/gateway#guild-create
 */
export interface GuildCreate extends Event, Guild { }
