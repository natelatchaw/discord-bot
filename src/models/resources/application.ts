import { Snowflake } from './snowflake';
import { Team } from './team';
import { User } from './user';

/**
 * @interface Application
 * @see https://discord.com/developers/docs/resources/application#application-object
 */
export interface Application {
    /**
     * @property { Snowflake } id - the id of the app
     */
    id: Snowflake;

    /**
     * @property { string } name - the name of the app
     */
    name: string;

    /**
     * @property { string | undefined } icon - the icon hash of the app
     * @see https://discord.com/developers/docs/reference#image-formatting
     */
    icon?: string;

    /**
     * @property { string } description - the description of the app
     */
    description: string;

    /**
     * @property { Array<string> } rpc_origins - an array of rpc origin urls, if rpc is enabled
     */
    rpc_origins: Array<string>;

    /**
     * @property { boolean } bot_public - when false only app owner can join the app's bot to guilds
     */
    bot_public: boolean;

    /**
     * @property { boolean } bot_require_code_grant - when true the app's bot will only join upon completion of the full oauth2 code grant flow
     */
    bot_require_code_grant: boolean;

    /**
     * @property { string } terms_of_service_url - the url of the app's terms of service
     */
    terms_of_service_url: string;

    /**
     * @property { string } privacy_policy_url - the url of the app's privacy policy
     */
    privacy_policy_url: string;

    /**
     * @property { User } owner - partial user object containing info on the owner of the application
     * @see https://discord.com/developers/docs/resources/user#user-object
     */
    owner: User;

    /**
     * @property { string } summary - if this application is a game sold on Discord, this field will be the summary field for the store page of its primary sku
     */
    summary: string;

    /**
     * @property { string } verify_key - the hex encoded key for verification in interactions and the GameSDK's GetTicket
     * @see https://discord.com/developers/docs/game-sdk/applications#getticket
     */
    verify_key: string;

    /**
     * @property { Team | undefined } team - if the application belongs to a team, this will be a list of the members of that team
     * @see https://discord.com/developers/docs/topics/teams#data-models-team-object
     */
    team?: Team;

    /**
     * @property { Snowflake } guild_id - if this application is a game sold on Discord, this field will be the guild to which it has been linked
     */
    guild_id: Snowflake;

    /**
     * @property { Snowflake } primary_sku_id - if this application is a game sold on Discord, this field will be the id of the "Game SKU" that is created, if exists
     */
    primary_sku_id: Snowflake;

    /**
     * @property { string } slug - if this application is a game sold on Discord, this field will be the URL slug that links to the store page
     */
    slug: string;

    /**
     * @property { string } cover_image - the application's default rich presence invite cover image hash
     * @see https://discord.com/developers/docs/reference#image-formatting
     */
    cover_image: string;

    /**
     * @property { number } flags - the application's public flags
     * @see https://discord.com/developers/docs/resources/application#application-application-flags
     */
    flags: number;
}
