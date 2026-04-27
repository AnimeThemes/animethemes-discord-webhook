import { client, server } from 'app';
import { Channel, TextChannel } from 'discord.js';
import { createVideoNotificationEmbed } from 'discord/embeds';
import { gql } from 'graphql/client';

import auth from 'api/middleware/auth';
import config from 'utils/config';
import { graphql } from 'graphql/generated';

interface NotificationBody {
    type: 'added' | 'updated';
    videos: Array<{
        videoId: number;
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

        const uploadsChannel = client.channels.cache.find(
            (channel: Channel) => channel.id == config.DISCORD_UPLOADS_CHANNEL_ID,
        ) as TextChannel;

        try {
            for (const videoInfo of body.videos) {
                const { video } = await gql(VIDEO_NOTIFICATION_QUERY, { id: videoInfo.videoId });

                if (!video) {
                    return;
                }

                uploadsChannel.send({
                    embeds: [createVideoNotificationEmbed(video, body.type)],
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
