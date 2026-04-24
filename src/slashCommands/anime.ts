import { ResultOf } from '@graphql-typed-document-node/core';
import { EmbedBuilder, MessageFlags, SlashCommandBuilder } from 'discord.js';
import { previousNextRow } from 'discord/buttons';
import SlashCommand from 'discord/SlashCommand';
import { gql } from 'graphql/client';
import { graphql } from 'graphql/generated';
import config from 'utils/config';

export const SEARCH_ANIME_QUERY = graphql(`
    query SearchAnime($search: String!) {
        animePagination(search: $search, first: 5) {
            paginatorInfo {
                count
            }
            data {
                formatLocalized
                name
                slug
                seasonLocalized
                synopsis
                year
                images(facet: SMALL_COVER) {
                    nodes {
                        link
                    }
                }
            }
        }
    }
`);

const makeEmbed = (
    anime: ResultOf<typeof SEARCH_ANIME_QUERY>['animePagination']['data'][number],
    index: number,
    count: number,
) => {
    return new EmbedBuilder()
        .setTitle(anime.name)
        .setDescription(
            `${anime.synopsis
                ?.replace(/\r\n/g, '\n')
                .replace(/\n{3,}/g, '\n\n')
                .trim()}`,
        )
        .setThumbnail(anime.images.nodes[0].link)
        .setColor('Blue')
        .setURL(config.ANIME_URL + '/' + anime.slug)
        .setFooter({
            text: `${anime.formatLocalized} • ${anime.seasonLocalized} ${anime.year} • ${index + 1}/${count}`,
        });
};

const animeSlashCommand = new SlashCommand({
    data: new SlashCommandBuilder()
        .setName('anime')
        .setDescription('Search for a given anime')
        .addStringOption((option) => option.setName('search').setDescription('Term to search').setRequired(true)),

    async execute(interaction) {
        const search = interaction.options.getString('search', true);

        const { animePagination } = await gql(SEARCH_ANIME_QUERY, { search: search });

        const pageInfo = animePagination.paginatorInfo;

        let index = 0;

        const animeEmbed = makeEmbed(animePagination.data[index], index, pageInfo.count);

        const reply = await interaction.reply({
            embeds: [animeEmbed],
            components: [previousNextRow],
            flags: [MessageFlags.Ephemeral],
        });

        const collector = reply.createMessageComponentCollector({
            time: 60_000,
        });

        collector.on('collect', async (i) => {
            if (!i.isButton()) {
                return;
            }

            if (i.user.id !== interaction.user.id) {
                return await i.reply({ content: 'You cannot use it.', ephemeral: true });
            }

            if (i.customId === 'veryPrevious') {
                index = 0;
            }

            if (i.customId === 'veryNext') {
                index = pageInfo.count - 1;
            }

            if (i.customId === 'previous') {
                index--;

                if (index < 0) {
                    index = pageInfo.count - 1;
                }
            }

            if (i.customId === 'next') {
                index++;

                if (index >= pageInfo.count) {
                    index = 0;
                }
            }

            await i.update({
                embeds: [makeEmbed(animePagination.data[index], index, pageInfo.count)],
                components: [previousNextRow],
            });
        });
    },
});

export default animeSlashCommand;
