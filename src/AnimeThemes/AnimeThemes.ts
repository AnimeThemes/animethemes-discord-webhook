import { AnimeWithFilter, AnimeRequest, Anime, AnimeTheme, AnimeThemeEntry, Video } from "../structs/types/Anime";

import Config from "../config/config";
import axios from "axios";

/**
 * Class AnimeThemes
 * 
 * @method getAnimeByID Promise<Anime | null>
 * @method getAnimeByIDWithFilter Promise<Anime | null>
 * @method getVideoByID Promise<Anime | null>
 * @method getAllVideos Promise<AnimeRequest | null>
 */

export default class AnimeThemes {

    /**
     * Queries the AnimeThemes API by anime ID and returns the desired object.
     * 
     * @param animeID number
     * 
     * @returns Promise<Anime | null>
     */
    async getAnimeByID(animeID: number): Promise<Anime | null> {
        let response = await axios.get(`${Config.API_ANIMETHEMES}anime?filter[anime][id]=${animeID}&include=images,animesynonyms`);

        if (response.data.anime.length === 0) return null;

        let anime = response.data.anime[0] as AnimeRequest;

        return {
            id: anime.id,
            name: anime.name,
            slug: anime.slug,
            synopsis: anime.synopsis,
            year: anime.year,
            season: anime.season,
            synonyms: anime.animesynonyms?.map((synonym: { text: string }) => synonym.text),
            image: anime.images?.filter((image: { facet: string }) => image.facet === 'Large Cover')[0].link
        }
    }

    /**
     * Queries the AnimeThemes API by anime ID and filters by a videoID, returns the desired object.
     * 
     * @param animeID number
     * @param videoID number | undefined
     * 
     * @returns Promise<AnimeWithFilter | null> 
     */
    async getAnimeByIDWithFilter(animeID: number, videoID: number | undefined = undefined): Promise<AnimeWithFilter | null> {
        let response = await axios.get(`${Config.API_ANIMETHEMES}anime?filter[anime][id]=${animeID}&include=images,animethemes.song.artists,animethemes.animethemeentries.videos`);

        if (response.data.anime.length === 0) return null;

        let anime = response.data.anime[0] as AnimeRequest;

        let anithem = {
            animethemes: anime.animethemes.map((theme: AnimeTheme) => ({
                slug: theme.slug,
                song: {
                    title: theme.song.title,
                    artists: theme.song.artists
                },

                animethemeentries: theme.animethemeentries.map((entry: AnimeThemeEntry) => ({
                    version: entry.version,
                    episodes: entry.episodes,
                    spoiler: entry.spoiler,

                    videos: entry.videos.filter(video => !videoID || video.id === videoID).map((video: Video) => ({
                        resolution: video.resolution,
                        source: video.source,
                        overlap: video.overlap,
                        nc: video.nc,
                        tags: video.tags,
                        link: video.link
                    }))
                })).filter(entry => entry.videos.length !== 0)
            })).filter(theme => theme.animethemeentries.length !== 0)
        }
        
        return {
            id: anime.id,
            name: anime.name,
            image: anime.images?.filter((image: { facet: string }) => image.facet === 'Large Cover')[0].link,
            song: {
                title: anithem.animethemes[0].song.title,
                artists: anithem.animethemes[0].song.artists
            },
            theme_type: anithem.animethemes[0].slug,
            episodes: anithem.animethemes[0].animethemeentries[0].episodes,
            version: anithem.animethemes[0].animethemeentries[0].version,
            spoiler: anithem.animethemes[0].animethemeentries[0].spoiler,
            video: {
                resolution: anithem.animethemes[0].animethemeentries[0].videos[0].resolution,
                source: anithem.animethemes[0].animethemeentries[0].videos[0].source,
                overlap: anithem.animethemes[0].animethemeentries[0].videos[0].overlap,
                nc: anithem.animethemes[0].animethemeentries[0].videos[0].nc,
                tags: anithem.animethemes[0].animethemeentries[0].videos[0].tags,
                link: anithem.animethemes[0].animethemeentries[0].videos[0].link
            }
        }
    }

    /**
     * Queries the AnimeThemes API by video ID and returns the desired object.
     * 
     * @param videoID number
     * 
     * @returns Promise<AnimeWithFilter | null>
     */
    async getVideoByID(videoID: number): Promise<AnimeWithFilter | null> {
        let response = await axios.get(`${Config.API_ANIMETHEMES}video?filter[video][id]=${videoID}&include=animethemeentries.animetheme.anime`);

        if (response.data.videos.length === 0) return null;

        let video = response.data.videos[0];

        let animeID: number = video.animethemeentries[0].animetheme.anime.id;
        let info = await this.getAnimeByIDWithFilter(animeID, videoID);

        return info;
    }

    /**
     * Get all videos by anime ID.
     * 
     * @param animeID number
     * 
     * @returns Promise<AnimeRequest | null>
     */
    async getAllVideos(animeID: number): Promise<AnimeRequest | null> {
        let response = await axios.get(`${Config.API_ANIMETHEMES}anime?filter[anime][id]=${animeID}&include=animesynonyms,images,animethemes.song.artists,animethemes.animethemeentries.videos`);
        
        if (response.data.anime.length === 0) return null;

        let anime = response.data.anime[0] as AnimeRequest;

        return {
            id: anime.id,
            name: anime.name,
            slug: anime.slug,
            image: anime.images?.filter((image: { facet: string } ) => image.facet === 'Large Cover')[0].link,
            synopsis: anime.synopsis,
            synonyms: anime.animesynonyms?.map((synonym: { text: string }) => synonym.text),
            animethemes: anime.animethemes.map((theme: AnimeTheme) => ({
                slug: theme.slug,
                song: {
                    title: theme.song.title,
                    artists: theme.song.artists
                },

                animethemeentries: theme.animethemeentries.map((entry: AnimeThemeEntry) => ({
                    version: entry.version,
                    episodes: entry.episodes,
                    spoiler: entry.spoiler,

                    videos: entry.videos.map((video: Video) => ({
                        resolution: video.resolution,
                        tags: video.tags,
                        nc: video.nc,
                        overlap: video.overlap,
                        source: video.source,
                        link: video.link
                    }))
                }))
            }))
        }
    }
}