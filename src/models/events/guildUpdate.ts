import { Event } from '../event';
import { Guild } from '../resources/guild';

/**
 * @interface GuildUpdate
 * @see https://discord.com/developers/docs/topics/gateway#guild-update
 */
export interface GuildUpdate extends Event, Guild { }