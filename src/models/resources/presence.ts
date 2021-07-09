import { Activity } from "./activity";
import { ClientStatus } from "./clientStatus";
import { Snowflake } from "./snowflake";
import { User } from "./user";

/**
 * @interface Prescence
 * <https://discord.com/developers/docs/topics/gateway#presence-update>
 */
export interface Prescence {
    /**
     * @param { User } user - the user presence is being updated for
     * <https://discord.com/developers/docs/resources/user#user-object>
     */
    user: User;

    /**
     * @param { Snowflake } guild_id - id of the guild
     */
    guild_id: Snowflake;

    /**
     * @param { string } status - either "idle", "dnd", "online", or "offline"
     */
    status: string;

    /**
     * @param { Array<Activity> } activities - user's current activities
     * <https://discord.com/developers/docs/topics/gateway#activity-object>
     */
    activities: Array<Activity>;

    /**
     * @param { ClientStatus } client_status - user's platform-dependent status
     * <https://discord.com/developers/docs/topics/gateway#client-status-object>
     */
    client_status: ClientStatus;
}