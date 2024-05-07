import { Channel, CommandInteraction, EmbedBuilder, SlashCommandBuilder, ThreadChannel } from 'discord.js';
import { client } from 'app';
import { getVideo } from 'animethemes/api';
import { SlashCommand } from 'discord/commands';
import { createVideoEmbedByAnime } from 'discord/embeds';
import { editReply, reply } from 'lib/discord';

export default new SlashCommand({
    data: new SlashCommandBuilder()
        .setName('create-notification')
        .setDescription('Create a embed notification')
        .setDefaultMemberPermissions(16777216) // Move Members
        .addStringOption(option => option
            .setName('videos-id')
            .setDescription('Set the videos id')
            .setRequired(true))
        .addStringOption(option => option
            .setName('type')
            .setDescription('Set the type')
            .setRequired(true)
            .addChoices({
                name: 'Added',
                value: 'added'
            }, {
                name: 'Updated',
                value: 'updated'
            })),

    async execute(interaction: CommandInteraction) {
        await reply(interaction, 'Loading...');

        const ids = interaction.options.get('videos-id')?.value as string;
        const type = interaction.options.get('type')?.value as 'added' | 'updated';
        const thread = client.channels.cache.find((channel: Channel) => channel.id === interaction.channelId) as ThreadChannel;

        let embeds: EmbedBuilder[] = [];
        for (let id of ids.split(',')) {
            let video = await getVideo(parseInt(id));

            if (video === null) {
                return await editReply(interaction, 'video null');
            }

            embeds.push(createVideoEmbedByAnime(video, type));
        }

        thread.send({
            embeds: embeds
        })
        .then(async () => {
            await editReply(interaction, 'New notification has been created.');
        })
        .catch(async (err) => {
            console.error(err);
            await editReply(interaction, 'Error: Notification Creation.');
        });
    },
})