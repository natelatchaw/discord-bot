import { Member } from '../objects/member';
import { Snowflake } from '../objects/snowflake';

/**
 * @interface TypingStart
 * @see https://discord.com/developers/docs/topics/gateway#typing-start
 */
export interface TypingStart extends Event {
    /**
     * @property { Snowflake } channel_id - id of the channel
     */
    channel_id: Snowflake;

    /**
     * @property { Snowflake | undefined } guild_id - id of the guild
     */
    guild_id?: Snowflake;

    /**
     * @property { Snowflake } user_id - id of the user
     */
    user_id: Snowflake;

    /**
     * @property { number } timestamp - unix time (in seconds) of when the user started typing
     */
    timestamp: number;

    /**
     * @property { Member | undefined } member - the member who started typing if this happened in a guild
     * @see https://discord.com/developers/docs/resources/guild#guild-member-object
     */
    member?: Member;
}
