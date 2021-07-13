import { Event } from '../payloads/dispatch';
import { ApplicationCommand } from '../resources/applicationCommand';
import { Snowflake } from '../resources/snowflake';

/**
 * @interface ApplicationCommandUpdate
 * @see https://discord.com/developers/docs/topics/gateway#application-command-update
 */
export interface ApplicationCommandUpdate extends Event, ApplicationCommand {
    /**
     * @param { Snowflake } guild_id - id of the guild the command is in
     */
    guild_id: Snowflake;
}
