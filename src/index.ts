import dotenv from 'dotenv';
import { URL } from 'url';
import { Console } from './console';
import { Core } from './core';

dotenv.config();
const endpoint: URL = new URL('wss://gateway.discord.gg/?v=9&encoding=json');
const token: string = process.env.TOKEN ?? '';
Console.log(`Token: ${token}`);
const core: Core = new Core(endpoint, token);