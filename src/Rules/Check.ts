import { Anime } from 'structs/types/Anime';

export default class Check {

    /**
     * Regulates the thread name.
     * 
     * @param  {Anime}  anime
     * @param  {string | undefined}  customAnimeName
     * @returns {string | null}
     */
    animeName(anime: Anime, customAnimeName: string | undefined): string | null {
        let name: string = customAnimeName === undefined ? anime.name : customAnimeName;

        if (name.length > 100) {
            name = anime.synonyms?.reduce((previous: string, current: string): string => {
                return current.length < previous.length ? current : previous;
            }) as string;

            if (name.length > 100) return null;
        }

        return name;
    }
}