import { client, server } from 'app';
import { Channel, ForumChannel } from 'discord.js';
import { createVideoThreadEmbed } from 'discord/embeds';
import { gql } from 'graphql/client';

import auth from 'api/middleware/auth';
import config from 'utils/config';
import { graphql } from 'graphql/generated';

interface NotificationBody {
    type: 'added' | 'updated';
    videos: Array<{
        videoId: number;
        threadId: string;
    }>;
}

export const VIDEO_NOTIFICATION_QUERY = graphql(`
    query VideoNotification($id: Int!) {
        video(id: $id) {
            ...createVideoSlugVideo
            ...VideoEmbed
        }
    }
`);

const NotificationController = () => {
    server.post('/notification', { preHandler: auth }, async (req, res) => {
        const body = req.body as NotificationBody;

        const forum = client.channels.cache.find(
            (channel: Channel) => channel.id == config.DISCORD_FORUM_CHANNEL_ID,
        ) as ForumChannel;

        try {
            for (const videoInfo of body.videos) {
                const { video } = await gql(VIDEO_NOTIFICATION_QUERY, { id: videoInfo.videoId });

                if (!video) {
                    return;
                }

                const thread = await forum.threads.fetch(videoInfo.threadId);

                if (thread === null) {
                    throw new Error(`Thread not found for id ${videoInfo.threadId}`);
                }

                thread.send({
                    embeds: [createVideoThreadEmbed(video, body.type)],
                });
            }

            return res.code(201).send({ message: 'New notification has been created.' });
        } catch (err) {
            console.error(body);
            console.error(err);
            return res.code(500).send({ error: 'Error: Notification Creation.' });
        }
    });
};

export default NotificationController;
