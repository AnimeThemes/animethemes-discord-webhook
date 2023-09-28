import { AnimeThemeEntry, Artist, Video } from "../structs/types/Anime";

import Config from "../config/config";

/**
 * Class StringFormatter
 * 
 * @method artistsDescription string
 * @method entryDescription string
 * @method videoDescription string
 */

export default class StringFormatter {

    /**
     * Format Artists to a string.
     * 
     * @param artists Artist[]
     * 
     * @returns string
     */
    artistsDescription(artists: Artist[]): string {
        let addArtists = "**Artists:** ";

        for (let artist of artists) {
            addArtists += `[${artist.as === null ? artist.name : `${artist.as} (CV: ${artist.name})`}](${Config.ARTIST_URL + artist.slug}), `;
        }

        return addArtists.replace(/,\s$/, '\n').replace(/,\s*([^,]*)$/, ' & $1');
    }

    /**
     * Format AnimeThemeEntry to a string.
     * 
     * @param entry AnimeThemeEntry
     * 
     * @returns string
     */
    entryDescription(entry: AnimeThemeEntry): string {
        return `${entry.spoiler === true ? '⚠️ Spoiler ' : ''}${entry.version === null ? 'v1' : `v${entry.version}`}${entry.episodes === null || entry.episodes.length === 0 ? "" : ` - Episodes: ${entry.episodes}`}\n`
    }

    /**
     * Format Video to a string.
     * 
     * @param video Video
     * 
     * @returns string
     */
    videoDescription(video: Video): string {
        return `**Resolution:** ${video.resolution}p
        **Source:** ${video.source}
        **Overlap:** ${video.overlap}${video.tags.length === 0 ? '' : `\n**Tags:** ${video.tags}`}
        **Link**: ${video.link}`;
    }
}