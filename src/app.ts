import { ExtendClient } from 'structs/ExtendClient';

import trelloServer from 'trello/trello-server';

export const client = new ExtendClient();

client.start();
trelloServer();