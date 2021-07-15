/**
 * @interface Timestamps
 * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-timestamps>
 */
export interface Timestamps {
    /**
     * @property { number | undefined } start - unix time (in milliseconds) of when the activity started
     */
    start?: number;

    /**
     * @property { number | undefined } end - unix time (in milliseconds) of when the activity ends
     */
    end?: number;
}
