import { joinWithLastSeparator } from 'utils/functions';

import config from 'utils/config';
import { graphql } from 'graphql/generated';
import { ResultOf } from '@graphql-typed-document-node/core';

export const ARTIST_DESCRIPTION_PERFORMANCE = graphql(`
    fragment ArtistDescriptionFragmentPerformance on Performance {
        alias
        as
        artist {
            name
            slug
        }
        member {
            id
        }
    }
`);

/**
 * Format Artists to a string.
 */
export const artistsDescription = (performances: ResultOf<typeof ARTIST_DESCRIPTION_PERFORMANCE>[]): string => {
    const artistsArray: string[] = [];

    const groups: string[] = [];
    for (const performance of performances) {
        const { alias, as, artist, member } = performance;

        if (member !== null) {
            if (groups.includes(artist.slug)) {
                continue;
            }

            groups.push(artist.slug);
        }

        const resolvedAlias = alias && alias.length > 0 ? alias : artist.name;

        const finalName = as && as.length > 0 ? `${as} (CV: ${resolvedAlias})` : resolvedAlias;

        artistsArray.push(`[${finalName}](${config.ARTIST_URL}/${artist.slug})`);
    }

    return (
        `**Artist${artistsArray.length > 1 ? 's' : ''}:** ` + joinWithLastSeparator(artistsArray, ', ', ' & ') + '\n'
    );
};

export const CREATE_VIDEO_SLUG_THEME = graphql(`
    fragment createVideoSlugTheme on AnimeTheme {
        typeLocalized
        sequence
        group {
            slug
        }
    }
`);

export const CREATE_VIDEO_SLUG_ENTRY = graphql(`
    fragment createVideoSlugEntry on AnimeThemeEntry {
        version
    }
`);

export const CREATE_VIDEO_SLUG_VIDEO = graphql(`
    fragment createVideoSlugVideo on Video {
        tags
    }
`);

/**
 * Slug format is:
 *
 * `<OP|ED><#>[v#][-<Group>][-<Tags>]`
 */
export const createVideoSlug = (
    theme: ResultOf<typeof CREATE_VIDEO_SLUG_THEME>,
    entry: ResultOf<typeof CREATE_VIDEO_SLUG_ENTRY>,
    video: ResultOf<typeof CREATE_VIDEO_SLUG_VIDEO>,
): string => {
    const type = theme.typeLocalized;

    let slug = type + (theme.sequence || 1);

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
};
