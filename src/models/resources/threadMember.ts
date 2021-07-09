import { Snowflake } from "./snowflake";

/**
 * @interface ThreadMember
 * <https://discord.com/developers/docs/resources/channel#thread-member-object>
 */
export interface ThreadMember {
    /**
     * @param { Snowflake } id - the id of the thread
     */
    id: Snowflake;

    /**
     * @param { Snowflake } user_id - the id of the user
     */
    user_id: Snowflake;

    /**
     * @param { string } join_timestamp - the time the current user last joined the thread
     * ISO8601 formatted timestamp
     */
    join_timestamp: string;

    /**
     * @param { number } flags - any user-thread settings, currently only used for notifications
     */
    flags: number;
}