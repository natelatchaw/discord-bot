import { Snowflake } from '../objects/snowflake';

/**
 * @interface InviteDelete
 * @see https://discord.com/developers/docs/topics/gateway#invite-delete
 */
export interface InviteDelete extends Event {
    /**
     * @property { Snowflake } channel_id - the channel of the invite
     */
    channel_id: Snowflake;

    /**
     * @property { Snowflake | undefined } guild_id - the guild of the invite
     */
    guild_id?: Snowflake;

    /**
     * @property { string } code - the unique invite code
     * @see https://discord.com/developers/docs/resources/invite#invite-object
     */
    code: string;
}
