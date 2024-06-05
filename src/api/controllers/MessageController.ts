import { client, server } from "app";
import { AttachmentBuilder, NewsChannel, TextChannel, ThreadChannel } from "discord.js";

import auth from "api/middleware/auth";

const discordMsgUrlReg = /https:\/\/discord\.com\/channels\/(\d+)\/(\d+)\/(\d+)/;

const MessageController = () => {
    server.get('/message', { preHandler: auth }, async (req, res) => {
        const { url } = req.body as any;
        const [fullMatch, guildId, channelId, messageId] = url.match(discordMsgUrlReg);

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

            let files = [];
            for (let file of message.files) {
                files.push(new AttachmentBuilder(file));
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
        let newMessage = req.body as any;

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

            let files = [];
            for (let file of newMessage.files) {
                files.push(new AttachmentBuilder(file));
            }

            message.edit({
                content: newMessage.content,
                embeds: newMessage.embeds,
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