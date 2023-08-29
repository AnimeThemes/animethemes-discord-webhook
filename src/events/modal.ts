import { BaseInteraction, Events } from "discord.js";

import * as dotenv from "dotenv";

import { Anime } from "../structs/types/Anime";
import AnimeThemes from "../AnimeThemes/AnimeThemes";
import DiscordEmbed from "../Builders/EmbedConstructor";
import Event from "../structs/types/Event";
import StringFormatter from "../AnimeThemes/StringFormatter";

dotenv.config();

export default new Event({
    name: Events.InteractionCreate,
    async execute(interaction: BaseInteraction): Promise<any> {
        if (!interaction.isModalSubmit()) return;

        await interaction.reply({ content: '...', ephemeral: true});

        const { customId, fields } = interaction;

        if (customId === 'id-modal-anime') {
            let idAnime = parseInt(fields.getTextInputValue('id-anime'));

            let anime = await new AnimeThemes().getByAnimeID(idAnime);
            if (anime === null) return await interaction.editReply({ content: 'Error' });

            new DiscordEmbed()
                .setColor([46, 204, 113])
                .setTitle(anime.name)
                .setThumbnail(anime.images[0].link)
                .setDescription(new StringFormatter().addedOrUpdate("ADDED").animeDescription(anime))
                .notify()
                .then(async (text: string) => await interaction.editReply({ content: text }));
        }

        if (customId === 'id-modal-video' || customId === 'id-modal-update-video') {
            let idsVideo = fields.getTextInputValue('id-video');
            let animes: any[] = [];

            for (let id of idsVideo.split(',')) {
                let anime = await new AnimeThemes().getByVideoID(parseInt(id));
                animes.push(anime);
            }

            animes = animes.filter(item => item !== null) as Anime[];
            if (animes.length === 0) return await interaction.editReply({ content: 'Error' });
            if (!animes.every(anime => anime.id === animes[0].id)) return await interaction.editReply({ content: 'Different animes' });

            let embed = new DiscordEmbed()
                .setTitle(animes[0].name)
                .setThumbnail(animes[0].images[0].link);

            if (customId === 'id-modal-video') {
                embed.setColor([46, 204, 113]);
                let themesDescription = [];

                for (let anime of animes) {
                    themesDescription.push(new StringFormatter().addedOrUpdate("ADDED").animeDescription(anime));
                }

                embed.setDescription(new StringFormatter().removeUnnecessaryText(themesDescription))
                    .notify()
                    .then(async (text: string) => {
                        await interaction.editReply({ content: text })
                    });

            } else if (customId === 'id-modal-update-video') {
                embed.setColor([255, 255, 0]);
                let themesDescription = [];

                for (let anime of animes) {
                    themesDescription.push(new StringFormatter().addedOrUpdate("UPDATED").animeDescription(anime));
                }

                embed.setDescription(new StringFormatter().removeUnnecessaryText(themesDescription))
                    .notify()
                    .then(async (text: string) => {
                        await interaction.editReply({ content: text })
                    });
            }
        }
    }
})