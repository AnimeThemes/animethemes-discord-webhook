import { TextChannel } from 'discord.js';
import { client, server } from 'app';
import { createTrelloEmbed } from 'discord/embeds';
import { getEmbedConfigForAction } from 'trello/action';
import { toTrelloImageUrl } from 'utils/trello';

import config from 'utils/config';
import trello from 'api/middleware/trello';

const TrelloController = () => {
    server.head('/trello', async (req, res) => {
        return res.status(200).send('OK');
    });

    server.post('/trello', async (req, res) => {
        if (!trello(req, config.TRELLO_SECRET, config.TRELLO_CALLBACK_URL)) {
            return res.status(401).send('Forbidden');
        }

        const { model, action } = req.body as Record<string, any>;

        const embedConfigForAction = getEmbedConfigForAction(action.type, req.body);

        if (!embedConfigForAction) {
            console.log(action.type);
            return res.status(200).send('OK');
        }

        const embedConfig = {
            actionTitle: `No action handler defined for '${action.type}'`,
            boardName: model.name,
            boardUrl: model.url,
            actionUserName: action.memberCreator.fullName,
            actionUserImageUrl: toTrelloImageUrl(action.memberCreator.avatarUrl),
            ...embedConfigForAction,
        };

        const channel = client.channels.cache.find(
            (channel) => channel.id === config.DISCORD_TRELLO_CHANNEL_ID,
        ) as TextChannel;

        await channel.send({
            embeds: [createTrelloEmbed(embedConfig)],
        });

        return res.status(200).send('OK');
    });
};

export default TrelloController;
