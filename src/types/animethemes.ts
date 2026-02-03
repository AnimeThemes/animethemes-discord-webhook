import { Maybe, Nodes } from 'types/generics';

export type AnimeThread = {
    name: string;
    slug: string;
    season: 'WINTER' | 'SPRING' | 'SUMMER' | 'FALL';
    synopsis: string;
    images: Nodes<{
        link: string;
    }>;
};

export type Video = {
    link: string;
    overlapLocalized: string;
    resolution: number;
    sourceLocalized: string;
    tags: string;
    animethemeentries: Nodes<AnimeThemeEntry>;
};

export type AnimeTheme = {
    type: 'OP' | 'ED';
    sequence: Maybe<number>;
    song: Maybe<{
        title: Maybe<string>;
        performances: Array<Performance>;
    }>;
    group: Maybe<{
        slug: string;
    }>;
    anime: {
        slug: string;
        images: Nodes<{
            link: string;
        }>;
    };
};

export type Performance = {
    alias: Maybe<string>;
    as: Maybe<string>;
    artist: Artist | Membership;
};

export type Artist = {
    name: string;
    slug: string;
};

export type Membership = {
    group: Artist;
};

export type AnimeThemeEntry = {
    episodes: Maybe<string>;
    nsfw: boolean;
    spoiler: boolean;
    version: number;
    animetheme: AnimeTheme;
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
            type: 'OP' | 'ED';
        };
        version: number;
    };
    video: {
        tags: string | Array<string>;
    };
}>;
