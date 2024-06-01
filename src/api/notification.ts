import { client, server } from 'app'
import { Channel, ThreadChannel } from 'discord.js';
import { createVideoEmbedByAnime } from 'discord/embeds';

export default () => {
    server.post('/notification', async (req, res) => {
        try {
            const body = req.body as any;

            for (let video of body.videos) {
                let threadId = video.animethemeentries[0].animetheme.anime.discordthread.thread_id;
                let thread = client.channels.cache.find((channel: Channel) => channel.id == threadId) as ThreadChannel;
    
                thread.send({
                    embeds: [createVideoEmbedByAnime(video, body.type)]
                });
            }

            return res.code(201).send({ message: 'New notification has been created.' });
        } catch (err) {
            console.error(err);
            return res.code(500).send({ error: 'Error: Notification Creation.' });
        }
    });
}