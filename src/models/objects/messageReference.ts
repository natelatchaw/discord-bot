import { Snowflake } from './snowflake';

/**
 * @interface MessageReference
 * @see https://discord.com/developers/docs/resources/channel#message-reference-object
 */
export interface MessageReference {
    /**
     * @property { Snowflake | undefined } message_id - id of the originating message
     */
    message_id?: Snowflake;

    /**
     * @property { Snowflake | undefined } channel_id - id of the originating message's channel
     */
    channel_id?: Snowflake;

    /**
     * @property { Snowflake | undefined } guild_id - id of the originating message's guild
     */
    guild_id?: Snowflake;

    /**
     * @property { boolean | undefined } fail_if_not_exists - when sending, whether to error if the referenced message doesn't exist instead of sending as a normal (non-reply) message, default true
     */
    fail_if_not_exists?: boolean;
}
