import { client, server } from 'app';
import { AttachmentBuilder, Channel, ForumChannel } from 'discord.js';
import { createAnimeEmbed } from 'discord/embeds';
import { Anime } from 'types/anime';

import auth from 'api/middleware/auth';
import config from 'utils/config';

export default () => {
    server.post('/thread', { preHandler: auth }, async (req, res) => {
        let anime = req.body as Anime;
        let thread;
        try {
            const forumChannel = client.channels.cache.find((channel: Channel) => channel.id === config.DISCORD_FORUM_CHANNEL_ID) as ForumChannel;
    
            thread = await forumChannel.threads.create({
                name: anime.name,
                appliedTags: [seasonTags[anime.season as number]],
                message: {
                    embeds: [createAnimeEmbed(anime)],
                    files: [new AttachmentBuilder(anime.images.find(image => image?.facet === 1 /* Large Cover */)?.link as string)]
                }
            });

            return res.code(201).send({ id: thread.id, name: thread.name });

        } catch (err) {
            console.error(req.body);
            console.error(thread);
            console.error(err);
            return res.code(500).send({ error: 'Error: Thread Creation.' });
        }
    });

    server.put('/thread', { preHandler: auth }, async (req, res) => {
        try {
            const body = req.body as Record<string, any>;
            const forumChannel = client.channels.cache.find((channel: Channel) => channel.id === config.DISCORD_FORUM_CHANNEL_ID) as ForumChannel;

            const thread = forumChannel.threads.cache.find(thread => thread.id == body.thread_id);

            thread?.edit({
                name: body.name,
            });

        } catch (err) {
            console.error(err);
        }
    });

    server.delete('/thread', { preHandler: auth }, async (req, res) => {
        try {
            const body = req.body as Record<string, any>;
            const forumChannel = client.channels.cache.find((channel: Channel) => channel.id === config.DISCORD_FORUM_CHANNEL_ID) as ForumChannel;

            const thread = forumChannel.threads.cache.find(thread => thread.id == body.id);

            thread?.delete();

        } catch (err) {
            console.error(err);
        }
    });
}

const seasonTags: { [key: number]: string } = {
    0: config.DISCORD_WINTER_FORUM_TAG,
    1: config.DISCORD_SPRING_FORUM_TAG,
    2: config.DISCORD_SUMMER_FORUM_TAG,
    3: config.DISCORD_FALL_FORUM_TAG,
};