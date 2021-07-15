import { Snowflake } from '../objects/snowflake';

/**
 * @interface VoiceServerUpdate
 * @see https://discord.com/developers/docs/topics/gateway#voice-server-update
 */
export interface VoiceServerUpdate extends Event {
    /**
     * @property { string } token - voice connection token
     */
    token: string;

    /**
     * @property { Snowflake } guild_id - the guild this voice server update is for
     */
    guild_id: Snowflake;

    /**
     * @property { string | null } endpoint - the voice server host
     */
    endpoint: string | null;
}
