import { Event } from '../event';
import { Application } from '../objects/application';
import { Guild } from '../objects/guild';
import { User } from '../objects/user';

/**
 * @interface Ready
 * @see https://discord.com/developers/docs/topics/gateway#ready
 */
export interface Ready extends Event {
    /**
     * @property { number } v - gateway version
     * @see https://discord.com/developers/docs/topics/gateway#gateways-gateway-versions
     */
    v: number;

    /**
     * @property { User } user - information about the user including email
     * @see https://discord.com/developers/docs/resources/user#user-object
     */
    user: User;

    /**
     * @property { Array<Guild> } guilds - the guilds the user is in
     * @see https://discord.com/developers/docs/resources/guild#unavailable-guild-object
     */
    guilds: Array<Guild>;

    /**
     * @property { string } session_id - used for resuming connections
     */
    session_id: string;

    /**
     * @property { Array<number> | undefined } shard - the shard information associated with this session, if sent when identifying
     * @see https://discord.com/developers/docs/topics/gateway#sharding
     */
    shard?: Array<number>;

    /**
     * @property { Application } application - contains id and flags
     */
    application: Application;
}
