import { Emoji } from '../objects/emoji';
import { Snowflake } from '../objects/snowflake';

/**
 * @interface GuildEmojisUpdate
 * @see https://discord.com/developers/docs/topics/gateway#guild-emojis-update
 */
export interface GuildEmojisUpdate extends Event {
    /**
     * @property { Snowflake } guild_id - id of the guild
     */
    guild_id: Snowflake;

    /**
     * @property { Array<Emoji> } emojis - array of emojis
     * @see https://discord.com/developers/docs/resources/emoji#emoji-object
     */
    emojis: Array<Emoji>;
}
