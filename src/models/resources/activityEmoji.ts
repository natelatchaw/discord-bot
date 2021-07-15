import { Snowflake } from './snowflake';

/**
 * @interface ActivityEmoji
 * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-emoji>
 */
export interface ActivityEmoji {
    /**
     * @property { string } name - the name of the emoji
     */
    name: string;

    /**
     * @property { Snowflake | undefined } id - the id of the emoji
     */
    id?: Snowflake;

    /**
     * @property { boolean | undefined } animated - whether this emoji is animated
     */
    animated?: boolean;
}
