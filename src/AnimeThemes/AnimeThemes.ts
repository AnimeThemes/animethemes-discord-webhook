import { AnimeWithFilter, Anime, AnimeTheme, AnimeThemeEntry, Video, AnimeRequestByID, AnimeRequestByVideoID, FeatureTheme } from 'structs/types/Anime';

import Config from 'config/Config';
import axios from 'axios';

export default class AnimeThemes {

    /**
     * Queries the AnimeThemes API by anime ID and returns the desired object.
     * 
     * @param  {number}  animeID
     * @returns {Promise<Anime | null>}
     */
    async getAnimeByID(animeID: number): Promise<Anime | null> {
        let response = await axios.get(`${Config.API_ANIMETHEMES}/anime?filter[anime][id]=${animeID}&include=images,animesynonyms&fields[anime]=name,slug,season,synopsis`);

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
    }

    /**
     * Queries the AnimeThemes API by anime ID and filters by a videoID, returns the desired object.
     * 
     * @param  {number}  animeID
     * @param  {number | undefined}  videoID
     * @returns {Promise<AnimeWithFilter | null>}
     */
    async getAnimeByIDWithFilter(animeID: number, videoID: number | undefined = undefined): Promise<AnimeWithFilter | null> {
        let response = await axios.get(`${Config.API_ANIMETHEMES}/anime?filter[anime][id]=${animeID}&include=images,animethemes.song.artists,animethemes.animethemeentries.videos&fields[anime]=name,slug`);

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
    }

    /**
     * Queries the AnimeThemes API by video ID and returns the desired object.
     * 
     * @param  {number}  videoID
     * @returns {Promise<AnimeWithFilter | null>}
     */
    async getVideoByID(videoID: number): Promise<AnimeWithFilter | null> {
        let response = await axios.get(`${Config.API_ANIMETHEMES}/video?filter[video][id]=${videoID}&include=animethemeentries.animetheme.anime`);

        if (response.data.videos.length === 0) return null;

        let video = response.data.videos[0];

        let animeID: number = video.animethemeentries[0].animetheme.anime.id;
        let info = await this.getAnimeByIDWithFilter(animeID, videoID);

        return info;
    }

    /**
     * Get the featured theme.
     * 
     * @returns {Promise<Record<string, string>>}
     */
    async getFeaturedTheme(): Promise<Record<string, string>> {
        let response = await axios.get(`${Config.API_ANIMETHEMES}/current/featuredtheme?include=animethemeentry.animetheme.anime,video`);
        let featuredTheme = response.data.featuredtheme as FeatureTheme;

        return {
            anime: featuredTheme.animethemeentry.animetheme.anime.name,
            theme: `${featuredTheme.animethemeentry.animetheme.slug}${featuredTheme.animethemeentry.version === null ? '' : `v${featuredTheme.animethemeentry.version}`}`,
            link: featuredTheme.video.link,
        };
    }
}