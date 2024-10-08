import { AnimeTheme, AnimeThemeEntry, CurrentFeaturedTheme, Video } from 'types/animethemes';
import { createVideoSlug } from 'animethemes/description';

import axios from 'lib/axios';

/**
 * Get the current featured theme.
 */
export const getFeaturedTheme = async (): Promise<Record<string, string> | null> => {
    try {
        let response = (await axios.get(`/current/featuredtheme?include=animethemeentry.animetheme.anime,animethemeentry.animetheme.group,video`)).data;

        if (response.hasOwnProperty('featuredtheme')) {
            let featuredTheme = response.featuredtheme as CurrentFeaturedTheme;
            let video = featuredTheme.video;
            let entry = featuredTheme.animethemeentry;
            let theme = entry?.animetheme;

            return {
                anime: theme?.anime.name as string,
                theme: createVideoSlug(theme as AnimeTheme, entry as AnimeThemeEntry, video as Video),
            };
        }

        return null;
    } catch (err) {
        console.error(err);
        return null;
    }
}