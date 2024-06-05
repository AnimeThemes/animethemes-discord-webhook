import { FeaturedTheme, Video } from 'types/anime';
import { createVideoSlug } from 'animethemes/description';

import axios from 'lib/axios';

/**
 * Get the featured theme.
 *
 * @return {Promise<Record<string, string> | null>}
 */
export const getFeaturedTheme = async (): Promise<Record<string, string> | null> => {
    try {
        let response = (await axios.get(`/current/featuredtheme?include=animethemeentry.animetheme.anime,animethemeentry.animetheme.group,video`)).data;

        if (response.hasOwnProperty('featuredtheme')) {
            let featuredTheme = response.featuredtheme as FeaturedTheme;
            let video = featuredTheme.video;
            let entry = featuredTheme.animethemeentry;
            let theme = entry.animetheme;

            return {
                anime: theme.anime.name as string,
                theme: createVideoSlug(theme, entry, video as Video),
            };
        }

        return null;
    } catch (err) {
        console.error(err);
        return null;
    }
}