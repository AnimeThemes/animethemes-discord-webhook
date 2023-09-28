import { AnimeRequest, Anime, AnimeWithFilter } from "../structs/types/Anime";
import { ColorResolvable, EmbedBuilder } from "discord.js";

import Config from "../config/config";
import StringFormatter from "../AnimeThemes/StringFormatter";

/**
 * Class DiscordEmbed
 * 
 * @property embedColor ColorResolvable | null
 * @property initialDescription string
 * @property artists string
 * @property title string
 * 
 * @method getAnimeEmbed EmbedBuilder
 * @method setEmbedColor DiscordEmbed
 * @method createVideoEmbedByAnime EmbedBuilder
 * @method createVideoEmbedByDescription EmbedBuilder
 */

export default class DiscordEmbed {

    public embedColor: ColorResolvable | null = [0, 0, 0];
    public initialDescription: string = '';
    public artists: string = '';
    public title: string = '';

    /**
     * Create the anime embed.
     * 
     * @param animeInfo  Anime | AnimeRequest
     * 
     * @returns EmbedBuilder
     */
    getAnimeEmbed(animeInfo: Anime | AnimeRequest): EmbedBuilder {
        const description = `**Synopsis:** ${animeInfo.synopsis?.replace(/<br>/g, "")}\n\n**Link:** ${Config.ANIME_URL + animeInfo.slug}`

        return new EmbedBuilder()
            .setTitle(animeInfo.name)
            .setColor([154, 0, 255])
            .setDescription(description);
    }

    /**
     * Set the color and initial description of the embed.
     * 
     * @param type "added" | "updated"
     * 
     * @returns DiscordEmbed
     */
    setEmbedColor(type: "added" | "updated"): DiscordEmbed {
        this.embedColor = type === "added" ? [46, 204, 113] : [255, 255, 0];
        this.initialDescription = type === "added" ? `New video has been added.\n\n` : `A video has been updated.\n\n`;

        return this;
    }

    /**
     * Create an embed of a video using anime information.
     * 
     * @param anime AnimeWithFilter
     * 
     * @returns EmbedBuilder
     */
    createVideoEmbedByAnime(anime: AnimeWithFilter): EmbedBuilder {
        if (anime.song.artists.length !== 0) {
            this.initialDescription += new StringFormatter().artistsDescription(anime.song.artists) + "\n";
        }
        
        this.initialDescription +=  `**Episodes:** ${anime?.episodes === null || anime?.episodes.length === 0 ? "-" : anime?.episodes}
        ${new StringFormatter().videoDescription(anime.video)}`

        return new EmbedBuilder()
            .setColor(this.embedColor)
            .setTitle(`${anime?.theme_type}${anime?.version === null ? '' : `v${anime?.version}`}${anime?.song?.title === undefined ? '' : ` - ${anime?.song?.title}`}`)
            .setDescription(this.initialDescription)
            .setThumbnail(anime.image as string);
    }

    /**
     * Set the title of the embed.
     * 
     * @param title string
     * 
     * @returns DiscordEmbed 
     */
    setTitle(title: string): DiscordEmbed {
        this.title = title;

        return this;
    }

    /**
     * Create an embed of a video.
     * 
     * @param description string
     * 
     * @returns EmbedBuilder
     */
    createVideoEmbedByDescription(description: string): EmbedBuilder {
        return new EmbedBuilder()
            .setColor([46, 204, 113])
            .setTitle(this.title)
            .setDescription(description);
    }
}