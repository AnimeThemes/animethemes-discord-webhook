import { CurrentFeaturedTheme } from 'types/animethemes';
import { createVideoSlug } from 'animethemes/description';

import axios from 'lib/axios';

/**
 * Get the current featured theme.
 */
export const getFeaturedTheme = async (): Promise<Record<string, string> | null> => {
    try {
        let featuredtheme = (await axios.post('/', {
            'query': currentFeaturedThemeQuery,
        })).data.data.currentfeaturedtheme as CurrentFeaturedTheme;

        if (featuredtheme !== null) {
            let video = featuredtheme.video;
            let entry = featuredtheme.animethemeentry;
            let theme = entry.animetheme;

            return {
                anime: theme.anime.name,
                // @ts-ignore
                theme: createVideoSlug(theme, entry, video),
            };
        }

        return null;
    } catch (err) {
        console.error(err);
        return null;
    }
}

const currentFeaturedThemeQuery = `
query {
    currentfeaturedtheme {
        animethemeentry {
            animetheme {
                anime {
                    name
                }
                group {
                    slug
                }
                type
            }
            version
        }
        video {
            tags
        }
    }
}
`;