import { Integration } from '../objects/integration';
import { Snowflake } from '../objects/snowflake';
import { Event } from '../event';

/**
 * @interface IntegrationUpdate
 * @see https://discord.com/developers/docs/topics/gateway#integration-update
 */
export interface IntegrationUpdate extends Event, Integration {
    /**
     * @property { Snowflake } guild_id - id of the guild
     */
    guild_id: Snowflake;
}
