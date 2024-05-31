import { client, server } from 'app';
import { AttachmentBuilder, Channel, ForumChannel } from 'discord.js';
import { createAnimeEmbed } from 'discord/embeds';
import { AnimeServer } from 'types/anime';

import config from 'utils/config';

export default () => {
    server.post('/thread', async (req, res) => {
        const anime = req.body as AnimeServer;

        const forumChannel = client.channels.cache.find((channel: Channel) => channel.id === config.DISCORD_FORUM_CHANNEL_ID) as ForumChannel;

        forumChannel.threads.create({
            name: anime.name,
            appliedTags: [seasonTags[anime.season as number]],
            message: {
                embeds: [createAnimeEmbed(anime)],
                files: [new AttachmentBuilder(anime.images.find(image => image?.facet === 1 /* Large Cover */)?.link as string)]
            }
        })
            .then(async (thread) => res.code(201).send({ id: thread.id, name: thread.name }))
            .catch(async (err) => {
                console.error(err);
                res.code(500).send({ error: 'Error: Thread Creation.' });
            });
    });
}

const seasonTags: { [key: number]: string } = {
    0: config.DISCORD_WINTER_FORUM_TAG,
    1: config.DISCORD_SPRING_FORUM_TAG,
    2: config.DISCORD_SUMMER_FORUM_TAG,
    3: config.DISCORD_FALL_FORUM_TAG,
};