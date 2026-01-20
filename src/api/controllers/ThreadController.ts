import { client, server } from 'app';
import { AttachmentBuilder, Channel, ForumChannel } from 'discord.js';
import { createAnimeEmbed } from 'discord/embeds';
import { gql } from 'graphql/client';
import { AnimeThread } from 'types/animethemes';

import auth from 'api/middleware/auth';
import config from 'utils/config';

interface AnimeQuery {
    anime: AnimeThread;
}

const ThreadController = () => {
    server.get('/thread', { preHandler: auth }, async (req, res) => {
        const { id } = req.query as any;

        try {
            const forumChannel = client.channels.cache.find(
                (channel: Channel) => channel.id === config.DISCORD_FORUM_CHANNEL_ID,
            ) as ForumChannel;

            const thread = await forumChannel.threads.fetch(id);

            if (thread === null) {
                return res.code(404).send({ error: 'Thread not found.' });
            }

            return res.code(200).send({ thread: thread });
        } catch (err) {
            console.error(id);
            console.error(err);
            return res.code(500).send({ error: err });
        }
    });

    server.post('/thread', { preHandler: auth }, async (req, res) => {
        const { name, slug } = req.body as any;

        const { anime } = await gql<AnimeQuery>(animeQuery, { slug: slug });

        anime.name = name || anime.name;

        try {
            const forumChannel = client.channels.cache.find(
                (channel: Channel) => channel.id === config.DISCORD_FORUM_CHANNEL_ID,
            ) as ForumChannel;

            const thread = await forumChannel.threads.create({
                name: anime.name,
                appliedTags: [seasonTags[anime.season]],
                message: {
                    embeds: [createAnimeEmbed(anime)],
                    files: [new AttachmentBuilder(anime.images.nodes[0].link)],
                },
            });

            return res.code(201).send({ id: thread.id, name: thread.name });
        } catch (err) {
            console.error(req.body);
            console.error(err);
            return res.code(500).send({ error: 'Error: Thread Creation.' });
        }
    });

    server.put('/thread', { preHandler: auth }, async (req, res) => {
        const body = req.body as any;

        try {
            const forumChannel = client.channels.cache.find(
                (channel: Channel) => channel.id === config.DISCORD_FORUM_CHANNEL_ID,
            ) as ForumChannel;

            const thread = await forumChannel.threads.fetch(body.thread_id);

            if (thread === null) {
                return res.code(404).send({ error: 'Thread not found.' });
            }

            thread?.edit({
                name: body.name,
            });

            return res.code(200);
        } catch (err) {
            console.error(body);
            console.error(err);
            return res.code(500).send({ error: err });
        }
    });

    server.delete('/thread', { preHandler: auth }, async (req, res) => {
        const body = req.body as Record<string, any>;

        try {
            const forumChannel = client.channels.cache.find(
                (channel: Channel) => channel.id === config.DISCORD_FORUM_CHANNEL_ID,
            ) as ForumChannel;

            const thread = await forumChannel.threads.fetch(body.id);

            if (thread === null) {
                return res.code(404).send({ error: 'Thread not found.' });
            }

            thread?.delete();
            return res.code(200);
        } catch (err) {
            console.error(body);
            console.error(err);
            return res.code(500).send({ error: err });
        }
    });
};

export default ThreadController;

const seasonTags: { [key in AnimeThread['season']]: string } = {
    WINTER: config.DISCORD_WINTER_FORUM_TAG,
    SPRING: config.DISCORD_SPRING_FORUM_TAG,
    SUMMER: config.DISCORD_SUMMER_FORUM_TAG,
    FALL: config.DISCORD_FALL_FORUM_TAG,
};

const animeQuery = `
    query AnimeThread($slug: String!) {
        anime(slug: $slug) {
            name
            slug
            season
            synopsis
            images(facet: LARGE_COVER) {
                nodes {
                    facet
                    link
                }
            }
        }
    }
`;
