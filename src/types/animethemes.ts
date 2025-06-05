import { Maybe } from "types/generics";

export type Anime = {
    name: string;
    season: string;
    slug: string;
    synopsis: Maybe<string>;
    year: number;
    media_format: string;
    images?: Maybe<Array<Image>>;
};

export type AnimeTheme = {
    sequence: Maybe<number>;
    type: string;
    group?: Maybe<ThemeGroup>;
    song?: Maybe<Song>;
    anime: Anime;
};

export type ThemeGroup = {
    name: string;
    slug: string;
};

export type AnimeThemeEntry = {
    episodes: Maybe<string>;
    notes: string;
    nsfw: boolean;
    spoiler: boolean;
    version: Maybe<string>;
    animetheme: AnimeTheme;
};

export type Artist = {
    name: string;
    slug: string;
};

export type ArtistWithArtistSong = Artist & {
    artistsong: ArtistSong;
};

export type ArtistSong = {
    alias: Maybe<string>;
    as: Maybe<string>;
};

export type CurrentFeaturedTheme = Maybe<{
    animethemeentry: {
        animetheme: {
            anime: {
                name: string;
            };
            group: Maybe<{
                slug: string;
            }>;
            sequence: Maybe<number>;
            type: string;
        };
        version: Maybe<string>;
    };
    video: {
        tags: string | Array<string>;
    };
}>;

export type Image = {
    path: string;
    facet: string;
    link: string;
};

export type Song = {
    title: Maybe<string>;
    artists?: Maybe<Array<Artist>>;
};

export type Video = {
    basename: string;
    filename: string;
    link: string;
    overlap: Maybe<string>;
    resolution: Maybe<number>;
    source: Maybe<string>;
    tags: string | Array<string>;
    animethemeentries?: Maybe<Array<AnimeThemeEntry>>;
};