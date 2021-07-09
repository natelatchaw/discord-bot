/**
 * @interface ClientStatus
 * <https://discord.com/developers/docs/topics/gateway#client-status-object>
 */
export interface ClientStatus {
    /**
     * @param { string } desktop - the user's status set for an active desktop (Windows, Linux, Mac) application session
     */
    desktop: string;

    /**
     * @param { string } mobile - the user's status set for an active mobile (iOS, Android) application session
     */
    mobile: string;

    /**
     * @param { string } web - the user's status set for an active web (browser, bot account) application session
     */
    web: string;
}