import { Snowflake } from './snowflake';
import { User } from './user';

/**
 * @interface TeamMembers
 * @see https://discord.com/developers/docs/topics/teams#data-models-team-members-object
 */
export interface TeamMembers {
    /**
     * @property { number } membership_state - the user's membership state on the team
     * @see https://discord.com/developers/docs/topics/teams#data-models-membership-state-enum
     * @todo create MembershipState extends Number as enum
     */
    membership_state: number;

    /**
     * @property { Array<string> } permissions - will always be ["*"]
     */
    permissions: Array<string>;

    /**
     * @property { Snowflake } team_id - the id of the parent team of which they are a member
     */
    team_id: Snowflake;

    /**
     * @property { User } user - the avatar, discriminator, id, and username of the user
     */
    user: User;
}
