import { AttachmentBuilder, Channel, CommandInteraction, ForumChannel, SlashCommandBuilder } from 'discord.js';
import { getAnimeByID } from 'AnimeThemes/AnimeThemes';
import { getAnimeEmbed } from 'Builders/DiscordEmbed';
import { editReply, reply } from 'lib/discord';
import { animeName } from 'Rules/Check';
import { SlashCommand } from 'structs/types/DiscordCommands';
import { client } from 'app';

import Config from 'config/Config';

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
        await reply(interaction, 'Loading...');

        const forumChannel = client.channels.cache.find((channel: Channel) => channel.id === Config.DISCORD_FORUM_CHANNEL_ID) as ForumChannel;
        const id = interaction.options.get('anime-id')?.value as number;
        const customAnimeName = interaction.options.get('name')?.value as string | undefined;
        
        const anime = await getAnimeByID(id);

        if (anime === null) {
            return await editReply(interaction, 'anime = null');
        }

        const name = animeName(anime, customAnimeName);

        if (name === null) {
            return await editReply(interaction, 'name.length > 100');
        }

        forumChannel.threads.create({
            name: name,
            message: {
                embeds: [getAnimeEmbed(anime)],
                files: [new AttachmentBuilder(anime.imageURL as string)]
            }
        })
        .then(async () => {
            await editReply(interaction, `Thread '**${name}**' has been created.`)
        })
        .catch(async (err) => {
            console.error(err);
            await editReply(interaction, 'Error: Thread Creation.');
        });
    },
})