import { Member } from "./member";
import { Snowflake } from "./snowflake";

/**
 * @interface VoiceState
 * <https://discord.com/developers/docs/resources/voice#voice-state-object>
 */
export interface VoiceState {
    /**
     * @param { Snowflake } guild_id - the guild id this voice state is for
     */
    guild_id: Snowflake;

    /**
     * @param { Snowflake | undefined } channel_id - the channel id this user is connected to
     */
    channel_id?: Snowflake;

    /**
     * @param { Snowflake } user_id - the user id this voice state is for
     */
    user_id: Snowflake;

    /**
     * @param { Member } member - the guild member this voice state is for
     * <https://discord.com/developers/docs/resources/guild#guild-member-object>
     */
    member: Member;

    /**
     * @param { string } session_id - the session id for this voice state
     */
    session_id: string;

    /**
     * @param { boolean } deaf - whether this user is deafened by the server
     */
    deaf: boolean;

    /**
     * @param { boolean } mute - whether this user is muted by the server
     */
    mute: boolean;

    /**
     * @param { boolean } self_deaf - whether this user is locally deafened
     */
    self_deaf: boolean;

    /**
     * @param { boolean } self_mute - whether this user is locally muted
     */
    self_mute: boolean;

    /**
     * @param { boolean } self_stream - whether this user is streaming using "Go Live"
     */
    self_stream: boolean;

    /**
     * @param { boolean } self_video - whether this user's camera is enabled
     */
    self_video: boolean;

    /**
     * @param { boolean } suppress - whether this user is muted by the current user
     */
    suppress: boolean;

    /**
     * @param { string | undefined } request_to_speak_timestamp - the time at which the user requested to speak
     * ISO8601 formatted timestamp
     */
    request_to_speak_timestamp?: string;
}