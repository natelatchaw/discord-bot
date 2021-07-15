import { Snowflake } from './snowflake';

/**
 * @interface WelcomeScreenChannel
 * @see https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-channel-structure
 */
export interface WelcomeScreenChannel {
    /**
     * @property { Snowflake } channel_id - the channel's id
     */
    channel_id: Snowflake;

    /**
     * @property { string } description - the description shown for the channel
     */
    description: string;

    /**
     * @property { Snowflake | null } emoji_id - the emoji id, if the emoji is custom
     * @see https://discord.com/developers/docs/reference#image-formatting
     */
    emoji_id: Snowflake | null;

    /**
     * @property { string | null } emoji_name - the emoji name if custom, the unicode character if standard, or null if no emoji is set
     */
    emoji_name: string | null;
}
