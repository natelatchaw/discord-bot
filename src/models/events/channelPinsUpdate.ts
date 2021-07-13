import { Snowflake } from "../resources/snowflake";

/**
 * @interface ChannelPinsUpdate
 * @see https://discord.com/developers/docs/topics/gateway#channel-pins-update
 */
export interface ChannelPinsUpdate extends Event {
    /**
     * @param { Snowflake } guild_id - the id of the guild
     */
    guild_id: Snowflake;

    /**
     * @param { Snowflake } channel_id - the id of the channel
     */
    channel_id: Snowflake;

    /**
     * @param { string | undefined } last_pin_timestamp - the time at which the most recent pinned message was pinned
     * ISO8601 formatted timestamp
     */
    last_pin_timestamp?: string;
}