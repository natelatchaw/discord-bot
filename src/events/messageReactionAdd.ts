import { Emoji } from '../objects/emoji';
import { Member } from '../objects/member';
import { Snowflake } from '../objects/snowflake';

/**
 * @interface MessageReactionAdd
 * @see https://discord.com/developers/docs/topics/gateway#message-reaction-add
 */
export interface MessageReactionAdd extends Event {
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
     * @property { Member | undefined } member - the member who reacted if this happened in a guild
     * @see https://discord.com/developers/docs/resources/guild#guild-member-object
     */
    member?: Member;

    /**
     * @property { Emoji } emoji - the emoji used to react
     * @see https://discord.com/developers/docs/resources/emoji#emoji-object
     * @see https://discord.com/developers/docs/resources/emoji#emoji-object-gateway-reaction-standard-emoji-example
     */
    emoji: Emoji;
}
