import { Snowflake } from './snowflake';

/**
 * @interface ThreadMember
 * @see https://discord.com/developers/docs/resources/channel#thread-member-object
 */
export interface ThreadMember {
    /**
     * @property { Snowflake | undefined } id - the id of the thread
     */
    id?: Snowflake;

    /**
     * @property { Snowflake | undefined } user_id - the id of the user
     */
    user_id?: Snowflake;

    /**
     * @property { string } join_timestamp - the time the current user last joined the thread
     * ISO8601 formatted timestamp
     */
    join_timestamp: string;

    /**
     * @property { number } flags - any user-thread settings, currently only used for notifications
     */
    flags: number;
}
