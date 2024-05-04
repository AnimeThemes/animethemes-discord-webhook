import { ExtendClient } from 'discord/ExtendClient';

import trelloServer from 'trello/server';

export const client = new ExtendClient();

client.start();
trelloServer();