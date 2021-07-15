import { Snowflake } from './snowflake';

/**
 * @interface ChannelMention
 * @see https://discord.com/developers/docs/resources/channel#channel-mention-object
 */
export interface ChannelMention {
    /**
     * @property { Snowflake } id - id of the channel
     */
    id: Snowflake;

    /**
     * @property { Snowflake } guild_id - id of the guild containing the channel
     */
    guild_id: Snowflake;

    /**
     * @property { number } type - the type of channel
     * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-types
     */
    type: number;

    /**
     * @property { string } name - the name of the channel
     */
    name: string;
}
