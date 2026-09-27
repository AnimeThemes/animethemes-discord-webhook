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
    "\n    query VideoNotification($id: Int!) {\n        video(id: $id) {\n            ...createVideoSlugVideo\n            ...VideoEmbed\n        }\n    }\n": typeof types.VideoNotificationDocument,
    "\n    fragment VideoEmbed on Video {\n        ...createVideoSlugVideo\n        overlap\n        overlapLocalized\n        resolution\n        sourceLocalized\n        tags\n        entries {\n            nodes {\n                ...createVideoSlugEntry\n                episodes\n                notes\n                nsfw\n                spoiler\n                theme {\n                    ...createVideoSlugTheme\n                    anime {\n                        title {\n                            romaji\n                        }\n                        siteUrl\n                        images {\n                            nodes {\n                                link\n                            }\n                        }\n                    }\n                    song {\n                        title {\n                            romaji\n                        }\n                        staff {\n                            ...ArtistDescriptionFragmentSongStaff\n                        }\n                    }\n                }\n            }\n        }\n    }\n": typeof types.VideoEmbedFragmentDoc,
    "\n    query CurrentFeaturedTheme {\n        currentFeaturedTheme {\n            entry {\n                ...createVideoSlugEntry\n                theme {\n                    ...createVideoSlugTheme\n                    anime {\n                        title {\n                            romaji\n                        }\n                    }\n                }\n            }\n            video {\n                ...createVideoSlugVideo\n            }\n        }\n    }\n": typeof types.CurrentFeaturedThemeDocument,
    "\n    query SearchAnime($search: String!) {\n        search(search: $search, first: 5) {\n            anime {\n                pageInfo {\n                    first\n                }\n                data {\n                    formatLocalized\n                    title {\n                        romaji\n                    }\n                    siteUrl\n                    seasonLocalized\n                    synopsis\n                    year\n                    images {\n                        nodes {\n                            facet\n                            link\n                        }\n                    }\n                }\n            }\n        }\n    }\n": typeof types.SearchAnimeDocument,
    "\n    fragment ArtistDescriptionFragmentSongStaff on SongStaff {\n        alias\n        as\n        artist {\n            id\n            name {\n                main\n            }\n            siteUrl\n        }\n        member {\n            id\n        }\n        role\n    }\n": typeof types.ArtistDescriptionFragmentSongStaffFragmentDoc,
    "\n    fragment createVideoSlugTheme on Theme {\n        typeLocalized\n        sequence\n        group {\n            slug\n        }\n    }\n": typeof types.CreateVideoSlugThemeFragmentDoc,
    "\n    fragment createVideoSlugEntry on Entry {\n        version\n    }\n": typeof types.CreateVideoSlugEntryFragmentDoc,
    "\n    fragment createVideoSlugVideo on Video {\n        tags\n    }\n": typeof types.CreateVideoSlugVideoFragmentDoc,
};
const documents: Documents = {
    "\n    query VideoNotification($id: Int!) {\n        video(id: $id) {\n            ...createVideoSlugVideo\n            ...VideoEmbed\n        }\n    }\n": types.VideoNotificationDocument,
    "\n    fragment VideoEmbed on Video {\n        ...createVideoSlugVideo\n        overlap\n        overlapLocalized\n        resolution\n        sourceLocalized\n        tags\n        entries {\n            nodes {\n                ...createVideoSlugEntry\n                episodes\n                notes\n                nsfw\n                spoiler\n                theme {\n                    ...createVideoSlugTheme\n                    anime {\n                        title {\n                            romaji\n                        }\n                        siteUrl\n                        images {\n                            nodes {\n                                link\n                            }\n                        }\n                    }\n                    song {\n                        title {\n                            romaji\n                        }\n                        staff {\n                            ...ArtistDescriptionFragmentSongStaff\n                        }\n                    }\n                }\n            }\n        }\n    }\n": types.VideoEmbedFragmentDoc,
    "\n    query CurrentFeaturedTheme {\n        currentFeaturedTheme {\n            entry {\n                ...createVideoSlugEntry\n                theme {\n                    ...createVideoSlugTheme\n                    anime {\n                        title {\n                            romaji\n                        }\n                    }\n                }\n            }\n            video {\n                ...createVideoSlugVideo\n            }\n        }\n    }\n": types.CurrentFeaturedThemeDocument,
    "\n    query SearchAnime($search: String!) {\n        search(search: $search, first: 5) {\n            anime {\n                pageInfo {\n                    first\n                }\n                data {\n                    formatLocalized\n                    title {\n                        romaji\n                    }\n                    siteUrl\n                    seasonLocalized\n                    synopsis\n                    year\n                    images {\n                        nodes {\n                            facet\n                            link\n                        }\n                    }\n                }\n            }\n        }\n    }\n": types.SearchAnimeDocument,
    "\n    fragment ArtistDescriptionFragmentSongStaff on SongStaff {\n        alias\n        as\n        artist {\n            id\n            name {\n                main\n            }\n            siteUrl\n        }\n        member {\n            id\n        }\n        role\n    }\n": types.ArtistDescriptionFragmentSongStaffFragmentDoc,
    "\n    fragment createVideoSlugTheme on Theme {\n        typeLocalized\n        sequence\n        group {\n            slug\n        }\n    }\n": types.CreateVideoSlugThemeFragmentDoc,
    "\n    fragment createVideoSlugEntry on Entry {\n        version\n    }\n": types.CreateVideoSlugEntryFragmentDoc,
    "\n    fragment createVideoSlugVideo on Video {\n        tags\n    }\n": types.CreateVideoSlugVideoFragmentDoc,
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
export function graphql(source: "\n    query VideoNotification($id: Int!) {\n        video(id: $id) {\n            ...createVideoSlugVideo\n            ...VideoEmbed\n        }\n    }\n"): (typeof documents)["\n    query VideoNotification($id: Int!) {\n        video(id: $id) {\n            ...createVideoSlugVideo\n            ...VideoEmbed\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment VideoEmbed on Video {\n        ...createVideoSlugVideo\n        overlap\n        overlapLocalized\n        resolution\n        sourceLocalized\n        tags\n        entries {\n            nodes {\n                ...createVideoSlugEntry\n                episodes\n                notes\n                nsfw\n                spoiler\n                theme {\n                    ...createVideoSlugTheme\n                    anime {\n                        title {\n                            romaji\n                        }\n                        siteUrl\n                        images {\n                            nodes {\n                                link\n                            }\n                        }\n                    }\n                    song {\n                        title {\n                            romaji\n                        }\n                        staff {\n                            ...ArtistDescriptionFragmentSongStaff\n                        }\n                    }\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    fragment VideoEmbed on Video {\n        ...createVideoSlugVideo\n        overlap\n        overlapLocalized\n        resolution\n        sourceLocalized\n        tags\n        entries {\n            nodes {\n                ...createVideoSlugEntry\n                episodes\n                notes\n                nsfw\n                spoiler\n                theme {\n                    ...createVideoSlugTheme\n                    anime {\n                        title {\n                            romaji\n                        }\n                        siteUrl\n                        images {\n                            nodes {\n                                link\n                            }\n                        }\n                    }\n                    song {\n                        title {\n                            romaji\n                        }\n                        staff {\n                            ...ArtistDescriptionFragmentSongStaff\n                        }\n                    }\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query CurrentFeaturedTheme {\n        currentFeaturedTheme {\n            entry {\n                ...createVideoSlugEntry\n                theme {\n                    ...createVideoSlugTheme\n                    anime {\n                        title {\n                            romaji\n                        }\n                    }\n                }\n            }\n            video {\n                ...createVideoSlugVideo\n            }\n        }\n    }\n"): (typeof documents)["\n    query CurrentFeaturedTheme {\n        currentFeaturedTheme {\n            entry {\n                ...createVideoSlugEntry\n                theme {\n                    ...createVideoSlugTheme\n                    anime {\n                        title {\n                            romaji\n                        }\n                    }\n                }\n            }\n            video {\n                ...createVideoSlugVideo\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query SearchAnime($search: String!) {\n        search(search: $search, first: 5) {\n            anime {\n                pageInfo {\n                    first\n                }\n                data {\n                    formatLocalized\n                    title {\n                        romaji\n                    }\n                    siteUrl\n                    seasonLocalized\n                    synopsis\n                    year\n                    images {\n                        nodes {\n                            facet\n                            link\n                        }\n                    }\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query SearchAnime($search: String!) {\n        search(search: $search, first: 5) {\n            anime {\n                pageInfo {\n                    first\n                }\n                data {\n                    formatLocalized\n                    title {\n                        romaji\n                    }\n                    siteUrl\n                    seasonLocalized\n                    synopsis\n                    year\n                    images {\n                        nodes {\n                            facet\n                            link\n                        }\n                    }\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment ArtistDescriptionFragmentSongStaff on SongStaff {\n        alias\n        as\n        artist {\n            id\n            name {\n                main\n            }\n            siteUrl\n        }\n        member {\n            id\n        }\n        role\n    }\n"): (typeof documents)["\n    fragment ArtistDescriptionFragmentSongStaff on SongStaff {\n        alias\n        as\n        artist {\n            id\n            name {\n                main\n            }\n            siteUrl\n        }\n        member {\n            id\n        }\n        role\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment createVideoSlugTheme on Theme {\n        typeLocalized\n        sequence\n        group {\n            slug\n        }\n    }\n"): (typeof documents)["\n    fragment createVideoSlugTheme on Theme {\n        typeLocalized\n        sequence\n        group {\n            slug\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment createVideoSlugEntry on Entry {\n        version\n    }\n"): (typeof documents)["\n    fragment createVideoSlugEntry on Entry {\n        version\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment createVideoSlugVideo on Video {\n        tags\n    }\n"): (typeof documents)["\n    fragment createVideoSlugVideo on Video {\n        tags\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;