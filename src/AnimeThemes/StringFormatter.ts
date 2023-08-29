import { Anime } from "../structs/types/Anime";

import * as dotenv from "dotenv";

dotenv.config();

/**
 * Class StringFormatter
 * 
 * @method addedOrUpdate StringFormatter
 * @method removeUnnecessaryText string
 * @method animeDescription string
 */

class StringFormatter {

    private type: string = '';

    /**
     * Set the initial message.
     * 
     * @param type "ADDED" | "UPDATED"
     * 
     * @returns StringFormatter
     */
    addedOrUpdate(type: "ADDED" | "UPDATED"): StringFormatter {
        this.type = type === "ADDED" ? "New videos have been added" : "A video has been updated";

        return this;
    }

    /**
     * Remove multiplied text and format from array to string.
     * 
     * @param array any[]
     * 
     * @returns string
     */
    removeUnnecessaryText(array: any[]): string {
        return array.join('\n\n').replace(/(?:^(New[^\n]+\.\n)|\bNew[^\n]+\.\n)/g, (match, group) => group ? match : "").replace(/\n{3,}/g, "\n\n");
    }

    /**
     * Generate a string formatted with anime themes.
     * 
     * @param anime Anime
     * 
     * @returns string
     */
    animeDescription(anime: Anime): string {
        let stringDescription = `${this.type} [here](${process.env.ANIME_URL + anime.slug}).\n\n`;

        for (let theme of anime.animethemes) {
            stringDescription += `${theme.slug} - ${theme.song.title}`;
    
            if (theme.song.artists.length !== 0) {
                let addArtists = " by ";
                for (let artist of theme.song.artists) {
                    addArtists += `[${artist.as === null ? artist.name : `${artist.as} (CV: ${artist.name})`}](${process.env.ARTIST_URL + artist.slug}), `;
                }
    
                addArtists = addArtists.replace(/,\s$/, '\n').replace(/,\s*([^,]*)$/, ' & $1');
                stringDescription += addArtists;
            }
    
            for (let entry of theme.animethemeentries) {
                stringDescription += `${entry.version ? `v${entry.version}` : 'v1'}${entry.episodes ? ` - Episodes: ${entry.episodes}` : ''}\n`;
    
                for (let video of entry.videos) {
                    stringDescription += `[${video.resolution}p ${video.tags ? `- ${video.tags}` : ''}](${video.link}) | `;
                }
    
                stringDescription = stringDescription.replace(/\s\|\s$/, '\n');
            }
    
            stringDescription += `\n`;
        }
    
        return stringDescription;
    }
}

export default StringFormatter;