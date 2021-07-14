/**
 * @interface EmbedImage
 * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure
 */
export interface EmbedImage {
    /**
     * @property { string | undefined } url - source url of image (only supports http(s) and attachments)
     */
    url?: string;

    /**
     * @property { string | undefined } proxy_url - a proxied url of the image
     */
    proxy_url?: string;

    /**
     * @property { number | undefined } height - height of image
     */
    height?: number;

    /**
     * @property { number | undefined } width - width of image
     */
    width?: number;
}
