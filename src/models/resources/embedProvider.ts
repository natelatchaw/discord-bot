/**
 * @interface EmbedProvider
 * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-provider-structure
 */
export interface EmbedProvider {
    /**
     * @property { string | undefined } name - name of provider
     */
    name?: string;

    /**
     * @property { string | undefined } url - url of provider
     */
    url?: string;
}
