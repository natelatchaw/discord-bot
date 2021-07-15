/**
 * @interface EmbedVideo
 * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure
 */
export interface EmbedVideo {
    /**
     * @property { string | undefined } url - source url of video
     */
    url?: string;

    /**
     * @property { string | undefined } proxy_url - a proxied url of the video
     */
    proxy_url?: string;

    /**
     * @property { number | undefined } height - height of video
     */
    height?: number;

    /**
     * @property { number | undefined } width - width of video
     */
    width?: number;
}
