/**
 * @interface Timestamps
 * <https://discord.com/developers/docs/topics/gateway#activity-object-activity-timestamps>
 */
export interface Timestamps {
    /**
     * @param { number } start - unix time (in milliseconds) of when the activity started
     */
    start: number;

    /**
     * @param { number } end - unix time (in milliseconds) of when the activity ends
     */
    end: number;
}