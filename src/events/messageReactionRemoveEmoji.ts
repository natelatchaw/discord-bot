import { Emoji } from '../objects/emoji';
import { Snowflake } from '../objects/snowflake';

/**
 * @interface MessageReactionRemoveEmoji
 * @see https://discord.com/developers/docs/topics/gateway#message-reaction-remove-emoji
 */
export interface MessageReactionRemoveEmoji extends Event {
    /**
     * @property { Snowflake } channel_id - the id of the channel
     */
    channel_id: Snowflake;

    /**
     * @property { Snowflake | undefined } guild_id - the id of the guild
     */
    guild_id?: Snowflake;

    /**
     * @property { Snowflake } message_id - the id of the message
     */
    message_id: Snowflake;

    /**
     * @property { Emoji } emoji - the emoji that was removed
     */
    emoji: Emoji;
}
