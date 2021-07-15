import { EmbedAuthor } from './embedAuthor';
import { EmbedField } from './embedField';
import { EmbedFooter } from './embedFooter';
import { EmbedImage } from './embedImage';
import { EmbedProvider } from './embedProvider';
import { EmbedThumbnail } from './embedThumbnail';
import { EmbedVideo } from './embedVideo';

/**
 * @interface Embed
 * @see https://discord.com/developers/docs/resources/channel#embed-object
 */
export interface Embed {
    /**
     * @property { string | undefined } title - title of embed
     */
    title?: string;

    /**
     * @property { string | undefined } type - type of embed (always "rich" for webhook embeds)
     * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-types
     */
    type?: string;

    /**
     * @property { string | undefined } description - description of embed
     */
    description?: string;

    /**
     * @property { string | undefined } url - url of embed
     */
    url?: string;

    /**
     * @property { string | undefined } timestamp - timestamp of embed content
     * ISO8601 formatted timestamp
     */
    timestamp?: string;

    /**
     * @property { number | undefined } color - color code of the embed
     */
    color?: number;

    /**
     * @property { EmbedFooter | undefined } footer - footer information
     * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure
     */
    footer?: EmbedFooter;

    /**
     * @property { EmbedImage | undefined } image - image information
     * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure
     */
    image?: EmbedImage;

    /**
     * @property { EmbedThumbnail | undefined } thumbnail - thumbnail information
     * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure
     */
    thumbnail?: EmbedThumbnail;

    /**
     * @property { EmbedVideo | undefined } video - video information
     * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure
     */
    video?: EmbedVideo;

    /**
     * @property { EmbedProvider | undefined } provider - provider information
     * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-provider-structure
     */
    provider?: EmbedProvider;

    /**
     * @property { EmbedAuthor | undefined } author - author information
     * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure
     */
    author?: EmbedAuthor;

    /**
     * @property { Array<EmbedField> | undefined } fields - fields information
     * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure
     */
    fields?: Array<EmbedField>;
}
