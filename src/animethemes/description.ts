import { AnimeTheme, ArtistWithArtistSong, Video } from 'types/animethemes';
import { joinWithLastSeparator } from 'utils/functions';

import config from 'utils/config';

/**
 * Format Artists to a string.
 */
export const artistsDescription = (artists: Array<ArtistWithArtistSong>): string => {
    let artistsArray = [];

    for (let artist of artists) {
        let pivot = artist.artistsong;

        let alias = pivot.alias !== null && pivot.alias.length !== 0 ? pivot.alias : artist.name;
        let name = pivot.as !== null && pivot.as.length !== 0 ? `${pivot.as} (CV: ${alias})` : alias;

        artistsArray.push(`[${name}](${config.ARTIST_URL + '/' + artist.slug})`);
    }

    return `**Artist${artistsArray.length > 1 ? 's' : ''}:** ` + joinWithLastSeparator(artistsArray, ', ', ' & ')  + '\n';
}

/**
 * Format Video to a string.
 */
export const videoDescription = (video: Video): string => {
    let videoText: Array<string> = [];

    if (!video.animethemeentries) {
        return videoText.toString();
    }

    let anime = video.animethemeentries[0].animetheme.anime;

    videoText.push(`**Resolution:** ${video.resolution}p`);
    videoText.push(`**Source:** ${video.source}`);
    videoText.push(`**Overlap:** ${video.overlap}${video.tags.length === 0 ? '' : `\n**Tags:** ${typeof video.tags == 'string' ? video.tags : video.tags.join('')}`}`);
    videoText.push(`**Link**: ${config.ANIME_URL}/${anime.slug}/${createVideoSlug(video.animethemeentries[0].animetheme, video.animethemeentries[0], video)}`);

    return videoText.join('\n');
}

/**
 * Slug format is:
 *
 * `<OP|ED><#>[v#][-<Group>][-<Tags>]`
 */
export const createVideoSlug = (theme: AnimeTheme, entry: Record<string, any>, video: Video): string => {
    let type = theme.type as string;
    let slug = type + (theme.sequence || 1);

    if (entry.version && entry.version !== 1) {
        slug += `v${entry.version}`;
    }

    if (theme.group) {
        slug += `-${theme.group?.slug}`;
    }

    if (video.tags.length > 0) {
        slug += `-${video.tags}`;
    }

    return slug;
}