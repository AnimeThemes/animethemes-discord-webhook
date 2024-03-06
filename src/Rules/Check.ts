import { AnimeRequest, Anime } from 'structs/types/Anime';

/**
 * Class Check.
 * 
 * @method  animeName  string | null
 */
export default class Check {

    /**
     * Regulates the thread name.
     * 
     * @param  anime  Anime | AnimeRequest
     * @param  animeCustomName  string | undefined
     * 
     * @returns string | null
     */
    animeName(anime: Anime | AnimeRequest, animeCustomName: string | undefined): string | null {
        let name: string = animeCustomName === undefined ? anime.name : animeCustomName;

        if (name.length > 100) {
            name = anime.synonyms?.reduce((previous: string, current: string): string => {
                return current.length < previous.length ? current : previous;
            }) as string;

            if (name.length > 100) return null;
        }

        return name;
    }
}