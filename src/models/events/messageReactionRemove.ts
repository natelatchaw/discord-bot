import { Event } from '../event';
import { Emoji } from '../objects/emoji';
import { Snowflake } from '../objects/snowflake';

/**
 * @interface MessageReactionRemove
 * @see https://discord.com/developers/docs/topics/gateway#message-reaction-remove
 */
export interface MessageReactionRemove extends Event {
    /**
     * @property { Snowflake } user_id - the id of the user
     */
    user_id: Snowflake;

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

    /**
     * @property { Emoji } emoji - the emoji used to react
     * @see https://discord.com/developers/docs/resources/emoji#emoji-object
     * @see https://discord.com/developers/docs/resources/emoji#emoji-object-gateway-reaction-standard-emoji-example
     */
    emoji: Emoji;
}
