import { Member } from './member';
import { Snowflake } from './snowflake';

/**
 * @interface VoiceState
 * @see https://discord.com/developers/docs/resources/voice#voice-state-object
 */
export interface VoiceState {
    /**
     * @property { Snowflake | undefined } guild_id - the guild id this voice state is for
     */
    guild_id?: Snowflake;

    /**
     * @property { Snowflake | null } channel_id - the channel id this user is connected to
     */
    channel_id: Snowflake | null;

    /**
     * @property { Snowflake } user_id - the user id this voice state is for
     */
    user_id: Snowflake;

    /**
     * @property { Member | undefined } member - the guild member this voice state is for
     * @see https://discord.com/developers/docs/resources/guild#guild-member-object
     */
    member?: Member;

    /**
     * @property { string } session_id - the session id for this voice state
     */
    session_id: string;

    /**
     * @property { boolean } deaf - whether this user is deafened by the server
     */
    deaf: boolean;

    /**
     * @property { boolean } mute - whether this user is muted by the server
     */
    mute: boolean;

    /**
     * @property { boolean } self_deaf - whether this user is locally deafened
     */
    self_deaf: boolean;

    /**
     * @property { boolean } self_mute - whether this user is locally muted
     */
    self_mute: boolean;

    /**
     * @property { boolean | undefined } self_stream - whether this user is streaming using "Go Live"
     */
    self_stream?: boolean;

    /**
     * @property { boolean } self_video - whether this user's camera is enabled
     */
    self_video: boolean;

    /**
     * @property { boolean } suppress - whether this user is muted by the current user
     */
    suppress: boolean;

    /**
     * @property { string | null } request_to_speak_timestamp - the time at which the user requested to speak
     * ISO8601 formatted timestamp
     */
    request_to_speak_timestamp: string | null;
}
