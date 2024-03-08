import { Channel, CommandInteraction, EmbedBuilder, SlashCommandBuilder, ThreadChannel } from 'discord.js';
import { SlashCommand } from 'structs/types/Commands';
import { client } from 'app';

import AnimeThemes from 'AnimeThemes/AnimeThemes';
import DiscordEmbed from 'Builders/EmbedConstructor';

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
        await interaction.reply({ content: 'Loading...', ephemeral: true });

        const ids = interaction.options.get('videos-id')?.value as string;
        const type = interaction.options.get('type')?.value as 'added' | 'updated';
        const thread = client.channels.cache.find((channel: Channel) => channel.id === interaction.channelId) as ThreadChannel;

        let embeds: EmbedBuilder[] = [];
        for (let id of ids.split(',')) {
            let anime = await new AnimeThemes().getVideoByID(parseInt(id));

            if (anime === null) { try { return await interaction.editReply({ content: 'anime null' }); } catch (err) { return } }

            embeds.push(new DiscordEmbed().setEmbedColor(type).createVideoEmbedByAnime(anime));
        }

        thread.send({
            embeds: embeds
        })
        .then(async () => {
            try {
                await interaction.editReply({ content: 'Notification Created' });
            } catch (err) { console.error(err) }
        })
        .catch(async () => {
            try {
                await interaction.editReply({ content: 'Error: Notification Creation' });
            } catch (err) { console.error(err) }
        });
    },
})