import 'colors';

export class Console {
    static warn = (message: string) => console.log(message.yellow);
    static error = (message: string) => console.log(message.red);
    static log = (message: string) => console.log(message.white);
    static highlight = (message: string) => console.log(message.green);
}