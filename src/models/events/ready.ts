import { Event } from "../payloads/dispatch";
import { Application } from "../resources/application";
import { Guild } from "../resources/guild";
import { User } from "../resources/user";

/**
 * @interface Ready
 * <https://discord.com/developers/docs/topics/gateway#ready>
 */
export interface Ready extends Event {
    /**
     * @param { number } v - gateway version
     * <https://discord.com/developers/docs/topics/gateway#gateways-gateway-versions>
     */
    v: number;

    /**
     * @param { User } user - information about the user including email
     * <https://discord.com/developers/docs/resources/user#user-object>
     */
    user: User;

    /**
     * @param { Array<Guild> } guilds - the guilds the user is in
     * <https://discord.com/developers/docs/resources/guild#unavailable-guild-object>
     */
    guilds: Array<Guild>;

    /**
     * @param { string } session_id - used for resuming connections
     */
    session_id: string;

    /**
     * @param { Array<number> } shard - the shard information associated with this session, if sent when identifying
     * <https://discord.com/developers/docs/topics/gateway#sharding>
     */
    shard: Array<number>;

    /**
     * @param { Application } application - contains id and flags
     */
    application: Application;
}