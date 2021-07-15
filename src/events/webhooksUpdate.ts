import { Snowflake } from '../objects/snowflake';

/**
 * @interface WebhooksUpdate
 * @see https://discord.com/developers/docs/topics/gateway#webhooks-update
 */
export interface WebhooksUpdate extends Event {
    /**
     * @property { Snowflake } guild_id - id of the guild
     */
    guild_id: Snowflake;

    /**
     * @property { Snowflake } channel_id - id of the channel
     */
    channel_id: Snowflake;
}
