import { Snowflake } from "./snowflake";
import { User } from "./user";

/**
 * @interface TeamMembers
 * <https://discord.com/developers/docs/topics/teams#data-models-team-members-object>
 */
export interface TeamMembers {
    /**
     * @param { number } membership_state - the user's membership state on the team
     * <https://discord.com/developers/docs/topics/teams#data-models-membership-state-enum>
     */
    membership_state: number; // TODO - create MembershipState extends Number

    /**
     * @param { Array<string> } permissions - will always be ["*"]
     */
    permissions: Array<string>;

    /**
     * @param { Snowflake } team_id - the id of the parent team of which they are a member
     */
    team_id: Snowflake;

    /**
     * @param { User } user - the avatar, discriminator, id, and username of the user
     */
    user: User;
}