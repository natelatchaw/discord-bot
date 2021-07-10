/**
 * @interface ActivityButton
 * <https://discord.com/developers/docs/topics/gateway#activity-object-activity-buttons>
 */
export interface ActivityButton {
    /**
     * @param { string } label - the text shown on the button (1-32 characters)
     */
    label: string;

    /**
     * @param { string } url - the url opened when clicking the button (1-512 characters)
     */
    url: string;
}