export interface Anime {
    name: string;
    slug: string;
    season: 'Winter' | 'Spring' | 'Summer' | 'Fall';
    synopsis: string;
    synonyms: string[];
    imageURL: string;
};

export interface AnimeRequestByID {
    name: string;
    slug: string;
    season: 'Winter' | 'Spring' | 'Summer' | 'Fall';
    synopsis: string;
    animesynonyms: {
        text: string;
    }[] | [];
    images: {
        facet: 'Large Cover' | 'Small Cover' | 'Grill';
        link: string;
    }[] | [];
};

export type AnimeRequestByVideoID = AnimeRequestByID & {
    animethemes: AnimeTheme[];
};

export type AnimeWithFilter = Partial<Anime> & {
    theme: {
        type: string;
        sequence: number | null;
        group: {
            name: string | null;
            slug: string | null;
        };
    };
    song: {
        title: string | null;
        artists: Artist[] | [];
    };
    episodes: string | null;
    version: string | number | null;
    spoiler: boolean;
    nsfw: boolean;
    video: Video;
};

export interface AnimeTheme {
    type: string;
    sequence: number | null;
    group: {
        name: string | null;
        slug: string | null;
    };
    song: {
        title: string;
        artists: Artist[] | [];
    } | null;
    animethemeentries: AnimeThemeEntry[];
};

export interface AnimeThemeEntry {
    version: string | number | null;
    episodes: string | null;
    spoiler: boolean;
    nsfw: boolean;
    videos: Video[];
};

export interface Video {
    id?: number;
    source: string;
    overlap: string;
    nc: boolean;
    resolution: number;
    tags: string;
    link: string;
};

export interface Artist {
    name: string;
    slug: string;
    artistsong: {
        as: string | null;
    };
};

export interface FeatureTheme {
    animethemeentry: {
        animetheme: {
            anime: {
                name: string;
            };
            type: string;
            sequence: number | null;
            group: {
                slug: string | null;
            };
        };
        version: string | number | null;
    };
    video: {
        link: string;
        tags: string | null;
    };
};