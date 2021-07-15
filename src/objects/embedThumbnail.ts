/**
 * @interface EmbedThumbnail
 * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure
 */
export interface EmbedThumbnail {
    /**
     * @property { string | undefined } url - source url of thumbnail (only supports http(s) and attachments)
     */
    url?: string;

    /**
     * @property { string | undefined } proxy_url - a proxied url of the thumbnail
     */
    proxy_url?: string;

    /**
     * @property { number | undefined } height - height of thumbnail
     */
    height?: number;

    /**
     * @property { number | undefined } width - width of thumbnail
     */
    width?: number;
}
