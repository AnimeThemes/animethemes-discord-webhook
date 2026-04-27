import { EmbedBuilder } from 'discord.js';
import { artistsDescription, createThemeSlug, createVideoSlug } from 'utils/description';
import { TrelloEmbedConfig } from 'types/trello';

import config from 'utils/config';
import { graphql } from 'graphql/generated';
import { ResultOf } from '@graphql-typed-document-node/core';
import { VideoOverlap } from 'graphql/generated/graphql';

export const VIDEO_NOTIFICATION_EMBED = graphql(`
    fragment VideoEmbed on Video {
        ...createVideoSlugVideo
        overlap
        overlapLocalized
        resolution
        sourceLocalized
        tags
        animethemeentries {
            nodes {
                ...createVideoSlugEntry
                episodes
                notes
                nsfw
                spoiler
                animetheme {
                    ...createVideoSlugTheme
                    anime {
                        name
                        slug
                        images {
                            nodes {
                                link
                            }
                        }
                    }
                    song {
                        title
                        performances {
                            ...ArtistDescriptionFragmentPerformance
                        }
                    }
                }
            }
        }
    }
`);

/**
 * Create an embed of a video using anime information.
 */
export const createVideoNotificationEmbed = (
    video: ResultOf<typeof VIDEO_NOTIFICATION_EMBED>,
    type: 'added' | 'updated',
): EmbedBuilder => {
    const embed = new EmbedBuilder();

    if (!video) {
        return embed;
    }

    const description: string[] = [];

    const entry = video.animethemeentries.nodes[0];
    const theme = entry.animetheme;
    const anime = theme.anime;

    const themeSlug = createThemeSlug(theme, entry);
    const videoSlug = createVideoSlug(theme, entry, video);
    const videoSlugLink = `[${themeSlug}](${config.ANIME_URL}/${anime.slug}/${videoSlug})`;

    const performances =
        theme.song?.performances && theme.song.performances.length !== 0
            ? ' by ' + artistsDescription(theme.song.performances)
            : '';

    description.push(type === 'added' ? `${videoSlugLink} has been added.\n` : `${videoSlugLink} has been updated.\n`);
    description.push(entry.spoiler ? '⚠️ Spoiler' : '');
    description.push(entry.nsfw ? '🔞 NSFW' : '');
    description.push(`**Song:** ${theme.song?.title ?? '*T.B.A.*'}${performances}\n`);

    if (entry.episodes) {
        description.push(`**Episodes:** ${entry.episodes}`);
    }

    description.push(`**Resolution:** ${video.resolution}p`);

    if (video.overlap !== VideoOverlap.None) {
        description.push(`**Overlap:** ${video.overlapLocalized}`);
    }

    if (entry.notes) {
        description.push(`\n**Notes:** ${entry.notes}`);
    }

    embed
        .setColor(type === 'added' ? [46, 204, 113] : [255, 255, 0])
        .setTitle(anime.name)
        .setDescription(description.filter(Boolean).join('\n'))
        .setURL(`${config.ANIME_URL}/${anime.slug}`)
        .setThumbnail(anime.images.nodes[0].link);

    if (video.tags && video.tags.length > 0) {
        embed.setFooter({
            text: video.tags,
        });
    }

    return embed;
};

/**
 * Create the trello embed.
 */
export const createTrelloEmbed = (config: TrelloEmbedConfig): EmbedBuilder => {
    const embed = new EmbedBuilder()
        .setTitle(config.actionTitle)
        .setAuthor({
            name: config.boardName,
            url: config.boardUrl,
            iconURL: 'https://animethemes.moe/apple-touch-icon.png',
        })
        .setFooter({
            text: config.actionUserName,
            iconURL: config.actionUserImageUrl,
        });

    if (config.actionDescription) {
        embed.setDescription(config.actionDescription);
    }

    if (config.imageUrl) {
        embed.setThumbnail(config.imageUrl);
    }

    if (config.color) {
        embed.setColor(config.color);
    }

    return embed;
};
