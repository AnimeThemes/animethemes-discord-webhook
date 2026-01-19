import { AnimeTheme, AnimeThemeEntry, Artist, Membership, Performance, Video } from 'types/animethemes';
import { joinWithLastSeparator } from 'utils/functions';

import config from 'utils/config';

const isMembership = (artist: Artist | Membership): artist is Membership => {
    return 'group' in artist;
};

/**
 * Format Artists to a string.
 */
export const artistsDescription = (performances: Performance[]): string => {
    const artistsArray: string[] = [];

    let groups: string[] = [];
    for (const performance of performances) {
        let { artist, alias, as } = performance;

        // Resolve to Membership
        if (isMembership(artist)) {
            if (groups.includes(artist.group.name)) {
                continue;
            }

            artist = artist.group;

            groups.push(artist.name);
        }

        const resolvedAlias = alias && alias.length > 0 ? alias : artist.name;

        const finalName = as && as.length > 0 ? `${as} (CV: ${resolvedAlias})` : resolvedAlias;

        artistsArray.push(`[${finalName}](${config.ARTIST_URL}/${artist.slug})`);
    }

    return (
        `**Artist${artistsArray.length > 1 ? 's' : ''}:** ` + joinWithLastSeparator(artistsArray, ', ', ' & ') + '\n'
    );
};

/**
 * Format Video to a string.
 */
export const videoDescription = (video: Video): string => {
    let videoText: Array<string> = [];

    if (!video.animethemeentries) {
        return videoText.toString();
    }

    let entry = video.animethemeentries.nodes[0];
    let anime = entry.animetheme.anime;

    videoText.push(`**Resolution:** ${video.resolution}p`);
    videoText.push(`**Source:** ${video.sourceLocalized}`);
    videoText.push(`**Overlap:** ${video.overlapLocalized}`);
    videoText.push(video.tags.length === 0 ? '' : `**Tags:** ${video.tags}`);
    videoText.push(`**Link**: ${config.ANIME_URL}/${anime.slug}/${createVideoSlug(entry.animetheme, entry, video)}`);

    return videoText.filter(Boolean).join('\n');
};

/**
 * Slug format is:
 *
 * `<OP|ED><#>[v#][-<Group>][-<Tags>]`
 */
export const createVideoSlug = (theme: AnimeTheme, entry: AnimeThemeEntry, video: Video): string => {
    let type = theme.type as string;
    let slug = type + (theme.sequence || 1);

    if (entry.version && entry.version !== 1) {
        slug += `v${entry.version}`;
    }

    if (theme.group) {
        slug += `-${theme.group.slug}`;
    }

    if (video.tags.length > 0) {
        slug += `-${video.tags}`;
    }

    return slug;
};
