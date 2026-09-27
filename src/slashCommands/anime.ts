import { ResultOf } from '@graphql-typed-document-node/core';
import { EmbedBuilder, MessageFlags, SlashCommandBuilder } from 'discord.js';
import { previousNextRow } from 'discord/buttons';
import SlashCommand from 'discord/SlashCommand';
import { gql } from 'graphql/client';
import { graphql } from 'graphql/generated';

export const SEARCH_ANIME_QUERY = graphql(`
    query SearchAnime($search: String!) {
        search(search: $search, first: 5) {
            anime {
                pageInfo {
                    first
                }
                data {
                    formatLocalized
                    title {
                        romaji
                    }
                    siteUrl
                    seasonLocalized
                    synopsis
                    year
                    images {
                        nodes {
                            facet
                            link
                        }
                    }
                }
            }
        }
    }
`);

const makeEmbed = (
    anime: ResultOf<typeof SEARCH_ANIME_QUERY>['search']['anime']['data'][number],
    index: number,
    count: number,
) => {
    return new EmbedBuilder()
        .setTitle(anime.title.romaji)
        .setDescription(
            `${anime.synopsis
                ?.replace(/\r\n/g, '\n')
                .replace(/\n{3,}/g, '\n\n')
                .trim()}`,
        )
        .setThumbnail(anime.images.nodes.find(n => n.facet === 'SMALL_COVER')!.link)
        .setColor('Blue')
        .setURL(anime.siteUrl)
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
        const term = interaction.options.getString('search', true);

        const { search: { anime: { pageInfo, data } } } = await gql(SEARCH_ANIME_QUERY, { search: term });

        let index = 0;

        const animeEmbed = makeEmbed(data[index], index, pageInfo.first);

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
                index = pageInfo.first - 1;
            }

            if (i.customId === 'previous') {
                index--;

                if (index < 0) {
                    index = pageInfo.first - 1;
                }
            }

            if (i.customId === 'next') {
                index++;

                if (index >= pageInfo.first) {
                    index = 0;
                }
            }

            await i.update({
                embeds: [makeEmbed(data[index], index, pageInfo.first)],
                components: [previousNextRow],
            });
        });
    },
});

export default animeSlashCommand;
