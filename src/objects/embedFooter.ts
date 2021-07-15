/**
 * @interface EmbedFooter
 * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure
 */
export interface EmbedFooter {
    /**
     * @property { string } text - footer text
     */
    text: string;

    /**
     * @property { string | undefined } icon_url - url of footer icon (only supports http(s) and attachments)
     */
    icon_url?: string;

    /**
     * @property { string | undefined } proxy_icon_url - a proxied url of footer icon
     */
    proxy_icon_url?: string;
}
