import { Message } from './message';
import { Snowflake } from './snowflake';
import { User } from './user';

/**
 * @interface MessageInteraction
 * @see https://discord.com/developers/docs/interactions/slash-commands#message-interaction-object
 */
export interface MessageInteraction extends Message {
    /**
     * @property { Snowflake } id - id of the interaction
     */
    id: Snowflake;

    /**
     * @property { any } type - the type of interaction
     * @see https://discord.com/developers/docs/interactions/slash-commands#interaction-object-interaction-type
     * @todo determine object stucture
     */
    type: any;

    /**
     * @property { string } name - the name of the application command
     * @see https://discord.com/developers/docs/interactions/slash-commands#application-command-object-application-command-structure
     */
    name: string;

    /**
     * @property { User } user - the user who invoked the interaction
     * @see https://discord.com/developers/docs/resources/user#user-object
     */
    user: User;
}
