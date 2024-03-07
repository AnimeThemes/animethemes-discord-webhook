import { TextChannel } from "discord.js";
import { client } from "app";
import { createTrelloEmbed } from "trello/trello-embed";
import { getEmbedConfigForAction } from "trello/trello-action";
import { toTrelloImageUrl } from "trello/trello-util";

import Fastify from "fastify";
import Config from "config/Config";

export default () => {
    const server = Fastify({ logger: true });

    server.head("/", async () => {
        return null;
    });

    server.post("/", async (request) => {
        const { model, action } = request.body as any;

        const embedConfigForAction = getEmbedConfigForAction(action.type, request.body);

        if (!embedConfigForAction) {
            console.log(action.type);
            return null;
        }

        const embedConfig = {
            actionTitle: `No action handler defined for "${action.type}"`,
            boardName: model.name,
            boardUrl: model.url,
            actionUserName: action.memberCreator.fullName,
            actionUserImageUrl: toTrelloImageUrl(action.memberCreator.avatarUrl),
            ...embedConfigForAction,
        };

        const channel = client.channels.cache.find(channel => channel.id === Config.DISCORD_TRELLO_CHANNEL_ID) as TextChannel;

        await channel.send({
            embeds: [createTrelloEmbed(embedConfig)],
        });

        return null;
    });

    server.listen({
        host: Config.SERVER_HOST,
        port: +Config.SERVER_PORT ?? 3000
    }, (err, address) => {
        if (err) {
            server.log.error(err);
            process.exit(1);
        }
        console.log(`Listening on: ${address}`);
    });
}