import { Activity } from './activity';
import { ClientStatus } from './clientStatus';
import { Snowflake } from './snowflake';
import { User } from './user';

/**
 * @interface Presence
 * @see https://discord.com/developers/docs/topics/gateway#presence-update
 */
export interface Presence {
    /**
     * @property { User } user - the user presence is being updated for
     * @see https://discord.com/developers/docs/resources/user#user-object
     */
    user: User;

    /**
     * @property { Snowflake } guild_id - id of the guild
     */
    guild_id: Snowflake;

    /**
     * @property { string } status - either "idle", "dnd", "online", or "offline"
     */
    status: string;

    /**
     * @property { Array<Activity> } activities - user's current activities
     * @see https://discord.com/developers/docs/topics/gateway#activity-object
     */
    activities: Array<Activity>;

    /**
     * @property { ClientStatus } client_status - user's platform-dependent status
     * @see https://discord.com/developers/docs/topics/gateway#client-status-object
     */
    client_status: ClientStatus;
}
