import { Snowflake } from './snowflake';

/**
 * @interface MessageStickerItem
 * @see https://discord.com/developers/docs/resources/channel#message-object-message-sticker-item-structure
 */
export interface MessageStickerItem {
    /**
     * @property { Snowflake } id - id of the sticker
     */
    id: Snowflake;

    /**
     * @property { string } name - name of the sticker
     */
    name: string;

    /**
     * @property { number } format_type - type of sticker format
     * @see https://discord.com/developers/docs/resources/channel#message-object-message-sticker-format-types
     */
}
