import { Event } from '../event';
import { Guild } from '../objects/guild';

/**
 * @interface GuildDelete
 * @see https://discord.com/developers/docs/topics/gateway#guild-delete
 */
export interface GuildDelete extends Event, Guild { }
