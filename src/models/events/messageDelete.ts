import { Event } from '../event';
import { Snowflake } from '../objects/snowflake';

/**
 * @interface MessageDelete
 * @see https://discord.com/developers/docs/topics/gateway#message-delete
 */
export interface MessageDelete extends Event {
    /**
     * @property { Snowflake } id - the id of the message
     */
    id: Snowflake;

    /**
     * @property { Snowflake } channel_id - the id of the channel
     */
    channel_id: Snowflake;

    /**
     * @property { Snowflake | undefined } guild_id - the id of the guild
     */
    guild_id?: Snowflake;
}
