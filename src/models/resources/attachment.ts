import { Snowflake } from './snowflake';

/**
 * @interface Attachment
 * @see https://discord.com/developers/docs/resources/channel#attachment-object
 */
export interface Attachment {
    /**
     * @property { Snowflake } id - attachment id
     */
    id: Snowflake;

    /**
     * @property { string } filename - name of file attached
     */
    filename: string;

    /**
     * @property { string | undefined } content_type - the attachment's media type
     * @see https://en.wikipedia.org/wiki/Media_type
     */
    content_type?: string;

    /**
     * @property { number } size - size of file in bytes
     */
    size: number;

    /**
     * @property { string } url - source url of file
     */
    url: string;

    /**
     * @property { string } proxy_url - a proxied url of file
     */
    proxy_url: string;

    /**
     * @property { number | undefined | null } height - height of file (if image)
     */
    height?: number | null;

    /**
     * @property { number | undefined | null } width - width of file (if image)
     */
    width?: number | null;
}
