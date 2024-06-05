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

            let message = await channel.messages.fetch(messageId);

            if (message === null) {
                throw new Error('Message not found.');
            }

            message.attachments = message.attachments.map(a => a?.url) as any;

            return res.code(200).send({ message: message });

        } catch (err: any) {
            console.error(err);
            return res.code(404).send({ error: err.message });
        }
    });

    server.put('/message', { preHandler: auth }, async (req, res) => {
        let newMessage = req.body as any;

        try {
            let channel = await client.channels.fetch(newMessage.channelId);

            if (!(channel instanceof TextChannel || channel instanceof ThreadChannel)) {
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
                files: newMessage.attachments,
            });

            return res.code(200).send({ message: message });

        } catch (err: any) {
            console.error(err);
            return res.code(404).send({ error: err.message });
        }
    });
};

export default MessageController;