import { AttachmentBuilder, Channel, CommandInteraction, EmbedBuilder, ForumChannel, SlashCommandBuilder, ThreadChannel } from "discord.js";
import { AnimeRequest, AnimeThemeEntry, Video } from "../structs/types/Anime";
import { SlashCommand } from "../structs/types/Commands";
import { client } from "../app";

import AnimeThemes from "../AnimeThemes/AnimeThemes";
import Check from "../Rules/checks";
import Config from "../config/config";
import EmbedConstructor from "../Builders/EmbedConstructor";
import StringFormatter from "../AnimeThemes/StringFormatter";

export default new SlashCommand({
    data: new SlashCommandBuilder()
        .setName("create-anime")
        .setDescription("Create a embed notification")
        .setDefaultMemberPermissions(16777216) // Move Members
        .addStringOption(option => option
            .setName("anime-id")
            .setDescription("Set the anime ID")
            .setRequired(true))
        .addStringOption(option => option.setName("custom-name").setDescription("Set a custom name")),

    async execute(interaction: CommandInteraction) {
        await interaction.reply({ content: "Loading...", ephemeral: true });

        const forumChannel = client.channels.cache.find((channel: Channel) => channel.id === Config.DISCORD_FORUM_CHANNEL_ID) as ForumChannel;
        const id = interaction.options.get("anime-id")?.value as number;
        const animeCustomName = interaction.options.get("name")?.value as string | undefined;

        let anime = await new AnimeThemes().getAllVideos(id);
        if (anime === null) { try { return await interaction.editReply({ content: "anime = null" }) } catch (err) { return } }
        const name = new Check().animeName(anime, animeCustomName);
        if (name === null) { try { return await interaction.editReply({ content: "name.length > 100" }) } catch (err) { return } }


        forumChannel.threads.create({
            name: name,
            message: {
                embeds: [new EmbedConstructor().getAnimeEmbed(anime)],
                files: [new AttachmentBuilder(anime.image as string)]
            }
        }).then(async (thread: ThreadChannel) => {
            anime = anime as AnimeRequest;

            let embeds: EmbedBuilder[] = [];
            for (let theme of anime.animethemes) {
                let description = "";
                let e = new EmbedConstructor()
                    .setEmbedColor("added")
                    .setTitle(`${theme.slug}${theme?.song?.title === undefined ? '' : ` - ${theme?.song?.title}`}`)

                if (theme.song.artists.length !== 0) {
                    description += new StringFormatter().artistsDescription(theme.song.artists);
                }
                
                for (let entry of theme.animethemeentries) {
                    description += "\n" + new StringFormatter().entryDescription(entry as AnimeThemeEntry);

                    for (let video of entry.videos) {
                        description += new StringFormatter().videoDescription(video as Video) + "\n\n";
                    }
                }

                embeds.push(e.createVideoEmbedByDescription(description));
            }

            thread.send({
                embeds: embeds
            })
            .then(async () => {
                try {
                    await interaction.editReply({ content: "Thread and Notification Created" })
                } catch (err) { console.error(err) }
            })
            .catch(async (err) => {
                console.error(err);
            });

        })
        .catch(async (err) => {
            console.error(err);
            try {
                await interaction.editReply({ content: "Error: Thread Creation" });
            } catch (err) { console.error(err) }
        });
    },
})