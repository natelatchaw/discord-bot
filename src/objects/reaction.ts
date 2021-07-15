import { Emoji } from './emoji';

/**
 * @interface Reaction
 * @see https://discord.com/developers/docs/resources/channel#reaction-object
 */
export interface Reaction {
    /**
     * @property { number } count - times this emoji has been used to react
     */
    count: number;

    /**
     * @property { boolean } me - whether the current user reacted using this emoji
     */
    me: boolean;

    /**
     * @property { Emoji } emoji - emoji information
     * @see https://discord.com/developers/docs/resources/emoji#emoji-object
     */
    emoji: Emoji;
}
