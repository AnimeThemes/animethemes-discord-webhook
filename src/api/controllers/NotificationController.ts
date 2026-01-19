import { client, server } from 'app';
import { Channel, ForumChannel } from 'discord.js';
import { createVideoEmbedByAnime } from 'discord/embeds';
import { Video } from 'types/animethemes';

import auth from 'api/middleware/auth';
import config from 'utils/config';
import axios from 'lib/axios';

interface NotificationBody {
    type: 'added' | 'updated';
    videos: Array<{
        videoId: number;
        threadId: string;
    }>;
}

const NotificationController = () => {
    server.post('/notification', { preHandler: auth }, async (req, res) => {
        let body = req.body as NotificationBody;

        const forum = client.channels.cache.find(
            (channel: Channel) => channel.id == config.DISCORD_FORUM_CHANNEL_ID,
        ) as ForumChannel;

        try {
            for (let videoInfo of body.videos) {
                let video = (
                    await axios.post('/', {
                        query: videoQuery,
                        variables: {
                            id: videoInfo.videoId,
                        },
                    })
                ).data.data.video as Video;

                let thread = await forum.threads.fetch(videoInfo.threadId);

                if (thread === null) {
                    throw new Error(`Thread not found for id ${videoInfo.threadId}`);
                }

                thread.send({
                    embeds: [createVideoEmbedByAnime(video, body.type)],
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

const videoQuery = `
query VideoNotification($id: Int!) {
    video(id: $id) {
        link
        overlapLocalized
        resolution
        sourceLocalized
        tags
        animethemeentries {
            nodes {
                episodes
                nsfw
                spoiler
                version
                animetheme {
                    type
                    sequence
                    song {
                        title
                        performances(sort: RELEVANCE) {
                            alias
                            as
                            artist {
                                ... on Artist {
                                    name
                                    slug
                                }
                                ... on Membership {
                                    group {
                                        name
                                        slug
                                    }
                                }
                            }
                        }
                    }
                    group {
                        slug
                    }
                    anime {
                        slug
                        images(facet: SMALL_COVER) {
                            nodes {
                                link
                            }
                        }
                    }
                }
            }
        }
    }
}
`;
