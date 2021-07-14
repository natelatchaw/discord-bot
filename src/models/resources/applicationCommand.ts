import { ApplicationCommandOption } from './applicationCommandOption';
import { Snowflake } from './snowflake';

/**
 * @interface ApplicationCommand
 * @see https://discord.com/developers/docs/interactions/slash-commands#application-command-object
 */
export interface ApplicationCommand {
    /**
     * @property { Snowflake } id - unique id of the command
     */
    id: Snowflake;

    /**
     * @property { Snowflake } application_id - unique id of the parent application
     */
    application_id: Snowflake;

    /**
     * @property { Snowflake | undefined } guild_id - guild id of the command, if not global
     */
    guild_id?: Snowflake;

    /**
     * @property { string } name - 1-32 lowercase character name matching ^[\w-]{1,32}$
     */
    name: string;

    /**
     * @property { string } description - 1-100 character description
     */
    description: string;

    /**
     * @property { Array<ApplicationCOmmandOption> | undefined } options - the parameters for the command
     * @see https://discord.com/developers/docs/interactions/slash-commands#application-command-object-application-command-option-structure
     */
    options?: Array<ApplicationCommandOption>;

    /**
     * @property { boolean | undefined } default_permission - whether the command is enabled by default when the app is added to a guild
     * default true
     */
    default_permission?: boolean;
}
