import { ActivityAssets } from "./activityAssets";
import { ActivityEmoji } from "./activityEmoji";
import { ActivityParty } from "./activityParty";
import { ActivitySecrets } from "./activitySecrets";
import { Snowflake } from "./snowflake";
import { Timestamps } from "./timestamps";
import { ActivityButton } from "./activityButtons";

/**
 * @interface Activity
 * <https://discord.com/developers/docs/topics/gateway#activity-object>
 */
export interface Activity {
    /**
     * @param { string } name - the activity's name
     */
    name: string;

    /**
     * @param { number } type - activity type
     * <https://discord.com/developers/docs/topics/gateway#activity-object-activity-types>
     */
    type: number; // TODO - replace with ActivityType extends Number

    /**
     * @param { string | undefined } url - stream url, is validated when type is 1
     */
    url?: string;

    /**
     * @param { number } created_at - unix timestamp (in milliseconds) of when the activity was added to the user's session
     */
    created_at: number;

    /**
     * @param { Timestamps } timestamps - unix timestamps for start and/or end of the game
     * <https://discord.com/developers/docs/topics/gateway#activity-object-activity-timestamps>
     */
    timestamps: Timestamps;

    /**
     * @param { Snowflake } application_id - application id for the game
     */
    application_id: Snowflake;

    /**
     * @param { string | undefined } details - what the player is currently doing
     */
    details?: string;

    /**
     * @param { string | undefined } state - the user's current party status
     */
    state?: string;

    /**
     * @param { Emoji | undefined } emoji - the emoji used for a custom status
     * <https://discord.com/developers/docs/topics/gateway#activity-object-activity-emoji>
     */
    emoji?: ActivityEmoji;

    /**
     * @param { Party } party - information for the current party of the player
     * <https://discord.com/developers/docs/topics/gateway#activity-object-activity-party>
     */
    party: ActivityParty;

    /**
     * @param { Assets } assets - images for the presence and their hover texts
     * <https://discord.com/developers/docs/topics/gateway#activity-object-activity-assets>
     */
    assets: ActivityAssets;

    /**
     * @param { Secrets } secrets - secrets for Rich Presence joining and spectating
     * <https://discord.com/developers/docs/topics/gateway#activity-object-activity-secrets>
     */
    secrets: ActivitySecrets;

    /**
     * @param { boolean } instance - whether or not the activity is an instanced game session
     */
    instance: boolean;

    /**
     * @param { number } flags - activity flags OR d together, describes what the payload includes
     * <https://discord.com/developers/docs/topics/gateway#activity-object-activity-flags>
     */
    flags: number;

    /**
     * @param { Array<Button> } buttons - the custom buttons shown in the Rich Presence (max 2)
     * <https://discord.com/developers/docs/topics/gateway#activity-object-activity-buttons>
     */
    buttons: Array<ActivityButton>;
}