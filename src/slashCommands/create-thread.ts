import { AttachmentBuilder, Channel, CommandInteraction, ForumChannel, SlashCommandBuilder } from 'discord.js';
import { SlashCommand } from 'structs/types/Commands';
import { client } from 'app';

import AnimeThemes from 'AnimeThemes/AnimeThemes';
import Check from 'Rules/Check';
import Config from 'config/Config';
import EmbedConstructor from 'Builders/EmbedConstructor';

export default new SlashCommand({
    data: new SlashCommandBuilder()
        .setName('create-thread')
        .setDescription('Create a thread')
        .setDefaultMemberPermissions(16777216) // Move Members
        .addIntegerOption(option => option
            .setName('anime-id')
            .setDescription('Insert an anime ID')
            .setRequired(true))
        .addStringOption(option => option
            .setName('name')
            .setDescription('Set the custom anime name')
            .setRequired(false)),

    async execute(interaction: CommandInteraction) {
        await interaction.reply({ content: 'Loading...', ephemeral: true });

        const forumChannel = client.channels.cache.find((channel: Channel) => channel.id === Config.DISCORD_FORUM_CHANNEL_ID) as ForumChannel;
        const id = interaction.options.get('anime-id')?.value as number;
        const customAnimeName = interaction.options.get('name')?.value as string | undefined;
        
        const anime = await new AnimeThemes().getAnimeByID(id);

        if (anime === null) { try { return await interaction.editReply({ content: 'anime = null' }); } catch (err) { return } }

        const name = new Check().animeName(anime, customAnimeName);

        if (name === null) { try { return await interaction.editReply({ content: 'name.length > 100' }); } catch (err) { return } }

        forumChannel.threads.create({
            name: name,
            message: {
                embeds: [new EmbedConstructor().getAnimeEmbed(anime)],
                files: [new AttachmentBuilder(anime.image as string)]
            }
        })
        .then(async () => {
            try {
                await interaction.editReply({ content: 'Thread Created' });
            } catch (err) { console.error(err) }
        })
        .catch(async () => {
            try {
                await interaction.editReply({ content: 'Error: Thread Creation' });
            } catch (err) { console.error(err) }
        });
    }
})