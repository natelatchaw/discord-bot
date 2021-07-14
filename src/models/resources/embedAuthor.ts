/**
 * @interface EmbedAuthor
 * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure
 */
export interface EmbedAuthor {
    /**
     * @property { string | undefined } name - name of author
     */
    name?: string;

    /**
     * @property { string | undefined } url - url of author
     */
    url?: string;

    /**
     * @property { string | undefined } icon_url - url of author icon (only supports http(s) and attachments)
     */
    icon_url?: string;

    /**
     * @property { string | undefined } proxy_icon_url - a proxied url of author icon
     */
    proxy_icon_url?: string;
}
