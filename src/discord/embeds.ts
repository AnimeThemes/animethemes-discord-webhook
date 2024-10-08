import { ColorResolvable, EmbedBuilder } from 'discord.js';
import { artistsDescription, videoDescription } from 'animethemes/description';
import { Anime, ArtistWithArtistSong, Video } from 'types/animethemes';
import { TrelloEmbedConfig } from 'types/trello';

import config from 'utils/config';

/**
 * Create the anime embed.
 */
export const createAnimeEmbed = (anime: Anime): EmbedBuilder => {
    const description = `**Synopsis:** ${anime.synopsis?.replace(/<br>/g, '')}\n\n**Link:** ${config.ANIME_URL + '/' + anime.slug}`;

    return new EmbedBuilder()
        .setTitle(anime.name)
        .setColor([154, 0, 255])
        .setDescription(description);
}

/**
 * Create an embed of a video using anime information.
 */
export const createVideoEmbedByAnime = (video: Video, type: 'added' | 'updated'): EmbedBuilder => {
    const embedColor: ColorResolvable | null = type === 'added' ? [46, 204, 113] : [255, 255, 0];
    let initialDescription = type === 'added' ? `New video has been added.\n\n` : `A video has been updated.\n\n`;

    if (!video.animethemeentries) {
        return new EmbedBuilder();
    }

    let entry = video.animethemeentries[0];
    let theme = entry.animetheme;
    let anime = theme.anime;

    if (theme.song && theme.song.artists && theme.song.artists.length !== 0) {
        initialDescription += artistsDescription(theme.song.artists as Array<ArtistWithArtistSong>) + '\n';
    }

    initialDescription += entry.spoiler ? '⚠️ Spoiler\n' : '';
    initialDescription += entry.nsfw ? '🔞 NSFW\n' : '';
    initialDescription += `**Episodes:** ${entry.episodes === null || entry.episodes.length === 0 ? '-' : entry.episodes}\n`;
    initialDescription += videoDescription(video);

    return new EmbedBuilder()
        .setColor(embedColor)
        .setTitle(`${theme.type + (theme.sequence || 1)}${entry.version === null ? '' : `v${entry.version}`}${theme.group === null ? '' : `-${theme.group?.slug}`}${theme.song?.title ?? '*T.B.A.*'}`)
        .setDescription(initialDescription)
        .setThumbnail(anime.images?.find(image => image.facet === 'Small Cover')?.link as string);
}

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
}