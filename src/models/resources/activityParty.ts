/**
 * @interface ActivityParty
 * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-party
 */
export interface ActivityParty {
    /**
     * @param { string } id - the id of the party
     */
    id: string;

    /**
     * @param { Array<number> } size - used to show the party's current and maximum size
     * array of two integers (current_size, max_size)
     */
    size: Array<number>;
}
