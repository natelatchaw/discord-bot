/**
 * @interface ApplicationCommandOptionChoice
 * @see https://discord.com/developers/docs/interactions/slash-commands#application-command-object-application-command-option-choice-structure
 */
export interface ApplicationCommandOptionChoice {
    /**
     * @property { string } name - 1-100 character choice name
     */
    name: string;

    /**
     * @property { string | number } value - value of the choice, up to 100 characters if string
     */
    value: string | number;
}
