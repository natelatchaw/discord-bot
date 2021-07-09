import { Snowflake } from "./snowflake";

/**
 * @interface Overwrite
 * <https://discord.com/developers/docs/resources/channel#overwrite-object>
 */
export interface Overwrite {
    /**
     * @param { Snowflake } id - role or user id
     */
    id: Snowflake;

    /**
     * @param { number } type - either 0 (role) or 1 (member)
     */
    type: number;

    /**
     * @param { string } allow - permission bit set
     */
    allow: string;

    /**
     * @param { string } deny - permission bit set
     */
    deny: string;
}