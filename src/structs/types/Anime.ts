export interface Video {
    id?: number,
    resolution: number,
    tags: string,
    link: string
}

export interface AnimeThemeEntry {
    version: string | null,
    episodes: string | null
    videos: Video[]
}

export interface AnimeTheme {
    slug: string,
    song: {
        title: string | null,
        artists: {
            name: string,
            slug: string,
            as: string | null
        }[]
    },
    animethemeentries: AnimeThemeEntry[]
}

export interface Anime {
    id: number,
    name: string,
    slug: string,
    images: {
        link: string
    }[],
    animethemes: AnimeTheme[]
}