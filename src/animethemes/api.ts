import { Anime, FeaturedTheme, Video } from 'types/anime';

import axios from 'lib/axios';

/**
 * Queries the AnimeThemes API by anime ID and returns the desired object.
 *
 * @param  {number}  animeID
 * @return {Promise<Anime | null>}
 */
export async function getAnimeByID(animeID: number): Promise<Anime | null> {
    try {
        let response = await axios.get(`/anime?filter[anime][id]=${animeID}&include=images,animesynonyms&fields[anime]=name,slug,season,synopsis`);

        if (response.data.anime.length === 0) return null;

        let anime = response.data.anime[0];

        return anime as Anime;
    } catch (err) {
        console.error(err);
        return null;
    }
}

/**
 * Queries the AnimeThemes API by video ID and returns the desired object.
 *
 * @param  {number}  videoID
 * @return {Promise<Video | null>}
 */
export async function getVideo(videoID: number): Promise<Video | null> {
    try {
        let response = await axios.get(`/video?filter[video][id]=${videoID}&include=animethemeentries.animetheme.anime.images,animethemeentries.animetheme.song.artists,animethemeentries.animetheme.group`);

        if (response.data.videos.length === 0) return null;

        let video = response.data.videos[0] as Video;

        return video;
    } catch (err) {
        console.error(err);
        return null;
    }
}

/**
 * Get the featured theme.
 *
 * @return {Promise<Record<string, string> | null>}
 */
export async function getFeaturedTheme(): Promise<Record<string, string> | null> {
    try {
        let response = (await axios.get(`/current/featuredtheme?include=animethemeentry.animetheme.anime,animethemeentry.animetheme.group,video`)).data;

        if (response.hasOwnProperty('featuredtheme')) {
            let featuredTheme = response.featuredtheme as FeaturedTheme;
            let video = featuredTheme.video;
            let entry = featuredTheme.animethemeentry;
            let theme = entry.animetheme;

            return {
                anime: theme.anime.name,
                theme: `${theme.type + (theme.sequence || 1)}${entry.version === null ? '' : `v${entry.version}`}${theme.group === null ? '' : `-${theme.group.slug}`}${video.tags === null || video.tags.length === 0 ? '' : `-${video.tags}`}`,
            };
        }

        return null;
    } catch (err) {
        console.error(err);
        return null;
    }
}