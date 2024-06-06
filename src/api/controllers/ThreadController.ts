import { client, server } from 'app';
import { AnyThreadChannel, AttachmentBuilder, Channel, ForumChannel, ThreadChannel } from 'discord.js';
import { createAnimeEmbed } from 'discord/embeds';
import { Anime } from 'types/anime';

import auth from 'api/middleware/auth';
import config from 'utils/config';

const ThreadController = () => {
    server.get('/thread', { preHandler: auth }, async (req, res) => {
        const { id } = req.query as any;
        let thread;

        try {
            const forumChannel = client.channels.cache.find((channel: Channel) => channel.id === config.DISCORD_FORUM_CHANNEL_ID) as ForumChannel;

            thread = await forumChannel.threads.fetch(id) as ThreadChannel | null;

            if (thread === null) {
                throw new Error();
            }

            return res.code(200).send({ thread: thread });
        } catch (err) {
            console.error(id);
            console.error(thread)
            console.error(err);
            return res.code(404).send({ error: 'Thread not found.' });
        }
    });

    server.post('/thread', { preHandler: auth }, async (req, res) => {
        let anime = req.body as Anime;
        let thread: AnyThreadChannel<boolean> | null = null;

        try {
            const forumChannel = client.channels.cache.find((channel: Channel) => channel.id === config.DISCORD_FORUM_CHANNEL_ID) as ForumChannel;

            thread = await forumChannel.threads.create({
                name: anime.name,
                appliedTags: [seasonTags[anime.season as number]],
                message: {
                    embeds: [createAnimeEmbed(anime)],
                    files: [new AttachmentBuilder(anime.images.find(image => image?.facet === 1 /* Large Cover */)?.link as string)]
                }
            }) as AnyThreadChannel<boolean>;

            if (thread === null) {
                throw new Error();
            }

            return res.code(201).send({ id: thread.id, name: thread.name });
        } catch (err) {
            console.error(req.body);
            console.error(thread);
            console.error(err);
            return res.code(500).send({ error: 'Error: Thread Creation.' });
        }
    });

    server.put('/thread', { preHandler: auth }, async (req, res) => {
        const body = req.body as any;
        let thread: AnyThreadChannel<boolean> | null = null;

        try {
            const forumChannel = client.channels.cache.find((channel: Channel) => channel.id === config.DISCORD_FORUM_CHANNEL_ID) as ForumChannel;

            thread = await forumChannel.threads.fetch(body.thread_id);

            if (thread === null) {
                throw new Error();
            }

            thread?.edit({
                name: body.name,
            });

        } catch (err) {
            console.error(body);
            console.error(thread);
            console.error(err);
        }
    });

    server.delete('/thread', { preHandler: auth }, async (req, res) => {
        const body = req.body as Record<string, any>;
        let thread: AnyThreadChannel<boolean> | null = null;

        try {
            const forumChannel = client.channels.cache.find((channel: Channel) => channel.id === config.DISCORD_FORUM_CHANNEL_ID) as ForumChannel;

            thread = await forumChannel.threads.fetch(body.id);

            if (thread === null) {
                throw new Error();
            }

            thread?.delete();

        } catch (err) {
            console.error(body);
            console.error(thread);
            console.error(err);
        }
    });
};

export default ThreadController;

const seasonTags: { [key: number]: string } = {
    0: config.DISCORD_WINTER_FORUM_TAG,
    1: config.DISCORD_SPRING_FORUM_TAG,
    2: config.DISCORD_SUMMER_FORUM_TAG,
    3: config.DISCORD_FALL_FORUM_TAG,
};