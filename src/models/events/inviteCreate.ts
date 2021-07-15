import { Application } from '../objects/application';
import { Snowflake } from '../objects/snowflake';
import { User } from '../objects/user';

/**
 * @interface InviteCreate
 * @see https://discord.com/developers/docs/topics/gateway#invite-create
 */
export interface InviteCreate extends Event {
    /**
     * @property { Snowflake } channel_id - the channel the invite is for
     */
    channel_id: Snowflake;

    /**
     * @property { string } code - the unique invite code
     * @see https://discord.com/developers/docs/resources/invite#invite-object
     */
    code: string;

    /**
     * @property { string } created_at - the time at which the invite was created
     * ISO8601 formatted timestamp
     */
    created_at: string;

    /**
     * @property { Snowflake | undefined } guild_id - the guild of the invite
     */
    guild_id?: Snowflake;

    /**
     * @property { User | undefined } inviter - the user that created the invite
     * @see https://discord.com/developers/docs/resources/user#user-object
     */
    inviter?: User;

    /**
     * @property { number } max_age - how long the invite is valid for (in seconds)
     */
    max_age: number;

    /**
     * @property { number } max_uses - the maximum number of times the invite can be used
     */
    max_uses: number;

    /**
     * @property { number | undefined } target_type - the type of target for this voice channel invite
     * @see https://discord.com/developers/docs/resources/invite#invite-object-invite-target-types
     */
    target_type?: number;

    /**
     * @property { User | undefined } target_user - the user whose stream to display for this voice channel stream invite
     * @see https://discord.com/developers/docs/resources/user#user-object
     */
    target_user?: User;

    /**
     * @property { Application | undefined } target_application - the embedded application to open for this voice channel embedded application invite
     * @see https://discord.com/developers/docs/resources/application#application-object
     */
    target_application?: Application;

    /**
     * @property { boolean } temporary - whether or not the invite is temporary (invited users will be kicked on disconnect unless they're assigned a role)
     */
    temporary: boolean;

    /**
     * @property { number } uses - how many times the invite has been used (always will be 0)
     */
    uses: number;
}
