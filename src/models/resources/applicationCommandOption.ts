import { ApplicationCommandOptionChoice } from './applicationCommandOptionChoice';

/**
 * @interface ApplicationCommandOption
 * @see https://discord.com/developers/docs/interactions/slash-commands#application-command-object-application-command-option-structure
 */
export interface ApplicationCommandOption {
    /**
     * @property { number } type - value of application command option type
     * @see https://discord.com/developers/docs/interactions/slash-commands#application-command-object-application-command-option-type
     * @todo create ApplicationCommandOptionType extends Number as enum
     */
    type: number;

    /**
     * @property { string } name - 1-32 lowercase character name matching ^[\w-]{1,32}$
     */
    name: string;

    /**
     * @property { string } description - 1-100 character description
     */
    description: string;

    /**
     * @property { boolean | undefined } required - if the parameter is required or optional
     * default false
     */
    required?: boolean;

    /**
     * @property { Array<ApplicationCommandOptionChoice> | undefined } choices - choices for string and int types for the user to pick from
     * @see https://discord.com/developers/docs/interactions/slash-commands#application-command-object-application-command-option-choice-structure
     */
    choices?: Array<ApplicationCommandOptionChoice>;

    /**
     * @property { Array<ApplicationCommandOption> | undefined } options - if the option is a subcommand or subcommand group type, this nested options will be the parameters
     * @see https://discord.com/developers/docs/interactions/slash-commands#application-command-object-application-command-option-structure
     */
    options?: Array<ApplicationCommandOption>;
}
