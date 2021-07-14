import { ActivityAssets } from './activityAssets';
import { ActivityEmoji } from './activityEmoji';
import { ActivityParty } from './activityParty';
import { ActivitySecrets } from './activitySecrets';
import { Snowflake } from './snowflake';
import { Timestamps } from './timestamps';
import { ActivityButton } from './activityButton';

/**
 * @interface Activity
 * @see https://discord.com/developers/docs/topics/gateway#activity-object
 */
export interface Activity {
    /**
     * @property { string } name - the activity's name
     */
    name: string;

    /**
     * @property { number } type - activity type
     * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-types
     * @todo create ActivityType extends Number as enum
     */
    type: number;

    /**
     * @property { string | undefined } url - stream url, is validated when type is 1
     */
    url?: string;

    /**
     * @property { number } created_at - unix timestamp (in milliseconds) of when the activity was added to the user's session
     */
    created_at: number;

    /**
     * @property { Timestamps } timestamps - unix timestamps for start and/or end of the game
     * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-timestamps
     */
    timestamps: Timestamps;

    /**
     * @property { Snowflake } application_id - application id for the game
     */
    application_id: Snowflake;

    /**
     * @property { string | undefined } details - what the player is currently doing
     */
    details?: string;

    /**
     * @property { string | undefined } state - the user's current party status
     */
    state?: string;

    /**
     * @property { Emoji | undefined } emoji - the emoji used for a custom status
     * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-emoji
     */
    emoji?: ActivityEmoji;

    /**
     * @property { Party } party - information for the current party of the player
     * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-party
     */
    party: ActivityParty;

    /**
     * @property { Assets } assets - images for the presence and their hover texts
     * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-assets
     */
    assets: ActivityAssets;

    /**
     * @property { Secrets } secrets - secrets for Rich Presence joining and spectating
     * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-secrets>
     */
    secrets: ActivitySecrets;

    /**
     * @property { boolean } instance - whether or not the activity is an instanced game session
     */
    instance: boolean;

    /**
     * @property { number } flags - activity flags OR d together, describes what the payload includes
     * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-flags
     */
    flags: number;

    /**
     * @property { Array<Button> } buttons - the custom buttons shown in the Rich Presence (max 2)
     * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-buttons
     */
    buttons: Array<ActivityButton>;
}
