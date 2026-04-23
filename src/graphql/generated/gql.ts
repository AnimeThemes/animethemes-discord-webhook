/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    '\n    query VideoNotification($id: Int!) {\n        video(id: $id) {\n            ...createVideoSlugVideo\n            link\n            overlapLocalized\n            resolution\n            sourceLocalized\n            tags\n            animethemeentries {\n                nodes {\n                    ...createVideoSlugEntry\n                    episodes\n                    nsfw\n                    spoiler\n                    version\n                    animetheme {\n                        ...createVideoSlugTheme\n                        type\n                        sequence\n                        song {\n                            title\n                            performances(sort: RELEVANCE) {\n                                alias\n                                as\n                                artist {\n                                    name\n                                    slug\n                                }\n                                member {\n                                    id\n                                    name\n                                    slug\n                                }\n                            }\n                        }\n                        group {\n                            slug\n                        }\n                        anime {\n                            slug\n                            images(facet: SMALL_COVER) {\n                                nodes {\n                                    link\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n': typeof types.VideoNotificationDocument;
    '\n    query AnimeThread($slug: String!) {\n        anime(slug: $slug) {\n            ...AnimeThreadEmbed\n            name\n            slug\n            season\n            synopsis\n            images(facet: LARGE_COVER) {\n                nodes {\n                    facet\n                    link\n                }\n            }\n        }\n    }\n': typeof types.AnimeThreadDocument;
    '\n    fragment AnimeThreadEmbed on Anime {\n        name\n        slug\n        synopsis\n    }\n': typeof types.AnimeThreadEmbedFragmentDoc;
    '\n    fragment VideoEmbed on Video {\n        ...createVideoSlugVideo\n        overlapLocalized\n        resolution\n        sourceLocalized\n        tags\n        animethemeentries {\n            nodes {\n                ...createVideoSlugEntry\n                episodes\n                nsfw\n                spoiler\n                animetheme {\n                    ...createVideoSlugTheme\n                    anime {\n                        slug\n                        images {\n                            nodes {\n                                link\n                            }\n                        }\n                    }\n                    song {\n                        title\n                        performances {\n                            ...ArtistDescriptionFragmentPerformance\n                        }\n                    }\n                }\n            }\n        }\n    }\n': typeof types.VideoEmbedFragmentDoc;
    '\n    query CurrentFeaturedTheme {\n        currentfeaturedtheme {\n            animethemeentry {\n                ...createVideoSlugEntry\n                animetheme {\n                    ...createVideoSlugTheme\n                    anime {\n                        name\n                    }\n                }\n            }\n            video {\n                ...createVideoSlugVideo\n            }\n        }\n    }\n': typeof types.CurrentFeaturedThemeDocument;
    '\n    fragment ArtistDescriptionFragmentPerformance on Performance {\n        alias\n        as\n        artist {\n            name\n            slug\n        }\n        member {\n            id\n        }\n    }\n': typeof types.ArtistDescriptionFragmentPerformanceFragmentDoc;
    '\n    fragment createVideoSlugTheme on AnimeTheme {\n        typeLocalized\n        sequence\n        group {\n            slug\n        }\n    }\n': typeof types.CreateVideoSlugThemeFragmentDoc;
    '\n    fragment createVideoSlugEntry on AnimeThemeEntry {\n        version\n    }\n': typeof types.CreateVideoSlugEntryFragmentDoc;
    '\n    fragment createVideoSlugVideo on Video {\n        tags\n    }\n': typeof types.CreateVideoSlugVideoFragmentDoc;
};
const documents: Documents = {
    '\n    query VideoNotification($id: Int!) {\n        video(id: $id) {\n            ...createVideoSlugVideo\n            link\n            overlapLocalized\n            resolution\n            sourceLocalized\n            tags\n            animethemeentries {\n                nodes {\n                    ...createVideoSlugEntry\n                    episodes\n                    nsfw\n                    spoiler\n                    version\n                    animetheme {\n                        ...createVideoSlugTheme\n                        type\n                        sequence\n                        song {\n                            title\n                            performances(sort: RELEVANCE) {\n                                alias\n                                as\n                                artist {\n                                    name\n                                    slug\n                                }\n                                member {\n                                    id\n                                    name\n                                    slug\n                                }\n                            }\n                        }\n                        group {\n                            slug\n                        }\n                        anime {\n                            slug\n                            images(facet: SMALL_COVER) {\n                                nodes {\n                                    link\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n':
        types.VideoNotificationDocument,
    '\n    query AnimeThread($slug: String!) {\n        anime(slug: $slug) {\n            ...AnimeThreadEmbed\n            name\n            slug\n            season\n            synopsis\n            images(facet: LARGE_COVER) {\n                nodes {\n                    facet\n                    link\n                }\n            }\n        }\n    }\n':
        types.AnimeThreadDocument,
    '\n    fragment AnimeThreadEmbed on Anime {\n        name\n        slug\n        synopsis\n    }\n':
        types.AnimeThreadEmbedFragmentDoc,
    '\n    fragment VideoEmbed on Video {\n        ...createVideoSlugVideo\n        overlapLocalized\n        resolution\n        sourceLocalized\n        tags\n        animethemeentries {\n            nodes {\n                ...createVideoSlugEntry\n                episodes\n                nsfw\n                spoiler\n                animetheme {\n                    ...createVideoSlugTheme\n                    anime {\n                        slug\n                        images {\n                            nodes {\n                                link\n                            }\n                        }\n                    }\n                    song {\n                        title\n                        performances {\n                            ...ArtistDescriptionFragmentPerformance\n                        }\n                    }\n                }\n            }\n        }\n    }\n':
        types.VideoEmbedFragmentDoc,
    '\n    query CurrentFeaturedTheme {\n        currentfeaturedtheme {\n            animethemeentry {\n                ...createVideoSlugEntry\n                animetheme {\n                    ...createVideoSlugTheme\n                    anime {\n                        name\n                    }\n                }\n            }\n            video {\n                ...createVideoSlugVideo\n            }\n        }\n    }\n':
        types.CurrentFeaturedThemeDocument,
    '\n    fragment ArtistDescriptionFragmentPerformance on Performance {\n        alias\n        as\n        artist {\n            name\n            slug\n        }\n        member {\n            id\n        }\n    }\n':
        types.ArtistDescriptionFragmentPerformanceFragmentDoc,
    '\n    fragment createVideoSlugTheme on AnimeTheme {\n        typeLocalized\n        sequence\n        group {\n            slug\n        }\n    }\n':
        types.CreateVideoSlugThemeFragmentDoc,
    '\n    fragment createVideoSlugEntry on AnimeThemeEntry {\n        version\n    }\n':
        types.CreateVideoSlugEntryFragmentDoc,
    '\n    fragment createVideoSlugVideo on Video {\n        tags\n    }\n': types.CreateVideoSlugVideoFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    query VideoNotification($id: Int!) {\n        video(id: $id) {\n            ...createVideoSlugVideo\n            link\n            overlapLocalized\n            resolution\n            sourceLocalized\n            tags\n            animethemeentries {\n                nodes {\n                    ...createVideoSlugEntry\n                    episodes\n                    nsfw\n                    spoiler\n                    version\n                    animetheme {\n                        ...createVideoSlugTheme\n                        type\n                        sequence\n                        song {\n                            title\n                            performances(sort: RELEVANCE) {\n                                alias\n                                as\n                                artist {\n                                    name\n                                    slug\n                                }\n                                member {\n                                    id\n                                    name\n                                    slug\n                                }\n                            }\n                        }\n                        group {\n                            slug\n                        }\n                        anime {\n                            slug\n                            images(facet: SMALL_COVER) {\n                                nodes {\n                                    link\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n',
): (typeof documents)['\n    query VideoNotification($id: Int!) {\n        video(id: $id) {\n            ...createVideoSlugVideo\n            link\n            overlapLocalized\n            resolution\n            sourceLocalized\n            tags\n            animethemeentries {\n                nodes {\n                    ...createVideoSlugEntry\n                    episodes\n                    nsfw\n                    spoiler\n                    version\n                    animetheme {\n                        ...createVideoSlugTheme\n                        type\n                        sequence\n                        song {\n                            title\n                            performances(sort: RELEVANCE) {\n                                alias\n                                as\n                                artist {\n                                    name\n                                    slug\n                                }\n                                member {\n                                    id\n                                    name\n                                    slug\n                                }\n                            }\n                        }\n                        group {\n                            slug\n                        }\n                        anime {\n                            slug\n                            images(facet: SMALL_COVER) {\n                                nodes {\n                                    link\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    query AnimeThread($slug: String!) {\n        anime(slug: $slug) {\n            ...AnimeThreadEmbed\n            name\n            slug\n            season\n            synopsis\n            images(facet: LARGE_COVER) {\n                nodes {\n                    facet\n                    link\n                }\n            }\n        }\n    }\n',
): (typeof documents)['\n    query AnimeThread($slug: String!) {\n        anime(slug: $slug) {\n            ...AnimeThreadEmbed\n            name\n            slug\n            season\n            synopsis\n            images(facet: LARGE_COVER) {\n                nodes {\n                    facet\n                    link\n                }\n            }\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    fragment AnimeThreadEmbed on Anime {\n        name\n        slug\n        synopsis\n    }\n',
): (typeof documents)['\n    fragment AnimeThreadEmbed on Anime {\n        name\n        slug\n        synopsis\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    fragment VideoEmbed on Video {\n        ...createVideoSlugVideo\n        overlapLocalized\n        resolution\n        sourceLocalized\n        tags\n        animethemeentries {\n            nodes {\n                ...createVideoSlugEntry\n                episodes\n                nsfw\n                spoiler\n                animetheme {\n                    ...createVideoSlugTheme\n                    anime {\n                        slug\n                        images {\n                            nodes {\n                                link\n                            }\n                        }\n                    }\n                    song {\n                        title\n                        performances {\n                            ...ArtistDescriptionFragmentPerformance\n                        }\n                    }\n                }\n            }\n        }\n    }\n',
): (typeof documents)['\n    fragment VideoEmbed on Video {\n        ...createVideoSlugVideo\n        overlapLocalized\n        resolution\n        sourceLocalized\n        tags\n        animethemeentries {\n            nodes {\n                ...createVideoSlugEntry\n                episodes\n                nsfw\n                spoiler\n                animetheme {\n                    ...createVideoSlugTheme\n                    anime {\n                        slug\n                        images {\n                            nodes {\n                                link\n                            }\n                        }\n                    }\n                    song {\n                        title\n                        performances {\n                            ...ArtistDescriptionFragmentPerformance\n                        }\n                    }\n                }\n            }\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    query CurrentFeaturedTheme {\n        currentfeaturedtheme {\n            animethemeentry {\n                ...createVideoSlugEntry\n                animetheme {\n                    ...createVideoSlugTheme\n                    anime {\n                        name\n                    }\n                }\n            }\n            video {\n                ...createVideoSlugVideo\n            }\n        }\n    }\n',
): (typeof documents)['\n    query CurrentFeaturedTheme {\n        currentfeaturedtheme {\n            animethemeentry {\n                ...createVideoSlugEntry\n                animetheme {\n                    ...createVideoSlugTheme\n                    anime {\n                        name\n                    }\n                }\n            }\n            video {\n                ...createVideoSlugVideo\n            }\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    fragment ArtistDescriptionFragmentPerformance on Performance {\n        alias\n        as\n        artist {\n            name\n            slug\n        }\n        member {\n            id\n        }\n    }\n',
): (typeof documents)['\n    fragment ArtistDescriptionFragmentPerformance on Performance {\n        alias\n        as\n        artist {\n            name\n            slug\n        }\n        member {\n            id\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    fragment createVideoSlugTheme on AnimeTheme {\n        typeLocalized\n        sequence\n        group {\n            slug\n        }\n    }\n',
): (typeof documents)['\n    fragment createVideoSlugTheme on AnimeTheme {\n        typeLocalized\n        sequence\n        group {\n            slug\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    fragment createVideoSlugEntry on AnimeThemeEntry {\n        version\n    }\n',
): (typeof documents)['\n    fragment createVideoSlugEntry on AnimeThemeEntry {\n        version\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    fragment createVideoSlugVideo on Video {\n        tags\n    }\n',
): (typeof documents)['\n    fragment createVideoSlugVideo on Video {\n        tags\n    }\n'];

export function graphql(source: string) {
    return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
    TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
