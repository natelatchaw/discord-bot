import 'colors';

/**
 * @callback consoleCallback
 * @param { string } message
 */
/**
 * console utility for displaying color text
 */
export class Console {
    /**
     * @param { consoleCallback } message
     * @return { void }
     */
    static warn = (message: string): void => console.log(message.yellow);

    /**
     * @param { consoleCallback } message
     * @return { void }
     */
    static error = (message: string): void => console.log(message.red);

    /**
     * @param { consoleCallback } message
     * @return { void }
     */
    static log = (message: string): void => console.log(message.white);

    /**
     * @param { consoleCallback } message
     * @return { void }
     */
    static highlight = (message: string): void => console.log(message.green);
}
