import { Overwrite } from "./overwrite";
import { Snowflake } from "./snowflake";
import { ThreadMember } from "./threadMember";
import { ThreadMetadata } from "./threadMetadata";
import { User } from "./user";

/**
 * @interface Channel
 * <https://discord.com/developers/docs/resources/channel#channel-object>
 */
export interface Channel {
    /**
     * @param { Snowflake } id - the id of this channel
     */
    id: Snowflake;

    /**
     * @param { number } type - the type of channel
     * <https://discord.com/developers/docs/resources/channel#channel-object-channel-types>
     */
    type: number;

    /**
     * @param { Snowflake } guild_id - the id of the guild (may be missing for some channel objects received over gateway guild dispatches)
     */
    guild_id: Snowflake;

    /**
     * @param { number } position - sorting position of the channel
     */
    position: number;

    /**
     * @param { Array<Overwrite> } permission_overwrites - explicit permission overwrites for members and roles
     * <https://discord.com/developers/docs/resources/channel#overwrite-object>
     */
    permission_overwrites: Array<Overwrite>

    /**
     * @param { string } name - the name of the channel (1-100 characters)
     */
    name: string;

    /**
     * @param { string | undefined } topic - the channel topic (0-1024 characters)
     */
    topic?: string;

    /**
     * @param { boolean } nsfw - whether the channel is nsfw
     */
    nsfw: boolean;

    /**
     * @param { Snowflake | undefined } last_message_id - the id of the last message sent in this channel (may not point to an existing or valid message)
     */
    last_message_id?: Snowflake;

    /**
     * @param { number } bitrate - the bitrate (in bits) of the voice channel
     */
    bitrate: number;

    /**
     * @param { number } user_limit - the user limit of the voice channel
     */
    user_limit: number;

    /**
     * @param { number } rate_limit_per_user - amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manage_messages or manage_channel, are unaffected
     */
    rate_limit_per_user: number;

    /**
     * @param { Array<User> } recipients - the recipients of the DM
     * <https://discord.com/developers/docs/resources/user#user-object>
     */
    recipients: Array<User>;

    /**
     * @param { string | undefined } icon - icon hash
     */
    icon?: string;

    /**
     * @param { Snowflake } owner_id - id of the creator of the group DM or thread
     */
    owner_id: Snowflake;

    /**
     * @param { Snowflake } application_id - application id of the group DM creator if it is bot-created
     */
    application_id: Snowflake;

    /**
     * @param { Snowflake | undefined } parent_id - for guild channels: id of the parent category for a channel (each parent category can contain up to 50 channels), for threads: id of the text channel this thread was created
     */
    parent_id?: Snowflake;

    /**
     * @param { string | undefined } last_pin_timestamp - when the last pinned message was pinned. This may be null in events such as GUILD_CREATE when a message is not pinned.
     * ISO8601 formatted timestamp
     */
    last_pin_timestamp?: string;

    /**
     * @param { string | undefined } rtc_region - voice region id for the voice channel, automatic when set to null
     * <https://discord.com/developers/docs/resources/voice#voice-region-object>
     */
    rtc_region?: string;

    /**
     * @param { number } video_quality_mode - the camera video quality mode of the voice channel, 1 when not present
     * <https://discord.com/developers/docs/resources/channel#channel-object-video-quality-modes>
     */
    video_quality_mode: number;

    /**
     * @param { number } message_count - an approximate count of messages in a thread, stops counting at 50
     */
    message_count: number;

    /**
     * @param { number } member_count - an approximate count of users in a thread, stops counting at 50
     */
    member_count: number;

    /**
     * @param { ThreadMetadata } thread_metadata - thread-specific fields not needed by other channels
     * <https://discord.com/developers/docs/resources/channel#thread-metadata-object>
     */
    thread_metadata: ThreadMetadata;

    /**
     * @param { ThreadMember } member - thread member object for the current user, if they have joined the thread, only included on certain API endpoints
     * <https://discord.com/developers/docs/resources/channel#thread-member-object>
     */
    member: ThreadMember;

    /**
     * @param { number } default_auto_archive_duration - default duration for newly created threads, in minutes, to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080
     */
    default_auto_archive_duration: number;
}