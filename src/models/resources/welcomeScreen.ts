import { WelcomeScreenChannel } from "./welcomeScreenChannel";

/**
 * @interface WelcomeScreen
 * <https://discord.com/developers/docs/resources/guild#welcome-screen-object>
 */
export interface WelcomeScreen {
    /**
     * @param { string | undefined } description - the server description shown in the welcome screen
     */
    description?: string;

    /**
     * @param { Array<WelcomeScreenChannel> } welcome_channels - the channels shown in the welcome screen, up to 5
     * <https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-channel-structure>
     */
    welcome_channels: Array<WelcomeScreenChannel>;
}