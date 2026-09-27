import { joinWithLastSeparator } from 'utils/functions';

import { graphql } from 'graphql/generated';
import { ResultOf } from '@graphql-typed-document-node/core';

export const ARTIST_DESCRIPTION_SONG_STAFF = graphql(`
    fragment ArtistDescriptionFragmentSongStaff on SongStaff {
        alias
        as
        artist {
            id
            name {
                main
            }
            siteUrl
        }
        member {
            id
        }
        role
    }
`);

/**
 * Format Artists to a string.
 */
export const artistsDescription = (staffs: ResultOf<typeof ARTIST_DESCRIPTION_SONG_STAFF>[], role: string): string => {
    const artistsArray: string[] = [];

    const groups: number[] = [];
    for (const staff of staffs.filter(staff => staff.role === role)) {
        const { alias, as, artist, member } = staff;

        if (member !== null) {
            if (groups.includes(artist.id)) {
                continue;
            }

            groups.push(artist.id);
        }

        const resolvedAlias = alias && alias.length > 0 ? alias : artist.name.main;

        const finalName = as && as.length > 0 ? `${as} (CV: ${resolvedAlias})` : resolvedAlias;

        artistsArray.push(`[${finalName}](${artist.siteUrl})`);
    }

    return joinWithLastSeparator(artistsArray, ', ', ' & ');
};

export const CREATE_VIDEO_SLUG_THEME = graphql(`
    fragment createVideoSlugTheme on Theme {
        typeLocalized
        sequence
        group {
            slug
        }
    }
`);

export const CREATE_VIDEO_SLUG_ENTRY = graphql(`
    fragment createVideoSlugEntry on Entry {
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

export const createThemeSlug = (
    theme: ResultOf<typeof CREATE_VIDEO_SLUG_THEME>,
    entry: ResultOf<typeof CREATE_VIDEO_SLUG_ENTRY>,
): string => {
    const type = theme.typeLocalized;

    let slug = type + (theme.sequence || 1);

    if (entry.version && entry.version !== 1) {
        slug += `v${entry.version}`;
    }

    if (theme.group) {
        slug += `-${theme.group.slug}`;
    }

    return slug;
};
