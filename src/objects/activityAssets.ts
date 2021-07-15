/**
 * @interface ActivityAssets
 * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-assets
 */
export interface ActivityAssets {
    /**
     * @property { string | undefined } large_image - the id for a large asset of the activity, usually a snowflake
     */
    large_image?: string;

    /**
     * @property { string | undefined } large_text - text displayed when hovering over the large image of the activity
     */
    large_text?: string;

    /**
     * @property { string | undefined } small_image - the id for a small asset of the activity, usually a snowflake
     */
    small_image?: string;

    /**
     * @property { string | undefined } small_text - text displayed when hovering over the small image of the activity
     */
    small_text?: string;
}
