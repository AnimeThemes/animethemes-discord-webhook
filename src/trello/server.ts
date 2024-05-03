import { TextChannel } from 'discord.js';
import { client } from 'app';
import { createTrelloEmbed } from 'discord/embeds';
import { getEmbedConfigForAction } from 'trello/action';
import { toTrelloImageUrl } from 'utils/trello';

import Fastify from 'fastify';
import config from 'utils/config';

export default () => {
    const server = Fastify({ logger: true });

    server.head('/', async () => {
        return null;
    });

    server.post('/', async (request) => {
        const { model, action } = request.body as any;

        const embedConfigForAction = getEmbedConfigForAction(action.type, request.body);

        if (!embedConfigForAction) {
            console.log(action.type);
            return null;
        }

        const embedConfig = {
            actionTitle: `No action handler defined for '${action.type}'`,
            boardName: model.name,
            boardUrl: model.url,
            actionUserName: action.memberCreator.fullName,
            actionUserImageUrl: toTrelloImageUrl(action.memberCreator.avatarUrl),
            ...embedConfigForAction,
        };

        const channel = client.channels.cache.find(channel => channel.id === config.DISCORD_TRELLO_CHANNEL_ID) as TextChannel;

        await channel.send({
            embeds: [createTrelloEmbed(embedConfig)],
        });

        return null;
    });

    server.listen({
        host: config.SERVER_HOST,
        port: +config.SERVER_PORT ?? 3000
    }, (err, address) => {
        if (err) {
            server.log.error(err);
            process.exit(1);
        }
        console.log(`Listening on: ${address}`);
    });
}