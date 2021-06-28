export interface User {
    verified: boolean;
    username: string;
    mfa_enabled: boolean;
    id: string;
    flags: number;
    email: string;
    discriminator: string;
    bot: boolean;
    avatar: string;
}