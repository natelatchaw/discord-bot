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
     * @property { string | null } avatar - the user's avatar hash
     * @see https://discord.com/developers/docs/reference#image-formatting
     */
    avatar: string | null;

    /**
     * @property { boolean | undefined } bot - whether the user belongs to an OAuth2 application
     */
    bot?: boolean;

    /**
     * @property { boolean | undefined } system - whether the user is an Official Discord System user (part of the urgent message system)
     */
    system?: boolean;

    /**
     * @property { boolean | undefined } mfa_enabled - whether the user has two factor enabled on their account
     */
    mfa_enabled?: boolean;

    /**
     * @property { string | undefined } locale - the user's chosen language option
     */
    locale?: string;

    /**
     * @property { boolean | undefined } verified - whether the email on this account has been verified
     */
    verified?: boolean;

    /**
     * @property { string | undefined | null } email - the user's email
     */
    email?: string | null;

    /**
     * @property { number | undefined } flags - the flags on a user's account
     * @see https://discord.com/developers/docs/resources/user#user-object-user-flags
     */
    flags?: number;

    /**
     * @property { number | undefined } premium_type - the type of Nitro subscription on a user's account
     * @see https://discord.com/developers/docs/resources/user#user-object-premium-types
     */
    premium_type?: number;

    /**
     * @property { number | undefined } public_flags - the public flags on a user's account
     * @see https://discord.com/developers/docs/resources/user#user-object-user-flags
     */
    public_flags?: number;
}
