import { TextChannel } from 'discord.js';
import { client, server } from 'app';
import { createTrelloEmbed } from 'discord/embeds';
import { getEmbedConfigForAction } from 'trello/action';
import { toTrelloImageUrl } from 'utils/trello';

import config from 'utils/config';
import trello from 'api/middleware/trello';

const trelloController = () => {
    server.head('/trello', async () => {
        return null;
    });

    server.post('/trello', async (req) => {
        const callbackURL = 'http://' + (config.API_HOST || 'localhost') + ':' + (config.API_PORT ?? 3000) + '/trello';
        if (!trello(req, config.TRELLO_SECRET, callbackURL)) {
            return null;
        }

        const { model, action } = req.body as any;

        const embedConfigForAction = getEmbedConfigForAction(action.type, req.body);

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
};

export default trelloController;