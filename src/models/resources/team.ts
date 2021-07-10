import { Snowflake } from './snowflake';
import { TeamMembers } from './teamMembers';

/**
 * @interface Team
 * @see https://discord.com/developers/docs/topics/teams#data-models-team-object
 */
export interface Team {
    /**
     * @param { string | undefined } icon - a hash of the image of the team's icon
     */
    icon?: string;

    /**
     * @param { Snowflake } id - the unique id of the team
     */
    id: Snowflake;

    /**
     * @param { Array<TeamMembers> } members - the members of the team
     * @see https://discord.com/developers/docs/topics/teams#data-models-team-member-object
     */
    members: Array<TeamMembers>;

    /**
     * @param { string } name - the name of the team
     */
    name: string;

    /**
     * @param { Snowflake } owner_user_id - the user id of the current team owner
     */
    owner_user_id: Snowflake;
}
