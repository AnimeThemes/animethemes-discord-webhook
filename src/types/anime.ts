
export interface Anime {
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
    overlap: number | null;
    overlap_name: string | null;
    resolution: number | null;
    source: number | null;
    source_name: string | null;
    tags: string | Array<string>;
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
    type: number|string;
    type_name: string;
    anime: Partial<Anime>;
    group?: {
        name: string;
        slug: string;
    };
    song?: {
        title: string;
        artists: Array<Artist>;
    };
    group_id: number | null;
    song_id: number | null;
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