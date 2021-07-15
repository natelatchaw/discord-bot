/**
 * @interface ActivityParty
 * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-party
 */
export interface ActivityParty {
    /**
     * @property { string | undefined } id - the id of the party
     */
    id?: string;

    /**
     * @property { Array<number> | undefined } size - used to show the party's current and maximum size
     * array of two integers (current_size, max_size)
     */
    size?: Array<number>;
}
