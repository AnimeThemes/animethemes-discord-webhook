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

    const groups: string[] = [];
    for (const performance of performances) {
        const { alias, as } = performance;
        let { artist } = performance;

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
 * Slug format is:
 *
 * `<OP|ED><#>[v#][-<Group>][-<Tags>]`
 */
export const createVideoSlug = (theme: AnimeTheme, entry: AnimeThemeEntry, video: Video): string => {
    const type = theme.type as string;
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
