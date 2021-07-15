/**
 * @interface IntegrationAccount
 * @see https://discord.com/developers/docs/resources/guild#integration-account-object
 */
export interface IntegrationAccount {
    /**
     * @property { string } id - id of the account
     */
    id: string;

    /**
     * @property { string } name - name of the account
     */
    name: string;
}
