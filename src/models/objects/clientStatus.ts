/**
 * @interface ClientStatus
 * @see https://discord.com/developers/docs/topics/gateway#client-status-object
 */
export interface ClientStatus {
    /**
     * @property { string | undefined } desktop - the user's status set for an active desktop (Windows, Linux, Mac) application session
     */
    desktop?: string;

    /**
     * @property { string | undefined } mobile - the user's status set for an active mobile (iOS, Android) application session
     */
    mobile?: string;

    /**
     * @property { string | undefined } web - the user's status set for an active web (browser, bot account) application session
     */
    web?: string;
}
