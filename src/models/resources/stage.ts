import { Snowflake } from "./snowflake";

/**
 * @interface Stage
 * <https://discord.com/developers/docs/resources/stage-instance#stage-instance-object>
 */
export interface Stage {
    /**
     * @param { Snowflake } id - The id of this Stage instance
     */
    id: Snowflake;

    /**
     * @param { Snowflake } guild_id - The guild id of the associated Stage channel
     */
    guild_id: Snowflake;

    /**
     * @param { Snowflake } channel_id - The id of the associated Stage channel
     */
    channel_id: Snowflake;

    /**
     * @param { string } topic - The topic of the Stage instance (1-120 characters)
     */
    topic: string;

    /**
     * @param { number } privacy_level - The privacy level of the Stage instance
     * <https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-privacy-level>
     */
    privacy_level: number;

    /**
     * @param { boolean } discoverable_disabled - Whether or not Stage discovery is disabled
     */
    discoverable_disabled: boolean;
}