import { Snowflake } from '../objects/snowflake';

/**
 * @interface MessageReactionRemoveAll
 * @see https://discord.com/developers/docs/topics/gateway#message-reaction-remove-all
 */
export interface MessageReactionRemoveAll extends Event {
    /**
     * @property { Snowflake } channel_id - the id of the channel
     */
    channel_id: Snowflake;

    /**
     * @property { Snowflake } message_id - the id of the message
     */
    message_id: Snowflake;

    /**
     * @property { Snowflake | undefined } guild_id - the id of the guild
     */
    guild_id?: Snowflake;
}
