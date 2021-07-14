import { Overwrite } from './overwrite';
import { Snowflake } from './snowflake';
import { ThreadMember } from './threadMember';
import { ThreadMetadata } from './threadMetadata';
import { User } from './user';

/**
 * @interface Channel
 * @see https://discord.com/developers/docs/resources/channel#channel-object
 */
export interface Channel {
    /**
     * @property { Snowflake } id - the id of this channel
     */
    id: Snowflake;

    /**
     * @property { number } type - the type of channel
     * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-types
     */
    type: number;

    /**
     * @property { Snowflake } guild_id - the id of the guild (may be missing for some channel objects received over gateway guild dispatches)
     */
    guild_id: Snowflake;

    /**
     * @property { number } position - sorting position of the channel
     */
    position: number;

    /**
     * @property { Array<Overwrite> } permission_overwrites - explicit permission overwrites for members and roles
     * @see https://discord.com/developers/docs/resources/channel#overwrite-object
     */
    permission_overwrites: Array<Overwrite>

    /**
     * @property { string } name - the name of the channel (1-100 characters)
     */
    name: string;

    /**
     * @property { string | undefined } topic - the channel topic (0-1024 characters)
     */
    topic?: string;

    /**
     * @property { boolean } nsfw - whether the channel is nsfw
     */
    nsfw: boolean;

    /**
     * @property { Snowflake | undefined } last_message_id - the id of the last message sent in this channel (may not point to an existing or valid message)
     */
    last_message_id?: Snowflake;

    /**
     * @property { number } bitrate - the bitrate (in bits) of the voice channel
     */
    bitrate: number;

    /**
     * @property { number } user_limit - the user limit of the voice channel
     */
    user_limit: number;

    /**
     * @property { number } rate_limit_per_user - amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manage_messages or manage_channel, are unaffected
     */
    rate_limit_per_user: number;

    /**
     * @property { Array<User> } recipients - the recipients of the DM
     * @see https://discord.com/developers/docs/resources/user#user-object
     */
    recipients: Array<User>;

    /**
     * @property { string | undefined } icon - icon hash
     */
    icon?: string;

    /**
     * @property { Snowflake } owner_id - id of the creator of the group DM or thread
     */
    owner_id: Snowflake;

    /**
     * @property { Snowflake } application_id - application id of the group DM creator if it is bot-created
     */
    application_id: Snowflake;

    /**
     * @property { Snowflake | undefined } parent_id - for guild channels: id of the parent category for a channel (each parent category can contain up to 50 channels), for threads: id of the text channel this thread was created
     */
    parent_id?: Snowflake;

    /**
     * @property { string | undefined } last_pin_timestamp - when the last pinned message was pinned. This may be null in events such as GUILD_CREATE when a message is not pinned.
     * ISO8601 formatted timestamp
     */
    last_pin_timestamp?: string;

    /**
     * @property { string | undefined } rtc_region - voice region id for the voice channel, automatic when set to null
     * @see https://discord.com/developers/docs/resources/voice#voice-region-object
     */
    rtc_region?: string;

    /**
     * @property { number } video_quality_mode - the camera video quality mode of the voice channel, 1 when not present
     * @see https://discord.com/developers/docs/resources/channel#channel-object-video-quality-modes>
     */
    video_quality_mode: number;

    /**
     * @property { number } message_count - an approximate count of messages in a thread, stops counting at 50
     */
    message_count: number;

    /**
     * @property { number } member_count - an approximate count of users in a thread, stops counting at 50
     */
    member_count: number;

    /**
     * @property { ThreadMetadata } thread_metadata - thread-specific fields not needed by other channels
     * @see https://discord.com/developers/docs/resources/channel#thread-metadata-object
     */
    thread_metadata: ThreadMetadata;

    /**
     * @property { ThreadMember } member - thread member object for the current user, if they have joined the thread, only included on certain API endpoints
     * @see https://discord.com/developers/docs/resources/channel#thread-member-object
     */
    member: ThreadMember;

    /**
     * @property { number } default_auto_archive_duration - default duration for newly created threads, in minutes, to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080
     */
    default_auto_archive_duration: number;
}
