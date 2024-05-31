import { client, server } from 'app';
import { AttachmentBuilder, Channel, ForumChannel } from 'discord.js';
import { createAnimeEmbed } from 'discord/embeds';
import { Anime } from 'types/anime';

import config from 'utils/config';

export default () => {
    server.post('/create-thread', async (req, res) => {
        res.send({ message: 'authorized'})
        console.log('authorized');
        const anime = req.body as Anime;

        const forumChannel = client.channels.cache.find((channel: Channel) => channel.id === config.DISCORD_FORUM_CHANNEL_ID) as ForumChannel;

        forumChannel.threads.create({
            name: anime.name,
            message: {
                embeds: [createAnimeEmbed(anime)],
                files: [new AttachmentBuilder(anime.images.find(image => image?.facet === 'Large Cover')?.link as string)]
            }
        })
        .then(async () => res.code(201).send({ message: 'Thread Created.' }))
        .catch(async (err) => {
            console.error(err);
            res.code(500).send({ error: 'Error: Thread Creation.' });
        });
    });
}