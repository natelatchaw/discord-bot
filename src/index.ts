import dotenv from 'dotenv';
import { URL } from 'url';
import { Console } from './console';
import { Core } from './core';
import { File } from './models/file';

/**
 * Open the connection to Discord
 */
async function start() {
  try {
    const file: File = new File('./.env');
    await file.open();
    await file.close();
  }
  catch (error: any) {
    if (error.code === 'EEXIST') { } else throw error;
  }

  dotenv.config();
  const endpoint: URL = new URL('wss://gateway.discord.gg/?v=9&encoding=json');
  const token: string = process.env.TOKEN ?? '';
  Console.log(`Token: ${token}`);
  const core: Core = new Core(endpoint, token);
  console.log(core);
}

start()
    .then(() => console.log('Complete.'))
    .catch((error: Error) => console.error(error));
