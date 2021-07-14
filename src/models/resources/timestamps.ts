/**
 * @interface Timestamps
 * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-timestamps>
 */
export interface Timestamps {
    /**
     * @property { number } start - unix time (in milliseconds) of when the activity started
     */
    start: number;

    /**
     * @property { number } end - unix time (in milliseconds) of when the activity ends
     */
    end: number;
}
