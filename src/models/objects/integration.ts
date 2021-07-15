import { Application } from './application';
import { IntegrationAccount } from './integrationAccount';
import { IntegrationExpireBehavior } from './integrationExpireBehavior';
import { Snowflake } from './snowflake';
import { User } from './user';

/**
 * @interface Integration
 * @see https://discord.com/developers/docs/resources/guild#integration-object
 */
export interface Integration {
    /**
     * @property { Snowflake } id - integration id
     */
    id: Snowflake;

    /**
     * @property { string } name - integration name
     */
    name: string;

    /**
     * @property { string } type - integration type (twitch, youtube, or discord)
     */
    type: string;

    /**
     * @property { boolean } enabled - is this integration enabled
     */
    enabled: boolean;

    /**
     * @property { boolean | undefined } syncing - is this integration syncing
     */
    syncing?: boolean;

    /**
     * @property { Snowflake | undefined } role_id - id that this integration uses for "subscribers"
     */
    role_id?: Snowflake;

    /**
     * @property { boolean | undefined } enable_emoticons - whether emoticons should be synced for this integration (twitch only currently)
     */
    enable_emoticons?: boolean;

    /**
     * @property { IntegrationExpireBehavior | undefined } expire_behavior - the behavior of expiring subscribers
     * @see https://discord.com/developers/docs/resources/guild#integration-object-integration-expire-behaviors
     */
    expire_behavior?: IntegrationExpireBehavior;

    /**
     * @property { number | undefined } expire_grace_period - the grace period (in days) before expiring subscribers
     */
    expire_grace_period?: number;

    /**
     * @property { User | undefined } user - user for this integration
     * @see https://discord.com/developers/docs/resources/user#user-object
     */
    user?: User;

    /**
     * @property { Account } account - integration account information
     * @see https://discord.com/developers/docs/resources/guild#integration-account-object
     */
    account: IntegrationAccount;

    /**
     * @property { string | undefined } synced_at - when this integration was last synced
     * ISO8601 formatted timestamp
     */
    synced_at?: string;

    /**
     * @property { number | undefined } subscriber_count - how many subscribers this integration has
     */
    subscriber_count?: number;

    /**
     * @property { boolean | undefined } revoked - has this integration been revoked
     */
    revoked?: boolean;

    /**
     * @property { Application | undefined } application - The bot/OAuth2 application for discord integrations
     * @see https://discord.com/developers/docs/resources/guild#integration-application-object
     */
    application?: Application;
}
