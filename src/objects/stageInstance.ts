import { Snowflake } from './snowflake';

/**
 * @interface StageInstance
 * @see https://discord.com/developers/docs/resources/stage-instance#stage-instance-object
 */
export interface StageInstance {
    /**
     * @property { Snowflake } id - The id of this Stage instance
     */
    id: Snowflake;

    /**
     * @property { Snowflake } guild_id - The guild id of the associated Stage channel
     */
    guild_id: Snowflake;

    /**
     * @property { Snowflake } channel_id - The id of the associated Stage channel
     */
    channel_id: Snowflake;

    /**
     * @property { string } topic - The topic of the Stage instance (1-120 characters)
     */
    topic: string;

    /**
     * @property { number } privacy_level - The privacy level of the Stage instance
     * @see https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-privacy-level
     */
    privacy_level: number;

    /**
     * @property { boolean } discoverable_disabled - Whether or not Stage discovery is disabled
     */
    discoverable_disabled: boolean;
}
