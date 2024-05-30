import { AnimeTheme, Artist, Video } from 'types/anime';

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
 * @param  {Video}  video
 * @return {string}
 */
export function videoDescription(video: Video): string {
    let anime = video.animethemeentries[0].animetheme.anime;
    let string = `**Resolution:** ${video.resolution}p\n`;
        string += `**Source:** ${video.source}\n`;
        string += `**Overlap:** ${video.overlap}${video.tags.length === 0 ? '' : `\n**Tags:** ${video.tags}`}\n`;
        string += `**Link**: ${config.ANIME_URL}/${anime.slug}/${createVideoSlug(video.animethemeentries[0].animetheme, video.animethemeentries[0], video)}`;

    return string;
}

/**
 * Slug format is:
 *
 * `<OP|ED><#>[v#][-<Group>][-<Tags>]`
 *
 * @param  {AnimeTheme}  theme
 * @param  {Record<string, any>}  entry
 * @param  {Video}  video
 * @returns {string}
 */
export function createVideoSlug(theme: AnimeTheme, entry: Record<string, any>, video: Video): string {
    let slug = theme.type + (theme.sequence || 1);

    if (entry.version && entry.version !== 1) {
        slug += `v${entry.version}`;
    }

    if (theme.group) {
        slug += `-${theme.group.slug}`;
    }

    if (video.tags) {
        slug += `-${video.tags}`;
    }

    return slug;
}