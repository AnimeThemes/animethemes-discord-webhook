import { ColorResolvable, EmbedBuilder } from 'discord.js';
import { artistsDescription, videoDescription } from 'animethemes/description';
import { Anime, AnimeWithFilter } from 'types/anime';
import { TrelloEmbedConfig } from 'types/trello';

import config from 'utils/config';

/**
 * Create the anime embed.
 *
 * @param  {Anime}  animeInfo
 * @return {EmbedBuilder}
 */
export function createAnimeEmbed(animeInfo: Anime): EmbedBuilder {
    const description = `**Synopsis:** ${animeInfo.synopsis?.replace(/<br>/g, '')}\n\n**Link:** ${config.ANIME_URL + '/' + animeInfo.slug}`;

    return new EmbedBuilder()
        .setTitle(animeInfo.name)
        .setColor([154, 0, 255])
        .setDescription(description);
}

/**
 * Create an embed of a video using anime information.
 *
 * @param  {AnimeWithFilter}  anime
 * @param  {'added' | 'updated'}  type
 * @return {EmbedBuilder}
 */
export function createVideoEmbedByAnime(anime: AnimeWithFilter, type: 'added' | 'updated'): EmbedBuilder {
    const embedColor: ColorResolvable | null = type === 'added' ? [46, 204, 113] : [255, 255, 0];
    let initialDescription = type === 'added' ? `New video has been added.\n\n` : `A video has been updated.\n\n`;

    if (anime.song.artists.length !== 0) {
        initialDescription += artistsDescription(anime.song.artists) + '\n';
    }
    
    initialDescription += anime.spoiler ? '⚠️ Spoiler\n' : '';
    initialDescription += anime.nsfw ? '🔞 NSFW\n' : '';
    initialDescription += `**Episodes:** ${anime?.episodes === null || anime?.episodes.length === 0 ? '-' : anime?.episodes}\n`;
    initialDescription += videoDescription(anime);

    let theme = anime?.theme;

    return new EmbedBuilder()
        .setColor(embedColor)
        .setTitle(`${theme.type + (theme.sequence || 1)}${anime?.version === null ? '' : `v${anime?.version}`}${theme.group.slug === null ? '' : `-${theme.group.slug}`}${anime.song.title === null ? '*T.B.A.*' : ` - ${anime.song.title}`}`)
        .setDescription(initialDescription)
        .setThumbnail(anime.imageURL as string);
}

/**
 * Create the trello embed.
 *
 * @param {TrelloEmbedConfig} config
 * @returns {EmbedBuilder}
 */
export function createTrelloEmbed(config: TrelloEmbedConfig): EmbedBuilder {
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