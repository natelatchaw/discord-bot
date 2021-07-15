import { Event } from '../event';
import { ApplicationCommand } from '../objects/applicationCommand';
import { Snowflake } from '../objects/snowflake';

/**
 * @interface ApplicationCommandCreate
 * @see https://discord.com/developers/docs/topics/gateway#application-command-create
 */
export interface ApplicationCommandCreate extends Event, ApplicationCommand {
    /**
     * @property { Snowflake | undefined } guild_id - id of the guild the command is in
     */
    guild_id?: Snowflake;
}
