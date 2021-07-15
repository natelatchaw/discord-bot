/**
 * @interface ThreadMetadata
 * @see https://discord.com/developers/docs/resources/channel#thread-metadata-object
 */
export interface ThreadMetadata {
    /**
     * @property { boolean } archived - whether the thread is archived
     */
    archived: boolean;

    /**
     * @property { number } auto_archive_duration - duration in minutes to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080
     */
    auto_archive_duration: number;

    /**
     * @property { string } archive_timestamp - timestamp when the thread's archive status was last changed, used for calculating recent activity
     * ISO8601 formatted timestamp
     */
    archive_timestamp: string;

    /**
     * @property { boolean | undefined } locked - when a thread is locked, only users with MANAGE_THREADS can unarchive it
     */
    locked?: boolean;
}
