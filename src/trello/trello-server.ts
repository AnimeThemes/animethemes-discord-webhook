import { TextChannel } from "discord.js";
import { client } from "app";
import { createTrelloEmbed } from "trello/trello-embed";
import { getEmbedConfigForAction } from "trello/trello-action";
import { toTrelloImageUrl } from "trello/trello-util";

import Config from "config/config";

export default () => {
    const server = Bun.serve({
        port: Config.SERVER_PORT ?? 3000,
        async fetch(request) {
            if (request.method === "HEAD") {
                return new Response(null, {
                    status: 200,
                });
            }

            let json;

            try {
                json = await request.json();
            } catch (e) {
                console.log(request.method);
                console.log(request.url);
                console.log(await request.text());
                return new Response(null, {
                    status: 200,
                });
            }

            const { model, action } = json;

            const embedConfigForAction = getEmbedConfigForAction(action.type, json);

            if (!embedConfigForAction) {
                console.log(action.type);
                return new Response(null, {
                    status: 200,
                });
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

            return new Response(null, {
                status: 200,
            });
        },
    });

    console.log(`Listening on localhost: ${server.port}`);
}