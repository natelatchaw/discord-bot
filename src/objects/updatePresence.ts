import { Activity } from './activity';

/**
 * @interface UpdatePresence
 * @see https://discord.com/developers/docs/topics/gateway#update-presence
 */
export interface UpdatePresence {
    /**
     * @param { number | null } since - unix time (in milliseconds) of when the client went idle, or null if the client is not idle
     */
    since: number | null;

    /**
     * @param { Array<Activity> } activities - the user's activities
     * @see https://discord.com/developers/docs/topics/gateway#activity-object
     */
    activities: Array<Activity>;

    /**
     * @param { string } status - the user's new status
     * @see https://discord.com/developers/docs/topics/gateway#update-status-status-types
     */
    status: string;

    /**
     * @param { boolean } afk - whether or not the client is afk
     */
    afk: boolean;
}
