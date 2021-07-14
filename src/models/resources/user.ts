import { Snowflake } from './snowflake';

/**
 * @interface User
 * @see https://discord.com/developers/docs/resources/user#user-object
 */
export interface User {
    /**
     * @property { Snowflake } id - the user's id
     */
    id: Snowflake;

    /**
     * @property { string } username - the user's username, not unique across the platform
     */
    username: string;

    /**
     * @property { string } discriminator - the user's 4-digit discord-tag
     */
    discriminator: string;

    /**
     * @property { string | undefined } avatar - the user's avatar hash
     * @see https://discord.com/developers/docs/reference#image-formatting
     */
    avatar?: string;

    /**
     * @property { boolean } bot - whether the user belongs to an OAuth2 application
     */
    bot: boolean;

    /**
     * @property { boolean } system - whether the user is an Official Discord System user (part of the urgent message system)
     */
    system: boolean;

    /**
     * @property { boolean } mfa_enabled - whether the user has two factor enabled on their account
     */
    mfa_enabled: boolean;

    /**
     * @property { string } locale - the user's chosen language option
     */
    locale: string;

    /**
     * @property { boolean } verified - whether the email on this account has been verified
     */
    verified: boolean;

    /**
     * @property { string | undefined } email - the user's email
     */
    email?: string;

    /**
     * @property { number } flags - the flags on a user's account
     * @see https://discord.com/developers/docs/resources/user#user-object-user-flags
     */
    flags: number;

    /**
     * @property { number } premium_type - the type of Nitro subscription on a user's account
     * @see https://discord.com/developers/docs/resources/user#user-object-premium-types
     */
    premium_type: number;

    /**
     * @property { number } public_flags - the public flags on a user's account
     * @see https://discord.com/developers/docs/resources/user#user-object-user-flags
     */
    public_flags: number;
}
