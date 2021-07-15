import { Emoji } from './emoji';

/**
 * @interface Component
 * @see https://discord.com/developers/docs/interactions/message-components#component-object
 */
export interface Component {
    /**
     * @property { number } type - component type
     * @see https://discord.com/developers/docs/interactions/message-components#component-types
     */
    type: number;

    /**
     * @property { number | undefined } style - one of button styles
     * @see https://discord.com/developers/docs/interactions/message-components#buttons-button-styles
     */
    style?: number;

    /**
     * @property { string | undefined } label - text that appears on the button, max 80 characters
     */
    label?: string;

    /**
     * @property { Emoji | undefined } emoji - name, id, and animated
     * @see https://discord.com/developers/docs/resources/emoji#emoji-object
     */
    emoji?: Emoji;

    /**
     * @property { string | undefined } custom_id - a developer-defined identifier for the button, max 100 characters
     */
    custom_id?: string;

    /**
     * @property { string | undefined } url - a url for link-style buttons
     */
    url?: string;

    /**
     * @property { boolean | undefined } disabled - whether the button is disabled
     * default false
     */
    disabled?: boolean;

    /**
     * @property { Array<Component> | undefined } components - a list of child components
     * @see https://discord.com/developers/docs/interactions/message-components#component-object
     */
    components?: Array<Component>
}
