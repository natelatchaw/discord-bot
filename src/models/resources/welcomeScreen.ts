import { WelcomeScreenChannel } from './welcomeScreenChannel';

/**
 * @interface WelcomeScreen
 * @see https://discord.com/developers/docs/resources/guild#welcome-screen-object
 */
export interface WelcomeScreen {
    /**
     * @property { string | undefined } description - the server description shown in the welcome screen
     */
    description?: string;

    /**
     * @property { Array<WelcomeScreenChannel> } welcome_channels - the channels shown in the welcome screen, up to 5
     * @see https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-channel-structure
     */
    welcome_channels: Array<WelcomeScreenChannel>;
}
