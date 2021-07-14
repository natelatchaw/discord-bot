/**
 * @interface ClientStatus
 * @see https://discord.com/developers/docs/topics/gateway#client-status-object
 */
export interface ClientStatus {
    /**
     * @property { string } desktop - the user's status set for an active desktop (Windows, Linux, Mac) application session
     */
    desktop: string;

    /**
     * @property { string } mobile - the user's status set for an active mobile (iOS, Android) application session
     */
    mobile: string;

    /**
     * @property { string } web - the user's status set for an active web (browser, bot account) application session
     */
    web: string;
}
