import { client, server } from "app";
import { AttachmentBuilder, NewsChannel, TextChannel, ThreadChannel } from "discord.js";

import auth from "api/middleware/auth";

const discordMsgUrlReg = /https:\/\/discord\.com\/channels\/(\d+)\/(\d+)\/(\d+)/;

const MessageController = () => {
    server.get('/message', { preHandler: auth }, async (req, res) => {
        const { url } = req.query as any;
        const [, , channelId, messageId] = url.match(discordMsgUrlReg);

        try {
            let channel = await client.channels.fetch(channelId);

            if (!(channel instanceof TextChannel || channel instanceof ThreadChannel || channel instanceof NewsChannel)) {
                throw new Error('Channel not found.');
            }

            let message = await channel.messages.fetch(messageId) as any;

            if (message === null) {
                throw new Error('Message not found.');
            }

            message.files = message.attachments.map((a: any) => a?.url) as string[];

            return res.code(200).send({ message: message });

        } catch (err: any) {
            console.error(req.body);
            console.error(err);
            return res.code(404).send({ error: err.message });
        }
    });

    server.post('/message', { preHandler: auth }, async (req, res) => {
        const { message } = req.body as any;

        try {
            let channel = await client.channels.fetch(message.channelId);

            if (!(channel instanceof TextChannel || channel instanceof ThreadChannel || channel instanceof NewsChannel)) {
                throw new Error('Channel not found.');
            }

            let embeds = [];
            for (let embed of message.embeds) {
                if (embed.thumbnail.length === 0) {
                    embed.thumbnail = {};
                }

                if (embed.image.length === 0) {
                    embed.image = {};
                }

                embeds.push(embed);
            }

            let files = [];
            for (let file of message.files) {
                files.push(new AttachmentBuilder(file.url));
            }

            channel.send({
                content: message.content,
                embeds: message.embeds,
                files: files,
            });

        } catch (err: any) {
            console.error(req.body);
            console.error(err);
            return res.code(404).send({ error: err.message });
        }
    });

    server.put('/message', { preHandler: auth }, async (req, res) => {
        let body = req.body as any;
        let newMessage = body[0];

        try {
            let channel = await client.channels.fetch(newMessage.channelId);

            if (!(channel instanceof TextChannel || channel instanceof ThreadChannel || channel instanceof NewsChannel)) {
                throw new Error('Channel not found.');
            }

            const message = await channel.messages.fetch(newMessage.id);

            if (message === null) {
                throw new Error('Message not found.');
            }

            if (channel.isThread() && channel.archived) {
                channel.setArchived(false);
            }

            let embeds = [];
            for (let embed of newMessage.embeds) {
                if (embed.thumbnail.length === 0) {
                    embed.thumbnail = {};
                }

                if (embed.image.length === 0) {
                    embed.image = {};
                }

                embeds.push(embed);
            }

            let files = [];
            for (let file of newMessage.files) {
                files.push(new AttachmentBuilder(file.url));
            }

            message.edit({
                content: newMessage.content,
                embeds: embeds,
                files: files,
            });

            return res.code(200).send({ message: message });

        } catch (err: any) {
            console.error(err);
            return res.code(404).send({ error: err.message });
        }
    });
};

export default MessageController;