import { AnimeWithFilter, Artist, Video } from 'types/anime';

import config from 'utils/config';

/**
 * Format Artists to a string.
 *
 * @param  {Artist[]}  artists  
 * @return {string}
 */
export function artistsDescription(artists: Artist[]): string {
    let addArtists = '**Artists:** ';

    for (let artist of artists) {
        addArtists += `[${artist.artistsong.as === null ? artist.name : `${artist.artistsong.as} (CV: ${artist.name})`}](${config.ARTIST_URL + '/' + artist.slug}), `;
    }

    return addArtists.replace(/,\s$/, '\n').replace(/,\s*([^,]*)$/, ' & $1');
}

/**
 * Format Video to a string.
 *
 * @param  {AnimeWithFilter}  anime
 * @return {string}
 */
export function videoDescription(anime: AnimeWithFilter): string {
    const video = anime.video as Video;
    let string = `**Resolution:** ${video.resolution}p\n`;
        string += `**Source:** ${video.source}\n`;
        string += `**Overlap:** ${video.overlap}${video.tags.length === 0 ? '' : `\n**Tags:** ${video.tags}`}\n`;
        string += `**Link**: ${config.ANIME_URL}/${anime.slug}/${createVideoSlug(anime)}`;

    return string;
}

/**
 * Slug format is:
 *
 * `<OP|ED><#>[v#][-<Group>][-<Tags>]`
 * 
 * @param  {AnimeWithFilter}  anime
 * @returns {string}
 */
export function createVideoSlug(anime: AnimeWithFilter): string {
    let slug = anime.theme.type + (anime.theme.sequence || 1);

    if (anime.version && anime.version !== 1) {
        slug += `v${anime.version}`;
    }

    if (anime.theme.group) {
        slug += `-${anime.theme.group.slug}`;
    }

    if (anime.video.tags) {
        slug += `-${anime.video.tags}`;
    }

    return slug;
}