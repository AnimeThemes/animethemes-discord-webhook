import { AnimeWithFilter, Anime, AnimeTheme, AnimeThemeEntry, Video, AnimeRequestByID, AnimeRequestByVideoID, FeatureTheme } from 'structs/types/Anime';

import axios from 'lib/axios';

export default class AnimeThemes {

    /**
     * Queries the AnimeThemes API by anime ID and returns the desired object.
     *
     * @param  {number}  animeID
     * @return {Promise<Anime | null>}
     */
    async getAnimeByID(animeID: number): Promise<Anime | null> {
        try {
            let response = await axios.get(`/anime?filter[anime][id]=${animeID}&include=images,animesynonyms&fields[anime]=name,slug,season,synopsis`);

            if (response.data.anime.length === 0) return null;
    
            let anime = response.data.anime[0] as AnimeRequestByID;
    
            return {
                name: anime.name,
                slug: anime.slug,
                season: anime.season,
                synopsis: anime.synopsis,
                synonyms: anime.animesynonyms.map(synonym => synonym?.text),
                imageURL: anime.images.filter(image => image?.facet === 'Large Cover')[0].link,
            };
        } catch (err) {
            console.error(err);
            return null;
        }
    }

    /**
     * Queries the AnimeThemes API by anime ID and filters by a videoID, returns the desired object.
     *
     * @param  {number}  animeID
     * @param  {number | undefined}  videoID
     * @return {Promise<AnimeWithFilter | null>}
     */
    async getAnimeByIDWithFilter(animeID: number, videoID: number | undefined = undefined): Promise<AnimeWithFilter | null> {
        try {
            let response = await axios.get(`/anime?filter[anime][id]=${animeID}&include=images,animethemes.song.artists,animethemes.animethemeentries.videos&fields[anime]=name,slug`);

            if (response.data.anime.length === 0) return null;
    
            let anime = response.data.anime[0] as AnimeRequestByVideoID;
    
            let anithem = {
                animethemes: anime.animethemes.map((theme: AnimeTheme) => ({
                    slug: theme.slug,
                    song: {
                        title: theme.song === null ? null : theme.song.title,
                        artists: theme.song === null ? [] : theme.song.artists,
                    },
                    animethemeentries: theme.animethemeentries.map((entry: AnimeThemeEntry) => ({
                        version: entry.version,
                        episodes: entry.episodes,
                        spoiler: entry.spoiler,
                        nsfw: entry.nsfw,
                        videos: entry.videos.filter(video => !videoID || video.id === videoID).map((video: Video) => ({
                            resolution: video.resolution,
                            source: video.source,
                            overlap: video.overlap,
                            nc: video.nc,
                            tags: video.tags,
                            link: video.link,
                        }))
                    })).filter(entry => entry.videos.length !== 0)
                })).filter(theme => theme.animethemeentries.length !== 0),
            };
            
            return {
                name: anime.name,
                slug: anime.slug,
                imageURL: anime.images?.filter(image => image.facet === 'Large Cover')[0].link,
                song: {
                    title: anithem.animethemes[0].song.title,
                    artists: anithem.animethemes[0].song.artists,
                },
                themeSlug: anithem.animethemes[0].slug,
                episodes: anithem.animethemes[0].animethemeentries[0].episodes,
                version: anithem.animethemes[0].animethemeentries[0].version,
                spoiler: anithem.animethemes[0].animethemeentries[0].spoiler,
                nsfw: anithem.animethemes[0].animethemeentries[0].nsfw,
                video: {
                    resolution: anithem.animethemes[0].animethemeentries[0].videos[0].resolution,
                    source: anithem.animethemes[0].animethemeentries[0].videos[0].source,
                    overlap: anithem.animethemes[0].animethemeentries[0].videos[0].overlap,
                    nc: anithem.animethemes[0].animethemeentries[0].videos[0].nc,
                    tags: anithem.animethemes[0].animethemeentries[0].videos[0].tags,
                    link: anithem.animethemes[0].animethemeentries[0].videos[0].link,
                },
            };
        } catch (err) {
            console.error(err);
            return null;
        }
    }

    /**
     * Queries the AnimeThemes API by video ID and returns the desired object.
     *
     * @param  {number}  videoID
     * @return {Promise<AnimeWithFilter | null>}
     */
    async getVideoByID(videoID: number): Promise<AnimeWithFilter | null> {
        try {
            let response = await axios.get(`/video?filter[video][id]=${videoID}&include=animethemeentries.animetheme.anime`);

            if (response.data.videos.length === 0) return null;
    
            let video = response.data.videos[0];
    
            let animeID: number = video.animethemeentries[0].animetheme.anime.id;
            let info = await this.getAnimeByIDWithFilter(animeID, videoID);
    
            return info;
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
    async getFeaturedTheme(): Promise<Record<string, string> | null> {
        try {
            let response = (await axios.get(`/current/featuredtheme?include=animethemeentry.animetheme.anime,video`)).data;

            if (response.hasOwnProperty('featuredtheme')) {
                let featuredTheme = response.featuredtheme as FeatureTheme;
    
                return {
                    anime: featuredTheme.animethemeentry.animetheme.anime.name,
                    theme: `${featuredTheme.animethemeentry.animetheme.slug}${featuredTheme.animethemeentry.version === null ? '' : `v${featuredTheme.animethemeentry.version}`}`,
                    link: featuredTheme.video.link,
                };
            }
    
            return null;
        } catch (err) {
            console.error(err);
            return null;
        }
    }
}