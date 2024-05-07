import { Anime } from 'types/anime';

/**
 * Regulates the thread name.
 *
 * @param  {Anime}  anime
 * @param  {string | undefined}  customAnimeName
 * @return {string | null}
 */
export function animeName(anime: Anime, customAnimeName: string | undefined): string | null {
    let name: string = customAnimeName === undefined ? anime.name : customAnimeName;

    if (name.length > 100) {
        name = anime.animesynonyms.map(synonym => synonym.text).reduce((previous, current) => {
            return current.length < previous.length ? current : previous;
        });

        if (name.length > 100) return null;
    }

    return name;
}