export interface Anime {
    name: string;
    season: 'Winter' | 'Spring' | 'Summer' | 'Fall' | 0 | 1 | 2 | 3;
    slug: string;
    synopsis: string;
    images: Array<{
        id: number;
        facet: string;
        path: string;
        link: string;
    }>;
    animesynonyms: Array<{
        id: number;
        text: string;
        type: string;
    }>;
};

export interface AnimeServer {
    anime_id: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    name: string;
    season: number;
    slug: string;
    synopsis: string | null;
    year: number;
    media_format: number;
    images: Array<{
        image_id: number;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        path: string;
        facet: number;
        link: string;
    }>;
}

export interface Video {
    basename: string;
    filename: string;
    link: string;
    overlap: string | null;
    resolution: number | null;
    source: string | null;
    tags: string;
    animethemeentries: Array<{
        episodes: string | null;
        nsfw: boolean;
        spoiler: boolean;
        version: number | null;
        animetheme: AnimeTheme;
    }>
};

export interface AnimeTheme {
    sequence: number | null;
    type: string;
    anime: Partial<Anime>;
    group: {
        name: string;
        slug: string;
    } | null;
    song: {
        title: string;
        artists: Array<Artist>;
    } | null;
}

export interface Artist {
    name: string;
    slug: string;
    artistsong: {
        as: string | null;
    };
};

export interface FeaturedTheme {
    animethemeentry: {
        animetheme: AnimeTheme;
        version: number | null;
    };
    video: Partial<Video>;
};