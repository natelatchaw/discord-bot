import { Emoji } from "../resources/emoji";
import { Snowflake } from "../resources/snowflake";

/**
 * @interface GuildEmojisUpdate
 * @see https://discord.com/developers/docs/topics/gateway#guild-emojis-update
 */
export interface GuildEmojisUpdate extends Event {
    /**
     * @param { Snowflake } guild_id - id of the guild
     */
    guild_id: Snowflake;

    /**
     * @param { Array<Emoji> } emojis - array of emojis
     * @see https://discord.com/developers/docs/resources/emoji#emoji-object
     */
    emojis: Array<Emoji>;
}