import { Event } from '../payloads/dispatch';
import { Guild } from '../resources/guild';

/**
 * @interface GuildDelete
 * @see https://discord.com/developers/docs/topics/gateway#guild-delete
 */
export interface GuildDelete extends Event, Guild { }