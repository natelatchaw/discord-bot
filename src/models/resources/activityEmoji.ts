import { Snowflake } from "./snowflake";

/**
 * @interface ActivityEmoji
 * <https://discord.com/developers/docs/topics/gateway#activity-object-activity-emoji>
 */
export interface ActivityEmoji {
    /**
     * @param { string } name - the name of the emoji
     */
    name: string;

    /**
     * @param { Snowflake } id - the id of the emoji
     */
    id: Snowflake;

    /**
     * @param { boolean } animated - whether this emoji is animated
     */
    animated: boolean;
}