import { Snowflake } from "../resources/snowflake";

/**
 * @interface GuildIntegrationsUpdate
 * @see https://discord.com/developers/docs/topics/gateway#guild-integrations-update
 */
export interface GuildIntegrationsUpdate extends Event {
    /**
     * @param { Snowflake } guild_id - id of the guild whose integrations were updated
     */
    guild_id: Snowflake;
}