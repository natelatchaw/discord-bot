/**
 * @interface EmbedField
 * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure
 */
export interface EmbedField {
    /**
     * @property { string } name - name of the field
     */
    name: string;

    /**
     * @property { string } value - value of the field
     */
    value: string;

    /**
     * @property { boolean | undefined } inline - whether or not this field should display inline
     */
    inline?: boolean;
}
