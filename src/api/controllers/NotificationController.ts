import { client, server } from 'app'
import { Channel, ForumChannel, ThreadChannel } from 'discord.js';
import { createVideoEmbedByAnime } from 'discord/embeds';

import auth from 'api/middleware/auth';
import config from 'utils/config';

const NotificationController = () => {
    server.post('/notification', { preHandler: auth }, async (req, res) => {
        let body = req.body as any;
        let threadId: string = '';
        let thread;

        const forum = client.channels.cache.find((channel: Channel) => channel.id == config.DISCORD_FORUM_CHANNEL_ID) as ForumChannel;

        try {
            for (let video of body.videos) {
                threadId = video.animethemeentries[0].animetheme.anime.discordthread.thread_id;
                thread = await forum.threads.fetch(threadId) as ThreadChannel;

                if (thread === null) {
                    throw new Error();
                }

                thread.send({
                    embeds: [createVideoEmbedByAnime(video, body.type)]
                });
            }

            return res.code(201).send({ message: 'New notification has been created.' });
        } catch (err) {
            console.error(body);
            console.error('ThreadId:', threadId);
            console.error('Thread:', thread);
            console.error(err);
            return res.code(500).send({ error: 'Error: Notification Creation.' });
        }
    });
};

export default NotificationController;