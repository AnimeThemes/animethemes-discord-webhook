export interface Video {
    id?: number,
    source?: string,
    overlap?: string,
    nc?: boolean,
    resolution: number,
    tags: string,
    link: string
}

export interface AnimeThemeEntry {
    version: string | null,
    episodes: string | null
    spoiler?: boolean,
    nsfw?: boolean,
    videos: Video[]
}

export interface Artist {
    name: string,
    slug: string,
    as: string | null
}

export interface AnimeTheme {
    slug: string,
    song: {
        title: string | null,
        artists: Artist[]
    },
    animethemeentries: AnimeThemeEntry[]
}

export interface Anime {
    id: number,
    name: string,
    slug?: string,
    season?: "Winter" | "Spring" | "Summer" | "Fall",
    year?: number,
    synopsis?: string,
    synonyms?: string[],
    image?: string
}

export type AnimeWithFilter = Anime & {
    image?: string,
    song: {
        title: string | null,
        artists: Artist[]
    },
    theme_type: string,
    episodes: string | null,
    version: string | null,
    spoiler?: boolean,
    nsfw?: boolean,
    video: Video
}

export type AnimeRequest = Anime & {
    animesynonyms?: {
        text: string
    }[] | [],
    images?: {
        facet: "Large Cover" | "Small Cover" | "Grill",
        link: string
    }[] | [],
    animethemes: AnimeTheme[]
}