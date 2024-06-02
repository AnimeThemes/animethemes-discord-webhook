import { client, server } from 'app'
import { Channel, ThreadChannel } from 'discord.js';
import { createVideoEmbedByAnime } from 'discord/embeds';

export default () => {
    server.post('/notification', async (req, res) => {
        let body = req.body as any;
        let threadId: any;
        let thread;
        try {
            for (let video of body.videos) {
                threadId = video.animethemeentries[0].animetheme.anime.discordthread.thread_id;
                thread = client.channels.cache.find((channel: Channel) => channel.id == threadId) as ThreadChannel;
    
                thread.send({
                    embeds: [createVideoEmbedByAnime(video, body.type)]
                });
            }

            return res.code(201).send({ message: 'New notification has been created.' });
        } catch (err) {
            console.error(req.body);
            console.error('ThreadId:', threadId);
            console.error('Thread:', thread);
            console.error(err);
            return res.code(500).send({ error: 'Error: Notification Creation.' });
        }
    });
}