import { Snowflake } from './snowflake';

/**
 * @interface Overwrite
 * @see https://discord.com/developers/docs/resources/channel#overwrite-object
 */
export interface Overwrite {
    /**
     * @property { Snowflake } id - role or user id
     */
    id: Snowflake;

    /**
     * @property { number } type - either 0 (role) or 1 (member)
     */
    type: number;

    /**
     * @property { string } allow - permission bit set
     */
    allow: string;

    /**
     * @property { string } deny - permission bit set
     */
    deny: string;
}
