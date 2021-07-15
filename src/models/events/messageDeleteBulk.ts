import { Event } from '../event';
import { Snowflake } from '../objects/snowflake';

/**
 * @interface MessageDeleteBulk
 * @see https://discord.com/developers/docs/topics/gateway#message-delete-bulk
 */
export interface MessageDeleteBulk extends Event {
    /**
     * @property { Array<Snowflake> } ids - the ids of the messages
     */
    ids: Array<Snowflake>;

    /**
     * @property { Snowflake } channel_id - the id of the channel
     */
    channel_id: Snowflake;

    /**
     * @property { Snowflake | undefined } guild_id - the id of the guild
     */
    guild_id?: Snowflake;
}
