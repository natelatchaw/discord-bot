/**
 * @interface MessageActivity
 * @see https://discord.com/developers/docs/resources/channel#message-object-message-activity-structure
 */
export interface MessageActivity {
    /**
     * @property { number } type - type of message activity
     * @see https://discord.com/developers/docs/resources/channel#message-object-message-activity-types
     */
    type: number;

    /**
     * @property { string | undefined } party_id - party_id from a Rich Presence event
     * @see https://discord.com/developers/docs/rich-presence/how-to#updating-presence-update-presence-payload-fields
     */
    party_id?: string;
}
