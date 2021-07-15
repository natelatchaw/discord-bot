import { Snowflake } from '../objects/snowflake';

/**
 * @interface ChannelPinsUpdate
 * @see https://discord.com/developers/docs/topics/gateway#channel-pins-update
 */
export interface ChannelPinsUpdate extends Event {
    /**
     * @property { Snowflake | undefined } guild_id - the id of the guild
     */
    guild_id?: Snowflake;

    /**
     * @property { Snowflake } channel_id - the id of the channel
     */
    channel_id: Snowflake;

    /**
     * @property { string | undefined | null } last_pin_timestamp - the time at which the most recent pinned message was pinned
     * ISO8601 formatted timestamp
     */
    last_pin_timestamp?: string | null;
}
