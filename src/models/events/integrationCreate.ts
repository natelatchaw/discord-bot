import { Integration } from '../resources/integration';
import { Snowflake } from '../resources/snowflake';
import { Event } from '../event';

/**
 * @interface IntegrationCreate
 * @see https://discord.com/developers/docs/topics/gateway#integration-create
 */
export interface IntegrationCreate extends Event, Integration {
    /**
     * @property { Snowflake } guild_id - id of the guild
     */
    guild_id: Snowflake;
}
