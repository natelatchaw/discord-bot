import { Snowflake } from '../objects/snowflake';

/**
 * @interface GuildIntegrationsUpdate
 * @see https://discord.com/developers/docs/topics/gateway#guild-integrations-update
 */
export interface GuildIntegrationsUpdate extends Event {
    /**
     * @property { Snowflake } guild_id - id of the guild whose integrations were updated
     */
    guild_id: Snowflake;
}
