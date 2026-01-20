import { ColorResolvable, EmbedBuilder } from 'discord.js';
import { artistsDescription, createVideoSlug } from 'utils/description';
import { AnimeThread, Video } from 'types/animethemes';
import { TrelloEmbedConfig } from 'types/trello';

import config from 'utils/config';

/**
 * Create the anime embed.
 */
export const createAnimeEmbed = (anime: AnimeThread): EmbedBuilder => {
    const description = `**Synopsis:** ${anime.synopsis?.replace(/<br>/g, '')}\n\n**Link:** ${config.ANIME_URL + '/' + anime.slug}`;

    return new EmbedBuilder().setTitle(anime.name).setColor([154, 0, 255]).setDescription(description);
};

/**
 * Create an embed of a video using anime information.
 */
export const createVideoEmbedByAnime = (video: Video, type: 'added' | 'updated'): EmbedBuilder => {
    const embedColor: ColorResolvable | null = type === 'added' ? [46, 204, 113] : [255, 255, 0];
    const description: string[] = [];

    description.push(type === 'added' ? `New video has been added.\n` : `A video has been updated.\n`);

    if (!video.animethemeentries) {
        return new EmbedBuilder();
    }

    const entry = video.animethemeentries.nodes[0];
    const theme = entry.animetheme;
    const anime = theme.anime;

    if (theme.song?.performances && theme.song.performances.length !== 0) {
        description.push(artistsDescription(theme.song.performances));
    }

    description.push(entry.spoiler ? '⚠️ Spoiler' : '');
    description.push(entry.nsfw ? '🔞 NSFW' : '');
    description.push(`**Episodes:** ${entry.episodes ?? '-'}`);
    description.push(`**Resolution:** ${video.resolution}p`);
    description.push(`**Source:** ${video.sourceLocalized}`);
    description.push(`**Overlap:** ${video.overlapLocalized}`);
    description.push(video.tags.length === 0 ? '' : `**Tags:** ${video.tags}`);
    description.push(`**Link**: ${config.ANIME_URL}/${anime.slug}/${createVideoSlug(entry.animetheme, entry, video)}`);

    return new EmbedBuilder()
        .setColor(embedColor)
        .setTitle(createVideoSlug(theme, entry, video) + ` - ${theme.song?.title ?? '*T.B.A.*'}`)
        .setDescription(description.filter(Boolean).join('\n'))
        .setThumbnail(anime.images.nodes[0].link);
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
