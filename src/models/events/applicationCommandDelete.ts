import { Event } from '../event';
import { ApplicationCommand } from '../resources/applicationCommand';
import { Snowflake } from '../resources/snowflake';

/**
 * @interface ApplicationCommandDelete
 * @see https://discord.com/developers/docs/topics/gateway#application-command-delete
 */
export interface ApplicationCommandDelete extends Event, ApplicationCommand {
    /**
     * @property { Snowflake | undefined } guild_id - id of the guild the command is in
     */
    guild_id?: Snowflake;
}
