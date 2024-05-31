import { client, server } from 'app'
import { Channel, EmbedBuilder, ThreadChannel } from 'discord.js';
import { createVideoEmbedByAnime } from 'discord/embeds';

export default () => {
    server.post('/create-notification', (req, res) => {
        const body = req.body as any;
        const thread = client.channels.cache.find((channel: Channel) => channel.id === body.threadId) as ThreadChannel;

        let embeds: EmbedBuilder[] = [];
        for (let video of body.videos) {
            embeds.push(createVideoEmbedByAnime(video, body.type));
        }

        thread.send({
            embeds: embeds
        })
        .then(async () => res.code(201).send({ message: 'New notification has been created.' }))
        .catch(async (err) => {
            console.error(err);
            res.code(500).send({ error: 'Error: Notification Creation.' });
        });
    });
}