import { Anime, AnimeTheme, AnimeThemeEntry, Video } from "../structs/types/Anime";

import * as dotenv from "dotenv";

import axios from "axios";

dotenv.config();

/**
 * Class AnimeThemes
 * 
 * @method getByAnimeID Promise<Anime | null>
 * @method getByVideoID Promise<Anime | null>
 */

class AnimeThemes {

    private readonly default_url: string = process.env.API_ANIMETHEMES;

    /**
     * Queries the AnimeThemes API by anime ID and returns the desired object.
     * 
     * @param animeID number
     * @param videoID number | undefined
     * 
     * @returns Promise<Anime | null> 
     */
    async getByAnimeID(animeID: number, videoID: number | undefined = undefined): Promise<Anime | null> {
        let response = await axios.get(`${this.default_url}/anime?filter[anime][id]=${animeID}&include=images,animethemes.song.artists,animethemes.animethemeentries.videos`);

        if (response.data.anime.length === 0) return null;

        let anime = response.data.anime[0] as Anime;

        return {
            id: anime.id,
            name: anime.name,
            slug: anime.slug,
            images: anime.images,
            animethemes: anime.animethemes.map((theme: AnimeTheme) => ({
                slug: theme.slug,
                song: {
                    title: theme.song.title,
                    artists: theme.song.artists
                },

                animethemeentries: theme.animethemeentries.map((entry: AnimeThemeEntry) => ({
                    version: entry.version,
                    episodes: entry.episodes,

                    videos: entry.videos.filter(video => !videoID || video.id === videoID).map((video: Video) => ({
                        resolution: video.resolution,
                        tags: video.tags,
                        link: video.link
                    }))
                })).filter(entry => entry.videos.length !== 0)
            })).filter(theme => theme.animethemeentries.length !== 0)
        }
    }

    /**
     * Queries the AnimeThemes API by video ID and returns the desired object.
     * 
     * @param videoID number
     * 
     * @returns Promise<Anime | null>
     */
    async getByVideoID(videoID: number): Promise<Anime | null> {
        let response = await axios.get(`${this.default_url}/video?filter[video][id]=${videoID}&include=animethemeentries.animetheme.anime`);

        if (response.data.videos.length === 0) return null;

        let video = response.data.videos[0];

        let animeID: number = video.animethemeentries[0].animetheme.anime.id;
        let info = await this.getByAnimeID(animeID, videoID);

        return info;
    }
}

export default AnimeThemes;