/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
    /** A datetime and timezone string in ISO 8601 format `Y-m-dTH:i:sP`, e.g. `2020-04-20T13:53:12+02:00`. */
    DateTimeTz: { input: any; output: any };
    /**
     * Loose type that allows any value. Be careful when passing in large `Int` or `Float` literals,
     * as they may not be parsed correctly on the server side. Use `String` literals if you are
     * dealing with really large numbers to be on the safe side.
     */
    Mixed: { input: any; output: any };
};

/**
 * Represents a production with at least one opening or ending sequence.
 *
 * For example, Bakemonogatari is an anime production with five opening sequences and one ending sequence.
 */
export type Anime = {
    __typename?: 'Anime';
    animethemes: Array<AnimeTheme>;
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** The format of the anime */
    format?: Maybe<AnimeFormat>;
    /** The formatted string value of the format field */
    formatLocalized?: Maybe<Scalars['String']['output']>;
    /** The primary key of the resource */
    id: Scalars['Int']['output'];
    images: ImageConnection;
    /**
     * The media format of the anime
     * @deprecated Use 'format' instead
     */
    mediaFormat?: Maybe<AnimeMediaFormat>;
    /**
     * The formatted string value of the mediaFormat field
     * @deprecated Use 'formatLocalized' instead
     */
    mediaFormatLocalized?: Maybe<Scalars['String']['output']>;
    /** The primary title of the anime */
    name: Scalars['String']['output'];
    resources: ExternalResourceConnection;
    /** The premiere season of the anime */
    season?: Maybe<AnimeSeason>;
    /** The formatted string value of the season field */
    seasonLocalized?: Maybe<Scalars['String']['output']>;
    series: AnimeSeriesConnection;
    /** The URL slug & route key of the resource */
    slug: Scalars['String']['output'];
    studios: AnimeStudioConnection;
    synonyms: Array<Synonym>;
    /** The brief summary of the anime */
    synopsis?: Maybe<Scalars['String']['output']>;
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
    /** The premiere year of the anime */
    year?: Maybe<Scalars['Int']['output']>;
};

/**
 * Represents a production with at least one opening or ending sequence.
 *
 * For example, Bakemonogatari is an anime production with five opening sequences and one ending sequence.
 */
export type AnimeAnimethemesArgs = {
    first?: Scalars['Int']['input'];
    page?: InputMaybe<Scalars['Int']['input']>;
    sequence?: InputMaybe<Scalars['Int']['input']>;
    sequence_greater?: InputMaybe<Scalars['Int']['input']>;
    sequence_lesser?: InputMaybe<Scalars['Int']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<AnimeThemeSort>>;
    type?: InputMaybe<ThemeType>;
    type_in?: InputMaybe<Array<ThemeType>>;
    where?: InputMaybe<AnimeAnimethemesWhereWhereConditions>;
};

/**
 * Represents a production with at least one opening or ending sequence.
 *
 * For example, Bakemonogatari is an anime production with five opening sequences and one ending sequence.
 */
export type AnimeCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

/**
 * Represents a production with at least one opening or ending sequence.
 *
 * For example, Bakemonogatari is an anime production with five opening sequences and one ending sequence.
 */
export type AnimeImagesArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    facet?: InputMaybe<ImageFacet>;
    first?: Scalars['Int']['input'];
    path_like?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<ImageSort>>;
    where?: InputMaybe<AnimeImagesWhereWhereConditions>;
};

/**
 * Represents a production with at least one opening or ending sequence.
 *
 * For example, Bakemonogatari is an anime production with five opening sequences and one ending sequence.
 */
export type AnimeResourcesArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    externalId?: InputMaybe<Scalars['Int']['input']>;
    first?: Scalars['Int']['input'];
    site?: InputMaybe<ResourceSite>;
    sort?: InputMaybe<Array<ExternalResourceSort>>;
    where?: InputMaybe<AnimeResourcesWhereWhereConditions>;
};

/**
 * Represents a production with at least one opening or ending sequence.
 *
 * For example, Bakemonogatari is an anime production with five opening sequences and one ending sequence.
 */
export type AnimeSeriesArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    first?: Scalars['Int']['input'];
    name_like?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<SeriesSort>>;
    where?: InputMaybe<AnimeSeriesWhereWhereConditions>;
};

/**
 * Represents a production with at least one opening or ending sequence.
 *
 * For example, Bakemonogatari is an anime production with five opening sequences and one ending sequence.
 */
export type AnimeStudiosArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    first?: Scalars['Int']['input'];
    name_like?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<StudioSort>>;
    where?: InputMaybe<AnimeStudiosWhereWhereConditions>;
};

/**
 * Represents a production with at least one opening or ending sequence.
 *
 * For example, Bakemonogatari is an anime production with five opening sequences and one ending sequence.
 */
export type AnimeSynonymsArgs = {
    sort?: InputMaybe<Array<SynonymSort>>;
    type?: InputMaybe<SynonymType>;
    where?: InputMaybe<AnimeSynonymsWhereWhereConditions>;
};

/**
 * Represents a production with at least one opening or ending sequence.
 *
 * For example, Bakemonogatari is an anime production with five opening sequences and one ending sequence.
 */
export type AnimeUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `animethemes`. */
export type AnimeAnimethemesWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<AnimeAnimethemesWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<AnimeAnimethemesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<AnimeAnimethemesWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<AnimeThemeFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `animethemes`. */
export type AnimeAnimethemesWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<AnimeAnimethemesWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<AnimeAnimethemesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<AnimeAnimethemesWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `animethemes`. */
export type AnimeAnimethemesWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<AnimeAnimethemesWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

export enum AnimeFilterableColumns {
    CreatedAt = 'CREATED_AT',
    Format = 'FORMAT',
    Id = 'ID',
    /** @deprecated Use FORMAT instead */
    MediaFormat = 'MEDIA_FORMAT',
    Name = 'NAME',
    Season = 'SEASON',
    Synopsis = 'SYNOPSIS',
    UpdatedAt = 'UPDATED_AT',
    Year = 'YEAR',
}

export enum AnimeFormat {
    Movie = 'MOVIE',
    Ona = 'ONA',
    Ova = 'OVA',
    Special = 'SPECIAL',
    Tv = 'TV',
    TvShort = 'TV_SHORT',
}

/** Dynamic WHERE conditions for the `where` argument of the query `images`. */
export type AnimeImagesWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<AnimeImagesWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<AnimeImagesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<AnimeImagesWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<ImageFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `images`. */
export type AnimeImagesWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<AnimeImagesWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<AnimeImagesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<AnimeImagesWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `images`. */
export type AnimeImagesWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<AnimeImagesWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

export enum AnimeMediaFormat {
    Movie = 'MOVIE',
    Ona = 'ONA',
    Ova = 'OVA',
    Special = 'SPECIAL',
    Tv = 'TV',
    TvShort = 'TV_SHORT',
}

/** A paginated list of Anime items. */
export type AnimePaginator = {
    __typename?: 'AnimePaginator';
    /** A list of Anime items. */
    data: Array<Anime>;
    /** Pagination information about the list of items. */
    paginatorInfo: PaginatorInfo;
};

/** Dynamic WHERE conditions for the `where` argument of the query `resources`. */
export type AnimeResourcesWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<AnimeResourcesWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<AnimeResourcesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<AnimeResourcesWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<ExternalResourceFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `resources`. */
export type AnimeResourcesWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<AnimeResourcesWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<AnimeResourcesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<AnimeResourcesWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `resources`. */
export type AnimeResourcesWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<AnimeResourcesWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

export enum AnimeSeason {
    Fall = 'FALL',
    Spring = 'SPRING',
    Summer = 'SUMMER',
    Winter = 'WINTER',
}

/** A paginated list of Series edges. */
export type AnimeSeriesConnection = {
    __typename?: 'AnimeSeriesConnection';
    /** A list of Series edges. */
    edges: Array<AnimeSeriesEdge>;
    /** A list of Series resources. Use this if you don't care about pivot fields. */
    nodes: Array<Series>;
    /** Pagination information about the list of edges. */
    pageInfo: PageInfo;
};

export type AnimeSeriesEdge = {
    __typename?: 'AnimeSeriesEdge';
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** The Series node. */
    node: Series;
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
};

export type AnimeSeriesEdgeCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

export type AnimeSeriesEdgeUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `series`. */
export type AnimeSeriesWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<AnimeSeriesWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<AnimeSeriesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<AnimeSeriesWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<SeriesFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `series`. */
export type AnimeSeriesWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<AnimeSeriesWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<AnimeSeriesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<AnimeSeriesWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `series`. */
export type AnimeSeriesWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<AnimeSeriesWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

export enum AnimeSort {
    CreatedAt = 'CREATED_AT',
    CreatedAtDesc = 'CREATED_AT_DESC',
    Id = 'ID',
    IdDesc = 'ID_DESC',
    Name = 'NAME',
    NameDesc = 'NAME_DESC',
    Random = 'RANDOM',
    UpdatedAt = 'UPDATED_AT',
    UpdatedAtDesc = 'UPDATED_AT_DESC',
    Year = 'YEAR',
    YearDesc = 'YEAR_DESC',
}

/** A paginated list of Studio edges. */
export type AnimeStudioConnection = {
    __typename?: 'AnimeStudioConnection';
    /** A list of Studio edges. */
    edges: Array<AnimeStudioEdge>;
    /** A list of Studio resources. Use this if you don't care about pivot fields. */
    nodes: Array<Studio>;
    /** Pagination information about the list of edges. */
    pageInfo: PageInfo;
};

export type AnimeStudioEdge = {
    __typename?: 'AnimeStudioEdge';
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** The Studio node. */
    node: Studio;
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
};

export type AnimeStudioEdgeCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

export type AnimeStudioEdgeUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `studios`. */
export type AnimeStudiosWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<AnimeStudiosWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<AnimeStudiosWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<AnimeStudiosWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<StudioFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `studios`. */
export type AnimeStudiosWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<AnimeStudiosWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<AnimeStudiosWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<AnimeStudiosWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `studios`. */
export type AnimeStudiosWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<AnimeStudiosWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

/** @deprecated Use SynonymType instead. */
export enum AnimeSynonymType {
    English = 'ENGLISH',
    Native = 'NATIVE',
    Other = 'OTHER',
    Short = 'SHORT',
}

/** Dynamic WHERE conditions for the `where` argument of the query `synonyms`. */
export type AnimeSynonymsWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<AnimeSynonymsWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<AnimeSynonymsWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<AnimeSynonymsWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<SynonymFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `synonyms`. */
export type AnimeSynonymsWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<AnimeSynonymsWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<AnimeSynonymsWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<AnimeSynonymsWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `synonyms`. */
export type AnimeSynonymsWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<AnimeSynonymsWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

/**
 * Represents an OP or ED sequence for an anime.
 *
 * For example, the anime Bakemonogatari has five OP anime themes and one ED anime theme.
 */
export type AnimeTheme = {
    __typename?: 'AnimeTheme';
    anime: Anime;
    animethemeentries: Array<AnimeThemeEntry>;
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    group?: Maybe<ThemeGroup>;
    /** The primary key of the resource */
    id: Scalars['Int']['output'];
    /** The numeric ordering of the theme */
    sequence?: Maybe<Scalars['Int']['output']>;
    /** The slug that represents the anime theme. */
    slug: Scalars['String']['output'];
    song?: Maybe<Song>;
    /** The type of the sequence */
    type: ThemeType;
    /** The formatted string value of the type field */
    typeLocalized: Scalars['String']['output'];
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
};

/**
 * Represents an OP or ED sequence for an anime.
 *
 * For example, the anime Bakemonogatari has five OP anime themes and one ED anime theme.
 */
export type AnimeThemeAnimethemeentriesArgs = {
    episodes?: InputMaybe<Scalars['String']['input']>;
    episodes_like?: InputMaybe<Scalars['String']['input']>;
    first?: Scalars['Int']['input'];
    nsfw?: InputMaybe<Scalars['Boolean']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<AnimeThemeEntrySort>>;
    spoiler?: InputMaybe<Scalars['Boolean']['input']>;
    version?: InputMaybe<Scalars['Int']['input']>;
    version_greater?: InputMaybe<Scalars['Int']['input']>;
    version_lesser?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<AnimeThemeAnimethemeentriesWhereWhereConditions>;
};

/**
 * Represents an OP or ED sequence for an anime.
 *
 * For example, the anime Bakemonogatari has five OP anime themes and one ED anime theme.
 */
export type AnimeThemeCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

/**
 * Represents an OP or ED sequence for an anime.
 *
 * For example, the anime Bakemonogatari has five OP anime themes and one ED anime theme.
 */
export type AnimeThemeUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `animethemeentries`. */
export type AnimeThemeAnimethemeentriesWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<AnimeThemeAnimethemeentriesWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<AnimeThemeAnimethemeentriesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<AnimeThemeAnimethemeentriesWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<AnimeThemeEntryFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `animethemeentries`. */
export type AnimeThemeAnimethemeentriesWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<AnimeThemeAnimethemeentriesWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<AnimeThemeAnimethemeentriesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<AnimeThemeAnimethemeentriesWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `animethemeentries`. */
export type AnimeThemeAnimethemeentriesWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<AnimeThemeAnimethemeentriesWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

/**
 * Represents a version of an anime theme.
 *
 * For example, the ED theme of the Bakemonogatari anime has three anime theme entries to represent three versions.
 */
export type AnimeThemeEntry = {
    __typename?: 'AnimeThemeEntry';
    animetheme: AnimeTheme;
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** The episodes that the theme is used for */
    episodes?: Maybe<Scalars['String']['output']>;
    /** The primary key of the resource */
    id: Scalars['Int']['output'];
    /** The number of likes recorded for the resource */
    likesCount: Scalars['Int']['output'];
    /** Any additional information for this sequence */
    notes?: Maybe<Scalars['String']['output']>;
    /** Is not safe for work content included? */
    nsfw: Scalars['Boolean']['output'];
    resources: ExternalResourceConnection;
    /** Is content included that may spoil the viewer? */
    spoiler: Scalars['Boolean']['output'];
    /** The number of tracks belonging to the resource */
    tracksCount: Scalars['Int']['output'];
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
    /** The version number of the theme */
    version: Scalars['Int']['output'];
    videos: AnimeThemeEntryVideoConnection;
};

/**
 * Represents a version of an anime theme.
 *
 * For example, the ED theme of the Bakemonogatari anime has three anime theme entries to represent three versions.
 */
export type AnimeThemeEntryCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

/**
 * Represents a version of an anime theme.
 *
 * For example, the ED theme of the Bakemonogatari anime has three anime theme entries to represent three versions.
 */
export type AnimeThemeEntryResourcesArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    externalId?: InputMaybe<Scalars['Int']['input']>;
    first?: Scalars['Int']['input'];
    site?: InputMaybe<ResourceSite>;
    sort?: InputMaybe<Array<ExternalResourceSort>>;
    where?: InputMaybe<AnimeThemeEntryResourcesWhereWhereConditions>;
};

/**
 * Represents a version of an anime theme.
 *
 * For example, the ED theme of the Bakemonogatari anime has three anime theme entries to represent three versions.
 */
export type AnimeThemeEntryUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

/**
 * Represents a version of an anime theme.
 *
 * For example, the ED theme of the Bakemonogatari anime has three anime theme entries to represent three versions.
 */
export type AnimeThemeEntryVideosArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    basename?: InputMaybe<Scalars['String']['input']>;
    filename?: InputMaybe<Scalars['String']['input']>;
    first?: Scalars['Int']['input'];
    lyrics?: InputMaybe<Scalars['Boolean']['input']>;
    mimetype?: InputMaybe<Scalars['String']['input']>;
    nc?: InputMaybe<Scalars['Boolean']['input']>;
    overlap?: InputMaybe<VideoOverlap>;
    path?: InputMaybe<Scalars['String']['input']>;
    path_like?: InputMaybe<Scalars['String']['input']>;
    resolution?: InputMaybe<Scalars['Int']['input']>;
    resolution_greater?: InputMaybe<Scalars['Int']['input']>;
    resolution_lesser?: InputMaybe<Scalars['Int']['input']>;
    size_greater?: InputMaybe<Scalars['Int']['input']>;
    size_lesser?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<VideoSort>>;
    source?: InputMaybe<VideoSource>;
    subbed?: InputMaybe<Scalars['Boolean']['input']>;
    uncen?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<AnimeThemeEntryVideosWhereWhereConditions>;
};

export enum AnimeThemeEntryFilterableColumns {
    CreatedAt = 'CREATED_AT',
    Episodes = 'EPISODES',
    Id = 'ID',
    Notes = 'NOTES',
    Nsfw = 'NSFW',
    Spoiler = 'SPOILER',
    UpdatedAt = 'UPDATED_AT',
    Version = 'VERSION',
}

/** A paginated list of AnimeThemeEntry items. */
export type AnimeThemeEntryPaginator = {
    __typename?: 'AnimeThemeEntryPaginator';
    /** A list of AnimeThemeEntry items. */
    data: Array<AnimeThemeEntry>;
    /** Pagination information about the list of items. */
    paginatorInfo: PaginatorInfo;
};

/** Dynamic WHERE conditions for the `where` argument of the query `resources`. */
export type AnimeThemeEntryResourcesWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<AnimeThemeEntryResourcesWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<AnimeThemeEntryResourcesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<AnimeThemeEntryResourcesWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<ExternalResourceFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `resources`. */
export type AnimeThemeEntryResourcesWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<AnimeThemeEntryResourcesWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<AnimeThemeEntryResourcesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<AnimeThemeEntryResourcesWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `resources`. */
export type AnimeThemeEntryResourcesWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<AnimeThemeEntryResourcesWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

export enum AnimeThemeEntrySort {
    CreatedAt = 'CREATED_AT',
    CreatedAtDesc = 'CREATED_AT_DESC',
    Episodes = 'EPISODES',
    EpisodesDesc = 'EPISODES_DESC',
    Id = 'ID',
    IdDesc = 'ID_DESC',
    LikesCount = 'LIKES_COUNT',
    LikesCountDesc = 'LIKES_COUNT_DESC',
    Random = 'RANDOM',
    TracksCount = 'TRACKS_COUNT',
    TracksCountDesc = 'TRACKS_COUNT_DESC',
    UpdatedAt = 'UPDATED_AT',
    UpdatedAtDesc = 'UPDATED_AT_DESC',
    Version = 'VERSION',
    VersionDesc = 'VERSION_DESC',
}

/** A paginated list of Video edges. */
export type AnimeThemeEntryVideoConnection = {
    __typename?: 'AnimeThemeEntryVideoConnection';
    /** A list of Video edges. */
    edges: Array<AnimeThemeEntryVideoEdge>;
    /** A list of Video resources. Use this if you don't care about pivot fields. */
    nodes: Array<Video>;
    /** Pagination information about the list of edges. */
    pageInfo: PageInfo;
};

export type AnimeThemeEntryVideoEdge = {
    __typename?: 'AnimeThemeEntryVideoEdge';
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** The Video node. */
    node: Video;
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
};

export type AnimeThemeEntryVideoEdgeCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

export type AnimeThemeEntryVideoEdgeUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `videos`. */
export type AnimeThemeEntryVideosWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<AnimeThemeEntryVideosWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<AnimeThemeEntryVideosWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<AnimeThemeEntryVideosWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<VideoFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `videos`. */
export type AnimeThemeEntryVideosWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<AnimeThemeEntryVideosWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<AnimeThemeEntryVideosWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<AnimeThemeEntryVideosWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `videos`. */
export type AnimeThemeEntryVideosWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<AnimeThemeEntryVideosWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

export enum AnimeThemeFilterableColumns {
    CreatedAt = 'CREATED_AT',
    Id = 'ID',
    Sequence = 'SEQUENCE',
    Slug = 'SLUG',
    Type = 'TYPE',
    UpdatedAt = 'UPDATED_AT',
}

/** A paginated list of AnimeTheme items. */
export type AnimeThemePaginator = {
    __typename?: 'AnimeThemePaginator';
    /** A list of AnimeTheme items. */
    data: Array<AnimeTheme>;
    /** Pagination information about the list of items. */
    paginatorInfo: PaginatorInfo;
};

export enum AnimeThemeSort {
    CreatedAt = 'CREATED_AT',
    CreatedAtDesc = 'CREATED_AT_DESC',
    Id = 'ID',
    IdDesc = 'ID_DESC',
    Random = 'RANDOM',
    Sequence = 'SEQUENCE',
    SequenceDesc = 'SEQUENCE_DESC',
    SongTitle = 'SONG_TITLE',
    SongTitleDesc = 'SONG_TITLE_DESC',
    SongTitleNative = 'SONG_TITLE_NATIVE',
    SongTitleNativeDesc = 'SONG_TITLE_NATIVE_DESC',
    UpdatedAt = 'UPDATED_AT',
    UpdatedAtDesc = 'UPDATED_AT_DESC',
}

/** The anime year response type, grouped by season. */
export type AnimeYear = {
    __typename?: 'AnimeYear';
    /** Object that references the season year queried */
    season?: Maybe<AnimeYearSeason>;
    /** The available seasons of the year */
    seasons?: Maybe<Array<AnimeYearSeasons>>;
    /** The year of the AnimeYear type */
    year: Scalars['Int']['output'];
};

/** The anime year response type, grouped by season. */
export type AnimeYearSeasonArgs = {
    season: AnimeSeason;
};

/** The anime year season type. */
export type AnimeYearSeason = {
    __typename?: 'AnimeYearSeason';
    /** The animes of the season year filtered */
    anime?: Maybe<AnimePaginator>;
    /** The season of the anime year */
    season: AnimeSeason;
    /** The formatted string value of the season field */
    seasonLocalized: Scalars['String']['output'];
};

/** The anime year season type. */
export type AnimeYearSeasonAnimeArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    format?: InputMaybe<AnimeFormat>;
    format_in?: InputMaybe<Array<AnimeFormat>>;
    name_like?: InputMaybe<Scalars['String']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    season?: InputMaybe<AnimeSeason>;
    season_in?: InputMaybe<Array<AnimeSeason>>;
    sort?: InputMaybe<Array<AnimeSort>>;
    year?: InputMaybe<Scalars['Int']['input']>;
    year_greater?: InputMaybe<Scalars['Int']['input']>;
    year_lesser?: InputMaybe<Scalars['Int']['input']>;
};

/** The anime year season type. */
export type AnimeYearSeasons = {
    __typename?: 'AnimeYearSeasons';
    /** The animes of the season year filtered */
    anime?: Maybe<AnimePaginator>;
    /** The season of the anime year */
    season: AnimeSeason;
    /** The formatted string value of the season field */
    seasonLocalized: Scalars['String']['output'];
};

/** The anime year season type. */
export type AnimeYearSeasonsAnimeArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    format?: InputMaybe<AnimeFormat>;
    format_in?: InputMaybe<Array<AnimeFormat>>;
    name_like?: InputMaybe<Scalars['String']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    season?: InputMaybe<AnimeSeason>;
    season_in?: InputMaybe<Array<AnimeSeason>>;
    sort?: InputMaybe<Array<AnimeSort>>;
    where?: InputMaybe<AnimeYearSeasonsAnimeWhereWhereConditions>;
    year?: InputMaybe<Scalars['Int']['input']>;
    year_greater?: InputMaybe<Scalars['Int']['input']>;
    year_lesser?: InputMaybe<Scalars['Int']['input']>;
};

/** Dynamic WHERE conditions for the `where` argument of the query `anime`. */
export type AnimeYearSeasonsAnimeWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<AnimeYearSeasonsAnimeWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<AnimeYearSeasonsAnimeWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<AnimeYearSeasonsAnimeWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<AnimeFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `anime`. */
export type AnimeYearSeasonsAnimeWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<AnimeYearSeasonsAnimeWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<AnimeYearSeasonsAnimeWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<AnimeYearSeasonsAnimeWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `anime`. */
export type AnimeYearSeasonsAnimeWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<AnimeYearSeasonsAnimeWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

/** Represents a site-wide message to be broadcasted on the homepage. */
export type Announcement = {
    __typename?: 'Announcement';
    /** The announcement text */
    content: Scalars['String']['output'];
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** The primary key of the resource */
    id: Scalars['Int']['output'];
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
};

/** Represents a site-wide message to be broadcasted on the homepage. */
export type AnnouncementCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

/** Represents a site-wide message to be broadcasted on the homepage. */
export type AnnouncementUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

export enum AnnouncementFilterableColumns {
    Content = 'CONTENT',
    CreatedAt = 'CREATED_AT',
    Id = 'ID',
    UpdatedAt = 'UPDATED_AT',
}

/** A paginated list of Announcement items. */
export type AnnouncementPaginator = {
    __typename?: 'AnnouncementPaginator';
    /** A list of Announcement items. */
    data: Array<Announcement>;
    /** Pagination information about the list of items. */
    paginatorInfo: PaginatorInfo;
};

export enum AnnouncementSort {
    CreatedAt = 'CREATED_AT',
    CreatedAtDesc = 'CREATED_AT_DESC',
    Id = 'ID',
    IdDesc = 'ID_DESC',
    Random = 'RANDOM',
    UpdatedAt = 'UPDATED_AT',
    UpdatedAtDesc = 'UPDATED_AT_DESC',
}

/**
 * Represents a musical performer of anime sequences.
 *
 * For example, Chiwa Saitou is the musical performer of the Bakemonogatari OP1 theme, among many others.
 */
export type Artist = {
    __typename?: 'Artist';
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    groups: ArtistMemberConnection;
    /** The primary key of the resource */
    id: Scalars['Int']['output'];
    images: ImageConnection;
    /** The brief information of the resource */
    information?: Maybe<Scalars['String']['output']>;
    memberPerformances: Array<Performance>;
    members: ArtistMemberConnection;
    /** The primary title of the artist */
    name: Scalars['String']['output'];
    performances: Array<Performance>;
    resources: ExternalResourceConnection;
    /** The URL slug & route key of the resource */
    slug: Scalars['String']['output'];
    synonyms: Array<Synonym>;
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
};

/**
 * Represents a musical performer of anime sequences.
 *
 * For example, Chiwa Saitou is the musical performer of the Bakemonogatari OP1 theme, among many others.
 */
export type ArtistCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

/**
 * Represents a musical performer of anime sequences.
 *
 * For example, Chiwa Saitou is the musical performer of the Bakemonogatari OP1 theme, among many others.
 */
export type ArtistGroupsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    first?: Scalars['Int']['input'];
    name?: InputMaybe<Scalars['String']['input']>;
    name_like?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<ArtistMemberSort>>;
    where?: InputMaybe<ArtistGroupsWhereWhereConditions>;
};

/**
 * Represents a musical performer of anime sequences.
 *
 * For example, Chiwa Saitou is the musical performer of the Bakemonogatari OP1 theme, among many others.
 */
export type ArtistImagesArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    facet?: InputMaybe<ImageFacet>;
    first?: Scalars['Int']['input'];
    path_like?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<ImageSort>>;
    where?: InputMaybe<ArtistImagesWhereWhereConditions>;
};

/**
 * Represents a musical performer of anime sequences.
 *
 * For example, Chiwa Saitou is the musical performer of the Bakemonogatari OP1 theme, among many others.
 */
export type ArtistMemberPerformancesArgs = {
    alias?: InputMaybe<Scalars['String']['input']>;
    as?: InputMaybe<Scalars['String']['input']>;
    first?: Scalars['Int']['input'];
    memberAlias?: InputMaybe<Scalars['String']['input']>;
    memberAs?: InputMaybe<Scalars['String']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    relevance?: InputMaybe<Scalars['Int']['input']>;
    relevance_greater?: InputMaybe<Scalars['Int']['input']>;
    relevance_lesser?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<PerformanceSort>>;
    where?: InputMaybe<ArtistMemberPerformancesWhereWhereConditions>;
};

/**
 * Represents a musical performer of anime sequences.
 *
 * For example, Chiwa Saitou is the musical performer of the Bakemonogatari OP1 theme, among many others.
 */
export type ArtistMembersArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    first?: Scalars['Int']['input'];
    name?: InputMaybe<Scalars['String']['input']>;
    name_like?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<ArtistMemberSort>>;
    where?: InputMaybe<ArtistMembersWhereWhereConditions>;
};

/**
 * Represents a musical performer of anime sequences.
 *
 * For example, Chiwa Saitou is the musical performer of the Bakemonogatari OP1 theme, among many others.
 */
export type ArtistPerformancesArgs = {
    alias?: InputMaybe<Scalars['String']['input']>;
    as?: InputMaybe<Scalars['String']['input']>;
    first?: Scalars['Int']['input'];
    memberAlias?: InputMaybe<Scalars['String']['input']>;
    memberAs?: InputMaybe<Scalars['String']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    relevance?: InputMaybe<Scalars['Int']['input']>;
    relevance_greater?: InputMaybe<Scalars['Int']['input']>;
    relevance_lesser?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<PerformanceSort>>;
    where?: InputMaybe<ArtistPerformancesWhereWhereConditions>;
};

/**
 * Represents a musical performer of anime sequences.
 *
 * For example, Chiwa Saitou is the musical performer of the Bakemonogatari OP1 theme, among many others.
 */
export type ArtistResourcesArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    externalId?: InputMaybe<Scalars['Int']['input']>;
    first?: Scalars['Int']['input'];
    site?: InputMaybe<ResourceSite>;
    sort?: InputMaybe<Array<ExternalResourceSort>>;
    where?: InputMaybe<ArtistResourcesWhereWhereConditions>;
};

/**
 * Represents a musical performer of anime sequences.
 *
 * For example, Chiwa Saitou is the musical performer of the Bakemonogatari OP1 theme, among many others.
 */
export type ArtistSynonymsArgs = {
    sort?: InputMaybe<Array<SynonymSort>>;
    type?: InputMaybe<SynonymType>;
    where?: InputMaybe<ArtistSynonymsWhereWhereConditions>;
};

/**
 * Represents a musical performer of anime sequences.
 *
 * For example, Chiwa Saitou is the musical performer of the Bakemonogatari OP1 theme, among many others.
 */
export type ArtistUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

export enum ArtistFilterableColumns {
    CreatedAt = 'CREATED_AT',
    Id = 'ID',
    Information = 'INFORMATION',
    Name = 'NAME',
    Slug = 'SLUG',
    UpdatedAt = 'UPDATED_AT',
}

/** Dynamic WHERE conditions for the `where` argument of the query `groups`. */
export type ArtistGroupsWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<ArtistGroupsWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<ArtistGroupsWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<ArtistGroupsWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<ArtistFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `groups`. */
export type ArtistGroupsWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<ArtistGroupsWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<ArtistGroupsWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<ArtistGroupsWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `groups`. */
export type ArtistGroupsWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<ArtistGroupsWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `images`. */
export type ArtistImagesWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<ArtistImagesWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<ArtistImagesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<ArtistImagesWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<ImageFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `images`. */
export type ArtistImagesWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<ArtistImagesWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<ArtistImagesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<ArtistImagesWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `images`. */
export type ArtistImagesWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<ArtistImagesWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

/** A paginated list of Artist edges. */
export type ArtistMemberConnection = {
    __typename?: 'ArtistMemberConnection';
    /** A list of Artist edges. */
    edges: Array<ArtistMemberEdge>;
    /** A list of Artist resources. Use this if you don't care about pivot fields. */
    nodes: Array<Artist>;
    /** Pagination information about the list of edges. */
    pageInfo: PageInfo;
};

export type ArtistMemberEdge = {
    __typename?: 'ArtistMemberEdge';
    /** Used to distinguish member by alias */
    alias?: Maybe<Scalars['String']['output']>;
    /** Used to distinguish member by character */
    as?: Maybe<Scalars['String']['output']>;
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** The Artist node. */
    node: Artist;
    /** Used to extra annotation, like member role */
    notes?: Maybe<Scalars['String']['output']>;
    /** Used to determine the relevance order of members in group */
    relevance: Scalars['Int']['output'];
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
};

export type ArtistMemberEdgeCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

export type ArtistMemberEdgeUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `memberPerformances`. */
export type ArtistMemberPerformancesWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<ArtistMemberPerformancesWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<ArtistMemberPerformancesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<ArtistMemberPerformancesWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<PerformanceFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `memberPerformances`. */
export type ArtistMemberPerformancesWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<ArtistMemberPerformancesWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<ArtistMemberPerformancesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<ArtistMemberPerformancesWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `memberPerformances`. */
export type ArtistMemberPerformancesWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<ArtistMemberPerformancesWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

export enum ArtistMemberSort {
    CreatedAt = 'CREATED_AT',
    CreatedAtDesc = 'CREATED_AT_DESC',
    Id = 'ID',
    IdDesc = 'ID_DESC',
    MemberAlias = 'MEMBER_ALIAS',
    MemberAliasDesc = 'MEMBER_ALIAS_DESC',
    MemberAs = 'MEMBER_AS',
    MemberAsDesc = 'MEMBER_AS_DESC',
    MemberRelevance = 'MEMBER_RELEVANCE',
    MemberRelevanceDesc = 'MEMBER_RELEVANCE_DESC',
    Name = 'NAME',
    NameDesc = 'NAME_DESC',
    Random = 'RANDOM',
    UpdatedAt = 'UPDATED_AT',
    UpdatedAtDesc = 'UPDATED_AT_DESC',
}

/** Dynamic WHERE conditions for the `where` argument of the query `members`. */
export type ArtistMembersWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<ArtistMembersWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<ArtistMembersWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<ArtistMembersWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<ArtistFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `members`. */
export type ArtistMembersWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<ArtistMembersWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<ArtistMembersWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<ArtistMembersWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `members`. */
export type ArtistMembersWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<ArtistMembersWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

/** A paginated list of Artist items. */
export type ArtistPaginator = {
    __typename?: 'ArtistPaginator';
    /** A list of Artist items. */
    data: Array<Artist>;
    /** Pagination information about the list of items. */
    paginatorInfo: PaginatorInfo;
};

/** Dynamic WHERE conditions for the `where` argument of the query `performances`. */
export type ArtistPerformancesWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<ArtistPerformancesWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<ArtistPerformancesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<ArtistPerformancesWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<PerformanceFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `performances`. */
export type ArtistPerformancesWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<ArtistPerformancesWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<ArtistPerformancesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<ArtistPerformancesWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `performances`. */
export type ArtistPerformancesWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<ArtistPerformancesWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `resources`. */
export type ArtistResourcesWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<ArtistResourcesWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<ArtistResourcesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<ArtistResourcesWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<ExternalResourceFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `resources`. */
export type ArtistResourcesWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<ArtistResourcesWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<ArtistResourcesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<ArtistResourcesWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `resources`. */
export type ArtistResourcesWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<ArtistResourcesWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

export enum ArtistSort {
    CreatedAt = 'CREATED_AT',
    CreatedAtDesc = 'CREATED_AT_DESC',
    Id = 'ID',
    IdDesc = 'ID_DESC',
    Name = 'NAME',
    NameDesc = 'NAME_DESC',
    Random = 'RANDOM',
    UpdatedAt = 'UPDATED_AT',
    UpdatedAtDesc = 'UPDATED_AT_DESC',
}

/** Dynamic WHERE conditions for the `where` argument of the query `synonyms`. */
export type ArtistSynonymsWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<ArtistSynonymsWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<ArtistSynonymsWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<ArtistSynonymsWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<SynonymFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `synonyms`. */
export type ArtistSynonymsWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<ArtistSynonymsWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<ArtistSynonymsWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<ArtistSynonymsWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `synonyms`. */
export type ArtistSynonymsWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<ArtistSynonymsWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

/**
 * Represents the audio track of a video.
 *
 * For example, the audio Bakemonogatari-OP1.ogg represents the audio track of the Bakemonogatari-OP1.webm video.
 */
export type Audio = {
    __typename?: 'Audio';
    /** The basename of the file in storage */
    basename: Scalars['String']['output'];
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** The filename of the file in storage */
    filename: Scalars['String']['output'];
    /** The primary key of the resource */
    id: Scalars['Int']['output'];
    /** The URL to stream the file from storage */
    link: Scalars['String']['output'];
    /** The media type of the file in storage */
    mimetype: Scalars['String']['output'];
    /** The path of the file in storage */
    path: Scalars['String']['output'];
    /** The size of the file in storage in Bytes */
    size: Scalars['Int']['output'];
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
    videos: Array<Video>;
};

/**
 * Represents the audio track of a video.
 *
 * For example, the audio Bakemonogatari-OP1.ogg represents the audio track of the Bakemonogatari-OP1.webm video.
 */
export type AudioCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

/**
 * Represents the audio track of a video.
 *
 * For example, the audio Bakemonogatari-OP1.ogg represents the audio track of the Bakemonogatari-OP1.webm video.
 */
export type AudioUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

/**
 * Represents the audio track of a video.
 *
 * For example, the audio Bakemonogatari-OP1.ogg represents the audio track of the Bakemonogatari-OP1.webm video.
 */
export type AudioVideosArgs = {
    first?: Scalars['Int']['input'];
    page?: InputMaybe<Scalars['Int']['input']>;
};

export enum AudioFilterableColumns {
    Basename = 'BASENAME',
    CreatedAt = 'CREATED_AT',
    Filename = 'FILENAME',
    Id = 'ID',
    Mimetype = 'MIMETYPE',
    Path = 'PATH',
    Size = 'SIZE',
    UpdatedAt = 'UPDATED_AT',
}

/** A paginated list of Audio items. */
export type AudioPaginator = {
    __typename?: 'AudioPaginator';
    /** A list of Audio items. */
    data: Array<Audio>;
    /** Pagination information about the list of items. */
    paginatorInfo: PaginatorInfo;
};

export enum AudioSort {
    Basename = 'BASENAME',
    BasenameDesc = 'BASENAME_DESC',
    CreatedAt = 'CREATED_AT',
    CreatedAtDesc = 'CREATED_AT_DESC',
    Filename = 'FILENAME',
    FilenameDesc = 'FILENAME_DESC',
    Id = 'ID',
    IdDesc = 'ID_DESC',
    Random = 'RANDOM',
    Size = 'SIZE',
    SizeDesc = 'SIZE_DESC',
    UpdatedAt = 'UPDATED_AT',
    UpdatedAtDesc = 'UPDATED_AT_DESC',
}

/**
 * Represents a database dump of selected tables at a given point in time.
 *
 * For example, the animethemes-db-dump-wiki-1663559663946.sql dump represents the database dump of wiki tables performed at 2022-09-19.
 */
export type Dump = {
    __typename?: 'Dump';
    /** The date that the resource was created */
    createdAt: Scalars['String']['output'];
    /** The primary key of the resource */
    id: Scalars['Int']['output'];
    /** The URL to download the file from storage */
    link: Scalars['String']['output'];
    /** The path of the file in storage */
    path: Scalars['String']['output'];
    /** The date that the resource was updated */
    updatedAt: Scalars['String']['output'];
};

/**
 * Represents a database dump of selected tables at a given point in time.
 *
 * For example, the animethemes-db-dump-wiki-1663559663946.sql dump represents the database dump of wiki tables performed at 2022-09-19.
 */
export type DumpCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

/**
 * Represents a database dump of selected tables at a given point in time.
 *
 * For example, the animethemes-db-dump-wiki-1663559663946.sql dump represents the database dump of wiki tables performed at 2022-09-19.
 */
export type DumpUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

export enum DumpFilterableColumns {
    CreatedAt = 'CREATED_AT',
    Id = 'ID',
    Path = 'PATH',
    UpdatedAt = 'UPDATED_AT',
}

/** A paginated list of Dump items. */
export type DumpPaginator = {
    __typename?: 'DumpPaginator';
    /** A list of Dump items. */
    data: Array<Dump>;
    /** Pagination information about the list of items. */
    paginatorInfo: PaginatorInfo;
};

export enum DumpSort {
    CreatedAt = 'CREATED_AT',
    CreatedAtDesc = 'CREATED_AT_DESC',
    Id = 'ID',
    IdDesc = 'ID_DESC',
    Random = 'RANDOM',
    UpdatedAt = 'UPDATED_AT',
    UpdatedAtDesc = 'UPDATED_AT_DESC',
}

/**
 * Represents an anime entry on the external profile.
 *
 * For example, Hibike Euphonium! is marked as completed on the profile AnimeThemes.
 */
export type ExternalEntry = {
    __typename?: 'ExternalEntry';
    anime: Anime;
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    externalprofile?: Maybe<ExternalProfile>;
    /** The primary key of the resource */
    id: Scalars['Int']['output'];
    /** The favorite state of the entry on the external site */
    isFavorite?: Maybe<Scalars['Boolean']['output']>;
    /** The score of the entry on the external site */
    score?: Maybe<Scalars['Float']['output']>;
    /** The status of the entry on the external site */
    status: ExternalEntryStatus;
    /** The formatted string value of the status field */
    statusLocalized: Scalars['String']['output'];
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
};

/**
 * Represents an anime entry on the external profile.
 *
 * For example, Hibike Euphonium! is marked as completed on the profile AnimeThemes.
 */
export type ExternalEntryCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

/**
 * Represents an anime entry on the external profile.
 *
 * For example, Hibike Euphonium! is marked as completed on the profile AnimeThemes.
 */
export type ExternalEntryUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

export enum ExternalEntryStatus {
    Completed = 'COMPLETED',
    Dropped = 'DROPPED',
    Paused = 'PAUSED',
    PlanToWatch = 'PLAN_TO_WATCH',
    Rewatching = 'REWATCHING',
    Watching = 'WATCHING',
}

/** Represents a user profile on the external site like MAL. */
export type ExternalProfile = {
    __typename?: 'ExternalProfile';
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** The primary key of the resource */
    id: Scalars['Int']['output'];
    /** The title of the profile */
    name: Scalars['String']['output'];
    /** The site the profile belongs to */
    site: ExternalProfileSite;
    /** The formatted string value of the site field */
    siteLocalized: Scalars['String']['output'];
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
    /** The state of who can see the profile */
    visibility: ExternalProfileVisibility;
    /** The formatted string value of the visibility field */
    visibilityLocalized: Scalars['String']['output'];
};

/** Represents a user profile on the external site like MAL. */
export type ExternalProfileCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

/** Represents a user profile on the external site like MAL. */
export type ExternalProfileUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

export enum ExternalProfileFilterableColumns {
    CreatedAt = 'CREATED_AT',
    Id = 'ID',
    Name = 'NAME',
    Site = 'SITE',
    UpdatedAt = 'UPDATED_AT',
    Visibility = 'VISIBILITY',
}

/** A paginated list of ExternalProfile items. */
export type ExternalProfilePaginator = {
    __typename?: 'ExternalProfilePaginator';
    /** A list of ExternalProfile items. */
    data: Array<ExternalProfile>;
    /** Pagination information about the list of items. */
    paginatorInfo: PaginatorInfo;
};

export enum ExternalProfileSite {
    Anilist = 'ANILIST',
    Kitsu = 'KITSU',
    Mal = 'MAL',
}

/** Represents a notification that is sent to the user when a profile is synced. */
export type ExternalProfileSyncedNotification = {
    __typename?: 'ExternalProfileSyncedNotification';
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    profile: ExternalProfile;
    /** The id of the profile */
    profileId: Scalars['Int']['output'];
    /** The name of the profile */
    profileName: Scalars['String']['output'];
    /** The date that the user read the notification */
    readAt?: Maybe<Scalars['String']['output']>;
    /** The type of the notification */
    type: NotificationType;
};

/** Represents a notification that is sent to the user when a profile is synced. */
export type ExternalProfileSyncedNotificationCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

/** Represents a notification that is sent to the user when a profile is synced. */
export type ExternalProfileSyncedNotificationReadAtArgs = {
    format?: Scalars['String']['input'];
};

export enum ExternalProfileVisibility {
    Private = 'PRIVATE',
    Public = 'PUBLIC',
}

/**
 * Represents a site with supplementary information for another resource such as an anime or artist.
 *
 * For example, the Bakemonogatari anime has MyAnimeList, AniList and AniDB resources.
 */
export type ExternalResource = {
    __typename?: 'ExternalResource';
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** The primary key of the resource in the external site */
    externalId?: Maybe<Scalars['Int']['output']>;
    /** The primary key of the resource */
    id: Scalars['Int']['output'];
    /** The URL of the external site */
    link: Scalars['String']['output'];
    /** The external site that the resource belongs to */
    site: ResourceSite;
    /** The formatted string value of the site field */
    siteLocalized: Scalars['String']['output'];
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
};

/**
 * Represents a site with supplementary information for another resource such as an anime or artist.
 *
 * For example, the Bakemonogatari anime has MyAnimeList, AniList and AniDB resources.
 */
export type ExternalResourceCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

/**
 * Represents a site with supplementary information for another resource such as an anime or artist.
 *
 * For example, the Bakemonogatari anime has MyAnimeList, AniList and AniDB resources.
 */
export type ExternalResourceUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

/** A paginated list of ExternalResource edges. */
export type ExternalResourceConnection = {
    __typename?: 'ExternalResourceConnection';
    /** A list of ExternalResource edges. */
    edges: Array<ExternalResourceEdge>;
    /** A list of ExternalResource resources. Use this if you don't care about pivot fields. */
    nodes: Array<ExternalResource>;
    /** Pagination information about the list of edges. */
    pageInfo: PageInfo;
};

export type ExternalResourceEdge = {
    __typename?: 'ExternalResourceEdge';
    /** Used to distinguish resources that map to the same resourceable */
    as?: Maybe<Scalars['String']['output']>;
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** The External Resource node. */
    node: ExternalResource;
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
};

export type ExternalResourceEdgeCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

export type ExternalResourceEdgeUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

export enum ExternalResourceFilterableColumns {
    CreatedAt = 'CREATED_AT',
    ExternalId = 'EXTERNAL_ID',
    Id = 'ID',
    Link = 'LINK',
    Site = 'SITE',
    UpdatedAt = 'UPDATED_AT',
}

export enum ExternalResourceSort {
    CreatedAt = 'CREATED_AT',
    CreatedAtDesc = 'CREATED_AT_DESC',
    ExternalId = 'EXTERNAL_ID',
    ExternalIdDesc = 'EXTERNAL_ID_DESC',
    Id = 'ID',
    IdDesc = 'ID_DESC',
    Link = 'LINK',
    LinkDesc = 'LINK_DESC',
    Random = 'RANDOM',
    Site = 'SITE',
    SiteDesc = 'SITE_DESC',
    UpdatedAt = 'UPDATED_AT',
    UpdatedAtDesc = 'UPDATED_AT_DESC',
}

/** Represents a video to be featured on the homepage of the site for a specified amount of time. */
export type FeaturedTheme = {
    __typename?: 'FeaturedTheme';
    animethemeentry?: Maybe<AnimeThemeEntry>;
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** The end date of the resource */
    endAt: Scalars['String']['output'];
    /** The primary key of the resource */
    id: Scalars['Int']['output'];
    /** The start date of the resource */
    startAt: Scalars['String']['output'];
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
    user?: Maybe<User>;
    video?: Maybe<Video>;
};

/** Represents a video to be featured on the homepage of the site for a specified amount of time. */
export type FeaturedThemeCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

/** Represents a video to be featured on the homepage of the site for a specified amount of time. */
export type FeaturedThemeEndAtArgs = {
    format?: Scalars['String']['input'];
};

/** Represents a video to be featured on the homepage of the site for a specified amount of time. */
export type FeaturedThemeStartAtArgs = {
    format?: Scalars['String']['input'];
};

/** Represents a video to be featured on the homepage of the site for a specified amount of time. */
export type FeaturedThemeUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

/**
 * Represents a visual component for another resource such as an anime or artist.
 *
 * For example, the Bakemonogatari anime has two images to represent small and large cover images.
 */
export type Image = {
    __typename?: 'Image';
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** The component that the resource is intended for */
    facet: ImageFacet;
    /** The formatted string value of the facet field */
    facetLocalized: Scalars['String']['output'];
    /** The primary key of the resource */
    id: Scalars['Int']['output'];
    /** The URL to stream the file from storage */
    link: Scalars['String']['output'];
    /** The path of the file in storage */
    path: Scalars['String']['output'];
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
};

/**
 * Represents a visual component for another resource such as an anime or artist.
 *
 * For example, the Bakemonogatari anime has two images to represent small and large cover images.
 */
export type ImageCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

/**
 * Represents a visual component for another resource such as an anime or artist.
 *
 * For example, the Bakemonogatari anime has two images to represent small and large cover images.
 */
export type ImageUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

/** A paginated list of Image edges. */
export type ImageConnection = {
    __typename?: 'ImageConnection';
    /** A list of Image edges. */
    edges: Array<ImageEdge>;
    /** A list of Image resources. Use this if you don't care about pivot fields. */
    nodes: Array<Image>;
    /** Pagination information about the list of edges. */
    pageInfo: PageInfo;
};

export type ImageEdge = {
    __typename?: 'ImageEdge';
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** Used to sort the images */
    depth: Scalars['Int']['output'];
    /** The Image node. */
    node: Image;
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
};

export type ImageEdgeCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

export type ImageEdgeUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

export enum ImageFacet {
    Avatar = 'AVATAR',
    Banner = 'BANNER',
    Document = 'DOCUMENT',
    Grill = 'GRILL',
    LargeCover = 'LARGE_COVER',
    SmallCover = 'SMALL_COVER',
}

export enum ImageFilterableColumns {
    CreatedAt = 'CREATED_AT',
    Facet = 'FACET',
    Id = 'ID',
    Path = 'PATH',
    UpdatedAt = 'UPDATED_AT',
}

/** A paginated list of Image items. */
export type ImagePaginator = {
    __typename?: 'ImagePaginator';
    /** A list of Image items. */
    data: Array<Image>;
    /** Pagination information about the list of items. */
    paginatorInfo: PaginatorInfo;
};

export enum ImageSort {
    CreatedAt = 'CREATED_AT',
    CreatedAtDesc = 'CREATED_AT_DESC',
    Id = 'ID',
    IdDesc = 'ID_DESC',
    Random = 'RANDOM',
    UpdatedAt = 'UPDATED_AT',
    UpdatedAtDesc = 'UPDATED_AT_DESC',
}

export enum ImageableSort {
    CreatedAt = 'CREATED_AT',
    CreatedAtDesc = 'CREATED_AT_DESC',
    Depth = 'DEPTH',
    DepthDesc = 'DEPTH_DESC',
    Id = 'ID',
    IdDesc = 'ID_DESC',
    Random = 'RANDOM',
    UpdatedAt = 'UPDATED_AT',
    UpdatedAtDesc = 'UPDATED_AT_DESC',
}

/** Represents a like of a user. */
export type Like = {
    __typename?: 'Like';
    likeable: LikeableUnion;
    user: User;
};

/** Represents the resources that can be liked */
export type LikeableUnion = AnimeThemeEntry | Playlist;

/** Represents the currently authenticated user. */
export type Me = {
    __typename?: 'Me';
    /** The date that the resource was created */
    createdAt: Scalars['String']['output'];
    /** The email of the user */
    email: Scalars['String']['output'];
    /** The date the user verified their email */
    emailVerifiedAt: Scalars['String']['output'];
    /** The primary key of the resource */
    id: Scalars['Int']['output'];
    likes: Array<Like>;
    /** The username of authenticated user */
    name: Scalars['String']['output'];
    permissions: PermissionConnection;
    playlists: Array<Playlist>;
    roles: RoleConnection;
    /** The date the user confirmed their two-factor authentication */
    twoFactorConfirmedAt: Scalars['String']['output'];
    /** The date that the resource was updated */
    updatedAt: Scalars['String']['output'];
    watchHistory: Array<WatchHistory>;
};

/** Represents the currently authenticated user. */
export type MeCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

/** Represents the currently authenticated user. */
export type MeEmailVerifiedAtArgs = {
    format?: Scalars['String']['input'];
};

/** Represents the currently authenticated user. */
export type MeLikesArgs = {
    first?: Scalars['Int']['input'];
    page?: InputMaybe<Scalars['Int']['input']>;
};

/** Represents the currently authenticated user. */
export type MePermissionsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    default?: InputMaybe<Scalars['Boolean']['input']>;
    first?: Scalars['Int']['input'];
    priority_greater?: InputMaybe<Scalars['Int']['input']>;
    priority_lesser?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<PermissionSort>>;
};

/** Represents the currently authenticated user. */
export type MePlaylistsArgs = {
    first?: Scalars['Int']['input'];
    name_like?: InputMaybe<Scalars['String']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<PlaylistSort>>;
    visibility?: InputMaybe<PlaylistVisibility>;
    where?: InputMaybe<MePlaylistsWhereWhereConditions>;
};

/** Represents the currently authenticated user. */
export type MeRolesArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    default?: InputMaybe<Scalars['Boolean']['input']>;
    first?: Scalars['Int']['input'];
    priority_greater?: InputMaybe<Scalars['Int']['input']>;
    priority_lesser?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<RoleSort>>;
};

/** Represents the currently authenticated user. */
export type MeTwoFactorConfirmedAtArgs = {
    format?: Scalars['String']['input'];
};

/** Represents the currently authenticated user. */
export type MeUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

/** Represents the currently authenticated user. */
export type MeWatchHistoryArgs = {
    first?: Scalars['Int']['input'];
    page?: InputMaybe<Scalars['Int']['input']>;
};

/** Dynamic WHERE conditions for the `where` argument of the query `playlists`. */
export type MePlaylistsWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<MePlaylistsWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<MePlaylistsWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<MePlaylistsWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<PlaylistFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `playlists`. */
export type MePlaylistsWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<MePlaylistsWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<MePlaylistsWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<MePlaylistsWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `playlists`. */
export type MePlaylistsWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<MePlaylistsWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

/** Represents a response containing a message. */
export type MessageResponse = {
    __typename?: 'MessageResponse';
    message: Scalars['String']['output'];
};

export type Mutation = {
    __typename?: 'Mutation';
    CreatePlaylist: Playlist;
    CreatePlaylistTrack: PlaylistTrack;
    DeletePlaylist: MessageResponse;
    DeletePlaylistTrack: MessageResponse;
    ToggleLike?: Maybe<Like>;
    UpdatePlaylist: Playlist;
    UpdatePlaylistTrack: PlaylistTrack;
    /** Mark a video as watched. */
    Watch?: Maybe<WatchHistory>;
};

export type MutationCreatePlaylistArgs = {
    description?: InputMaybe<Scalars['String']['input']>;
    name: Scalars['String']['input'];
    visibility: PlaylistVisibility;
};

export type MutationCreatePlaylistTrackArgs = {
    entryId: Scalars['Int']['input'];
    playlist: Scalars['String']['input'];
    position?: InputMaybe<Scalars['Int']['input']>;
    videoId: Scalars['Int']['input'];
};

export type MutationDeletePlaylistArgs = {
    id: Scalars['String']['input'];
};

export type MutationDeletePlaylistTrackArgs = {
    id: Scalars['String']['input'];
    playlist: Scalars['String']['input'];
};

export type MutationToggleLikeArgs = {
    entryId?: InputMaybe<Scalars['Int']['input']>;
    playlistId?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdatePlaylistArgs = {
    description?: InputMaybe<Scalars['String']['input']>;
    id: Scalars['String']['input'];
    name?: InputMaybe<Scalars['String']['input']>;
    visibility?: InputMaybe<PlaylistVisibility>;
};

export type MutationUpdatePlaylistTrackArgs = {
    entryId?: InputMaybe<Scalars['Int']['input']>;
    id: Scalars['String']['input'];
    playlist: Scalars['String']['input'];
    position?: InputMaybe<Scalars['Int']['input']>;
    videoId?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationWatchArgs = {
    entryId: Scalars['Int']['input'];
    videoId: Scalars['Int']['input'];
};

export enum NotificationType {
    ProfileSynced = 'PROFILE_SYNCED',
}

/** Represents the notification types. */
export type NotificationUnion = ExternalProfileSyncedNotification;

/** Allows ordering a list of records. */
export type OrderByClause = {
    /** The column that is used for ordering. */
    column: Scalars['String']['input'];
    /** The direction that is used for ordering. */
    order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
    /** Amount of items. */
    Count = 'COUNT',
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
    /** Average. */
    Avg = 'AVG',
    /** Amount of items. */
    Count = 'COUNT',
    /** Maximum. */
    Max = 'MAX',
    /** Minimum. */
    Min = 'MIN',
    /** Sum. */
    Sum = 'SUM',
}

/**
 * Represents a static markdown page used for guides and other documentation.
 *
 * For example, the 'encoding/audio_normalization' page represents the documentation for audio normalization.
 */
export type Page = {
    __typename?: 'Page';
    /** The body content of the resource */
    body: Scalars['String']['output'];
    /** The date that the resource was created */
    createdAt: Scalars['String']['output'];
    /** The primary key of the resource */
    id: Scalars['Int']['output'];
    /** The primary title of the page */
    name: Scalars['String']['output'];
    next?: Maybe<Page>;
    previous?: Maybe<Page>;
    /** The URL slug & route key of the resource */
    slug: Scalars['String']['output'];
    /** The date that the resource was updated */
    updatedAt: Scalars['String']['output'];
};

/**
 * Represents a static markdown page used for guides and other documentation.
 *
 * For example, the 'encoding/audio_normalization' page represents the documentation for audio normalization.
 */
export type PageCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

/**
 * Represents a static markdown page used for guides and other documentation.
 *
 * For example, the 'encoding/audio_normalization' page represents the documentation for audio normalization.
 */
export type PageUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

export enum PageFilterableColumns {
    Body = 'BODY',
    CreatedAt = 'CREATED_AT',
    Id = 'ID',
    Name = 'NAME',
    Slug = 'SLUG',
    UpdatedAt = 'UPDATED_AT',
}

/** Information about pagination using a Relay style cursor connection. */
export type PageInfo = {
    __typename?: 'PageInfo';
    /** Number of nodes in the current page. */
    count: Scalars['Int']['output'];
    /** Index of the current page. */
    currentPage: Scalars['Int']['output'];
    /** The cursor to continue paginating forwards. */
    endCursor?: Maybe<Scalars['String']['output']>;
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output'];
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output'];
    /** Index of the last available page. */
    lastPage: Scalars['Int']['output'];
    /** The cursor to continue paginating backwards. */
    startCursor?: Maybe<Scalars['String']['output']>;
    /** Total number of nodes in the paginated connection. */
    total: Scalars['Int']['output'];
};

/** A paginated list of Page items. */
export type PagePaginator = {
    __typename?: 'PagePaginator';
    /** A list of Page items. */
    data: Array<Page>;
    /** Pagination information about the list of items. */
    paginatorInfo: PaginatorInfo;
};

export enum PageSort {
    CreatedAt = 'CREATED_AT',
    CreatedAtDesc = 'CREATED_AT_DESC',
    Id = 'ID',
    IdDesc = 'ID_DESC',
    Name = 'NAME',
    NameDesc = 'NAME_DESC',
    Random = 'RANDOM',
    Slug = 'SLUG',
    SlugDesc = 'SLUG_DESC',
    UpdatedAt = 'UPDATED_AT',
    UpdatedAtDesc = 'UPDATED_AT_DESC',
}

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
    __typename?: 'PaginatorInfo';
    /** Number of items in the current page. */
    count: Scalars['Int']['output'];
    /** Index of the current page. */
    currentPage: Scalars['Int']['output'];
    /** Index of the first item in the current page. */
    firstItem?: Maybe<Scalars['Int']['output']>;
    /** Are there more pages after this one? */
    hasMorePages: Scalars['Boolean']['output'];
    /** Index of the last item in the current page. */
    lastItem?: Maybe<Scalars['Int']['output']>;
    /** Index of the last available page. */
    lastPage: Scalars['Int']['output'];
    /** Number of items per page. */
    perPage: Scalars['Int']['output'];
    /** Number of total available items. */
    total: Scalars['Int']['output'];
};

/** Represents the link between a song and an artist or group. */
export type Performance = {
    __typename?: 'Performance';
    /** The alias the artist is using for this performance */
    alias?: Maybe<Scalars['String']['output']>;
    artist: Artist;
    /** The character the artist is performing as */
    as?: Maybe<Scalars['String']['output']>;
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** The primary key of the resource */
    id: Scalars['Int']['output'];
    member?: Maybe<Artist>;
    /** The alias the member is using for this performance */
    memberAlias?: Maybe<Scalars['String']['output']>;
    /** The character the member is performing as */
    memberAs?: Maybe<Scalars['String']['output']>;
    /** Used to determine the relevance order of artists in performances */
    relevance: Scalars['Int']['output'];
    song: Song;
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
};

/** Represents the link between a song and an artist or group. */
export type PerformanceCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

/** Represents the link between a song and an artist or group. */
export type PerformanceUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

export enum PerformanceFilterableColumns {
    Alias = 'ALIAS',
    As = 'AS',
    CreatedAt = 'CREATED_AT',
    Id = 'ID',
    MemberAlias = 'MEMBER_ALIAS',
    MemberAs = 'MEMBER_AS',
    Relevance = 'RELEVANCE',
    UpdatedAt = 'UPDATED_AT',
}

export enum PerformanceSort {
    Alias = 'ALIAS',
    AliasDesc = 'ALIAS_DESC',
    As = 'AS',
    AsDesc = 'AS_DESC',
    CreatedAt = 'CREATED_AT',
    CreatedAtDesc = 'CREATED_AT_DESC',
    Id = 'ID',
    IdDesc = 'ID_DESC',
    MemberAlias = 'MEMBER_ALIAS',
    MemberAliasDesc = 'MEMBER_ALIAS_DESC',
    MemberAs = 'MEMBER_AS',
    MemberAsDesc = 'MEMBER_AS_DESC',
    Random = 'RANDOM',
    Relevance = 'RELEVANCE',
    RelevanceDesc = 'RELEVANCE_DESC',
    UpdatedAt = 'UPDATED_AT',
    UpdatedAtDesc = 'UPDATED_AT_DESC',
}

/** Represents an assignable label for users and roles that authorizes a particular action in AnimeThemes. */
export type Permission = {
    __typename?: 'Permission';
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** The primary key of the resource */
    id: Scalars['Int']['output'];
    /** The label of the resource */
    name: Scalars['String']['output'];
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
};

/** Represents an assignable label for users and roles that authorizes a particular action in AnimeThemes. */
export type PermissionCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

/** Represents an assignable label for users and roles that authorizes a particular action in AnimeThemes. */
export type PermissionUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

/** A paginated list of Permission edges. */
export type PermissionConnection = {
    __typename?: 'PermissionConnection';
    /** A list of Permission edges. */
    edges: Array<PermissionEdge>;
    /** A list of Permission resources. Use this if you don't care about pivot fields. */
    nodes: Array<Permission>;
    /** Pagination information about the list of edges. */
    pageInfo: PageInfo;
};

export type PermissionEdge = {
    __typename?: 'PermissionEdge';
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** The Permission node. */
    node: Permission;
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
};

export type PermissionEdgeCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

export type PermissionEdgeUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

export enum PermissionSort {
    CreatedAt = 'CREATED_AT',
    CreatedAtDesc = 'CREATED_AT_DESC',
    Id = 'ID',
    IdDesc = 'ID_DESC',
    Name = 'NAME',
    NameDesc = 'NAME_DESC',
    Random = 'RANDOM',
    UpdatedAt = 'UPDATED_AT',
    UpdatedAtDesc = 'UPDATED_AT_DESC',
}

/**
 * Represents a list of ordered tracks intended for continuous playback.
 *
 * For example, a "/r/anime's Best OPs and EDs of 2022" playlist may contain a collection of tracks allowing the continuous playback of Best OP and ED nominations for the /r/anime Awards.
 */
export type Playlist = {
    __typename?: 'Playlist';
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** The description of the playlist */
    description?: Maybe<Scalars['String']['output']>;
    first?: Maybe<PlaylistTrack>;
    /** The primary key of the resource */
    id: Scalars['String']['output'];
    images: ImageConnection;
    last?: Maybe<PlaylistTrack>;
    /** The number of likes recorded for the resource */
    likesCount: Scalars['Int']['output'];
    /** The title of the playlist */
    name: Scalars['String']['output'];
    tracks: Array<PlaylistTrack>;
    /** The number of tracks belonging to the resource */
    tracksCount: Scalars['Int']['output'];
    /** The existence of tracks belonging to the resource */
    tracksExists: Scalars['Boolean']['output'];
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
    user: User;
    /** The state of who can see the playlist */
    visibility: PlaylistVisibility;
    /** The formatted string value of the visibility field */
    visibilityLocalized: Scalars['String']['output'];
};

/**
 * Represents a list of ordered tracks intended for continuous playback.
 *
 * For example, a "/r/anime's Best OPs and EDs of 2022" playlist may contain a collection of tracks allowing the continuous playback of Best OP and ED nominations for the /r/anime Awards.
 */
export type PlaylistCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

/**
 * Represents a list of ordered tracks intended for continuous playback.
 *
 * For example, a "/r/anime's Best OPs and EDs of 2022" playlist may contain a collection of tracks allowing the continuous playback of Best OP and ED nominations for the /r/anime Awards.
 */
export type PlaylistImagesArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    facet?: InputMaybe<ImageFacet>;
    first?: Scalars['Int']['input'];
    path_like?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<ImageSort>>;
    where?: InputMaybe<PlaylistImagesWhereWhereConditions>;
};

/**
 * Represents a list of ordered tracks intended for continuous playback.
 *
 * For example, a "/r/anime's Best OPs and EDs of 2022" playlist may contain a collection of tracks allowing the continuous playback of Best OP and ED nominations for the /r/anime Awards.
 */
export type PlaylistTracksArgs = {
    first?: Scalars['Int']['input'];
    page?: InputMaybe<Scalars['Int']['input']>;
    position?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<PlaylistTrackSort>>;
    where?: InputMaybe<PlaylistTracksWhereWhereConditions>;
};

/**
 * Represents a list of ordered tracks intended for continuous playback.
 *
 * For example, a "/r/anime's Best OPs and EDs of 2022" playlist may contain a collection of tracks allowing the continuous playback of Best OP and ED nominations for the /r/anime Awards.
 */
export type PlaylistUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

export enum PlaylistFilterableColumns {
    CreatedAt = 'CREATED_AT',
    Description = 'DESCRIPTION',
    Id = 'ID',
    Name = 'NAME',
    UpdatedAt = 'UPDATED_AT',
    Visibility = 'VISIBILITY',
}

/** Dynamic WHERE conditions for the `where` argument of the query `images`. */
export type PlaylistImagesWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<PlaylistImagesWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<PlaylistImagesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<PlaylistImagesWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<ImageFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `images`. */
export type PlaylistImagesWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<PlaylistImagesWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<PlaylistImagesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<PlaylistImagesWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `images`. */
export type PlaylistImagesWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<PlaylistImagesWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

/** A paginated list of Playlist items. */
export type PlaylistPaginator = {
    __typename?: 'PlaylistPaginator';
    /** A list of Playlist items. */
    data: Array<Playlist>;
    /** Pagination information about the list of items. */
    paginatorInfo: PaginatorInfo;
};

export enum PlaylistSort {
    CreatedAt = 'CREATED_AT',
    CreatedAtDesc = 'CREATED_AT_DESC',
    Id = 'ID',
    IdDesc = 'ID_DESC',
    LikesCount = 'LIKES_COUNT',
    LikesCountDesc = 'LIKES_COUNT_DESC',
    Name = 'NAME',
    NameDesc = 'NAME_DESC',
    Random = 'RANDOM',
    TracksCount = 'TRACKS_COUNT',
    TracksCountDesc = 'TRACKS_COUNT_DESC',
    UpdatedAt = 'UPDATED_AT',
    UpdatedAtDesc = 'UPDATED_AT_DESC',
}

/**
 * Represents an entry in a playlist.
 *
 * For example, a "/r/anime's Best OPs and EDs of 2022" playlist may contain a track for the ParipiKoumei-OP1.webm video.
 */
export type PlaylistTrack = {
    __typename?: 'PlaylistTrack';
    animethemeentry: AnimeThemeEntry;
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** The primary key of the resource */
    id: Scalars['String']['output'];
    /** @deprecated No longer supported */
    next?: Maybe<PlaylistTrack>;
    playlist: Playlist;
    /** The position of the playlist track within the playlist */
    position: Scalars['Int']['output'];
    /** @deprecated No longer supported */
    previous?: Maybe<PlaylistTrack>;
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
    video: Video;
};

/**
 * Represents an entry in a playlist.
 *
 * For example, a "/r/anime's Best OPs and EDs of 2022" playlist may contain a track for the ParipiKoumei-OP1.webm video.
 */
export type PlaylistTrackCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

/**
 * Represents an entry in a playlist.
 *
 * For example, a "/r/anime's Best OPs and EDs of 2022" playlist may contain a track for the ParipiKoumei-OP1.webm video.
 */
export type PlaylistTrackUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

export enum PlaylistTrackFilterableColumns {
    CreatedAt = 'CREATED_AT',
    EntryId = 'ENTRY_ID',
    Id = 'ID',
    Position = 'POSITION',
    UpdatedAt = 'UPDATED_AT',
    VideoId = 'VIDEO_ID',
}

/** A paginated list of PlaylistTrack items. */
export type PlaylistTrackPaginator = {
    __typename?: 'PlaylistTrackPaginator';
    /** A list of PlaylistTrack items. */
    data: Array<PlaylistTrack>;
    /** Pagination information about the list of items. */
    paginatorInfo: PaginatorInfo;
};

export enum PlaylistTrackSort {
    CreatedAt = 'CREATED_AT',
    CreatedAtDesc = 'CREATED_AT_DESC',
    Id = 'ID',
    IdDesc = 'ID_DESC',
    Position = 'POSITION',
    PositionDesc = 'POSITION_DESC',
    Random = 'RANDOM',
    UpdatedAt = 'UPDATED_AT',
    UpdatedAtDesc = 'UPDATED_AT_DESC',
}

/** Dynamic WHERE conditions for the `where` argument of the query `tracks`. */
export type PlaylistTracksWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<PlaylistTracksWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<PlaylistTracksWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<PlaylistTracksWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<PlaylistTrackFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `tracks`. */
export type PlaylistTracksWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<PlaylistTracksWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<PlaylistTracksWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<PlaylistTracksWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `tracks`. */
export type PlaylistTracksWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<PlaylistTracksWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

export enum PlaylistVisibility {
    Private = 'PRIVATE',
    Public = 'PUBLIC',
    Unlisted = 'UNLISTED',
}

/** Indicates what fields are available at the top level of a query operation. */
export type Query = {
    __typename?: 'Query';
    /** Returns an anime resource. */
    anime?: Maybe<Anime>;
    /** Returns a listing of anime resources given fields. */
    animePagination: AnimePaginator;
    /** Returns a listing of anime themes resources given fields. */
    animethemePagination: AnimeThemePaginator;
    /** Shuffle themes. */
    animethemeShuffle: Array<AnimeTheme>;
    animethemeentryPagination: AnimeThemeEntryPaginator;
    /** Returns a list of years grouped by its seasons. */
    animeyears: Array<AnimeYear>;
    /** Returns a listing of announcement resources given fields. */
    announcementPagination: AnnouncementPaginator;
    /** Returns an artist resource. */
    artist?: Maybe<Artist>;
    /** Returns a listing of artist resources given fields. */
    artistPagination: ArtistPaginator;
    /** Returns a listing of audio resources given fields. */
    audioPagination: AudioPaginator;
    /** Returns the first featured theme where the current date is between start_at and end_at dates. */
    currentfeaturedtheme?: Maybe<FeaturedTheme>;
    /** Returns a listing of dump resources given fields. */
    dumpPagination: DumpPaginator;
    /** Returns a listing of external profile resources given fields. */
    externalprofilePagination: ExternalProfilePaginator;
    /** Filter anime by its external id on given site. */
    findAnimeByExternalSite: Array<Anime>;
    /** Returns a listing of images resources given fields. */
    imagePagination: ImagePaginator;
    /** Returns the data of the currently authenticated user. */
    me?: Maybe<Me>;
    /** Returns a page resource. */
    page?: Maybe<Page>;
    /** Returns a listing of page resources given fields. */
    pagePagination: PagePaginator;
    /** Returns a playlist resource. */
    playlist?: Maybe<Playlist>;
    /** Returns a listing of playlist resources given fields. */
    playlistPagination: PlaylistPaginator;
    /** Returns a playlist track resource. */
    playlisttrack?: Maybe<PlaylistTrack>;
    /** Returns a listing of playlist track resources given fields. */
    playlisttrackPagination: PlaylistTrackPaginator;
    /** Returns a listing of resources that match a given search term. */
    search: Search;
    /** Returns a series resource. */
    series?: Maybe<Series>;
    /** Returns a listing of series resources given fields. */
    seriesPagination: SeriesPaginator;
    /** Returns a listing of song resources given fields. */
    songPagination: SongPaginator;
    /** Returns a studio resource. */
    studio?: Maybe<Studio>;
    /** Returns a listing of studio resources given fields. */
    studioPagination: StudioPaginator;
    /** Returns a listing of theme group resources given fields. */
    themegroupPagination: ThemeGroupPaginator;
    /** Returns a video resource. */
    video?: Maybe<Video>;
    /** Returns a listing of video resources given fields. */
    videoPagination: VideoPaginator;
};

/** Indicates what fields are available at the top level of a query operation. */
export type QueryAnimeArgs = {
    slug: Scalars['String']['input'];
};

/** Indicates what fields are available at the top level of a query operation. */
export type QueryAnimePaginationArgs = {
    first?: Scalars['Int']['input'];
    format?: InputMaybe<AnimeFormat>;
    format_in?: InputMaybe<Array<AnimeFormat>>;
    id?: InputMaybe<Scalars['Int']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    name_like?: InputMaybe<Scalars['String']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    season?: InputMaybe<AnimeSeason>;
    season_in?: InputMaybe<Array<AnimeSeason>>;
    slug?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<AnimeSort>>;
    where?: InputMaybe<QueryAnimePaginationWhereWhereConditions>;
    year?: InputMaybe<Scalars['Int']['input']>;
    year_greater?: InputMaybe<Scalars['Int']['input']>;
    year_lesser?: InputMaybe<Scalars['Int']['input']>;
};

/** Indicates what fields are available at the top level of a query operation. */
export type QueryAnimethemePaginationArgs = {
    first?: Scalars['Int']['input'];
    id?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sequence?: InputMaybe<Scalars['Int']['input']>;
    sequence_greater?: InputMaybe<Scalars['Int']['input']>;
    sequence_lesser?: InputMaybe<Scalars['Int']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<AnimeThemeSort>>;
    type?: InputMaybe<ThemeType>;
    type_in?: InputMaybe<Array<ThemeType>>;
    where?: InputMaybe<QueryAnimethemePaginationWhereWhereConditions>;
};

/** Indicates what fields are available at the top level of a query operation. */
export type QueryAnimethemeShuffleArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    format?: InputMaybe<Array<AnimeFormat>>;
    page?: InputMaybe<Scalars['Int']['input']>;
    spoiler?: InputMaybe<Scalars['Boolean']['input']>;
    type?: InputMaybe<Array<ThemeType>>;
    year_gte?: InputMaybe<Scalars['Int']['input']>;
    year_lte?: InputMaybe<Scalars['Int']['input']>;
};

/** Indicates what fields are available at the top level of a query operation. */
export type QueryAnimethemeentryPaginationArgs = {
    episodes?: InputMaybe<Scalars['String']['input']>;
    episodes_like?: InputMaybe<Scalars['String']['input']>;
    first?: Scalars['Int']['input'];
    nsfw?: InputMaybe<Scalars['Boolean']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<AnimeThemeEntrySort>>;
    spoiler?: InputMaybe<Scalars['Boolean']['input']>;
    version?: InputMaybe<Scalars['Int']['input']>;
    version_greater?: InputMaybe<Scalars['Int']['input']>;
    version_lesser?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<QueryAnimethemeentryPaginationWhereWhereConditions>;
};

/** Indicates what fields are available at the top level of a query operation. */
export type QueryAnimeyearsArgs = {
    year?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Indicates what fields are available at the top level of a query operation. */
export type QueryAnnouncementPaginationArgs = {
    first?: Scalars['Int']['input'];
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<AnnouncementSort>>;
};

/** Indicates what fields are available at the top level of a query operation. */
export type QueryArtistArgs = {
    slug: Scalars['String']['input'];
};

/** Indicates what fields are available at the top level of a query operation. */
export type QueryArtistPaginationArgs = {
    first?: Scalars['Int']['input'];
    id?: InputMaybe<Scalars['Int']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    name_like?: InputMaybe<Scalars['String']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<ArtistSort>>;
    where?: InputMaybe<QueryArtistPaginationWhereWhereConditions>;
};

/** Indicates what fields are available at the top level of a query operation. */
export type QueryAudioPaginationArgs = {
    basename?: InputMaybe<Scalars['String']['input']>;
    filename?: InputMaybe<Scalars['String']['input']>;
    first?: Scalars['Int']['input'];
    id?: InputMaybe<Scalars['Int']['input']>;
    mimetype?: InputMaybe<Scalars['String']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    path?: InputMaybe<Scalars['String']['input']>;
    path_like?: InputMaybe<Scalars['String']['input']>;
    size_greater?: InputMaybe<Scalars['Int']['input']>;
    size_lesser?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<AudioSort>>;
    where?: InputMaybe<QueryAudioPaginationWhereWhereConditions>;
};

/** Indicates what fields are available at the top level of a query operation. */
export type QueryDumpPaginationArgs = {
    first?: Scalars['Int']['input'];
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<DumpSort>>;
    where?: InputMaybe<QueryDumpPaginationWhereWhereConditions>;
};

/** Indicates what fields are available at the top level of a query operation. */
export type QueryExternalprofilePaginationArgs = {
    first?: Scalars['Int']['input'];
    page?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<QueryExternalprofilePaginationWhereWhereConditions>;
};

/** Indicates what fields are available at the top level of a query operation. */
export type QueryFindAnimeByExternalSiteArgs = {
    id?: InputMaybe<Array<Scalars['Int']['input']>>;
    link?: InputMaybe<Scalars['String']['input']>;
    site: ResourceSite;
};

/** Indicates what fields are available at the top level of a query operation. */
export type QueryImagePaginationArgs = {
    facet?: InputMaybe<ImageFacet>;
    first?: Scalars['Int']['input'];
    id?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    path?: InputMaybe<Scalars['String']['input']>;
    path_like?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<ImageSort>>;
    where?: InputMaybe<QueryImagePaginationWhereWhereConditions>;
};

/** Indicates what fields are available at the top level of a query operation. */
export type QueryPageArgs = {
    slug: Scalars['String']['input'];
};

/** Indicates what fields are available at the top level of a query operation. */
export type QueryPagePaginationArgs = {
    first?: Scalars['Int']['input'];
    id?: InputMaybe<Scalars['Int']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    name_like?: InputMaybe<Scalars['String']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    path_like?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<PageSort>>;
    where?: InputMaybe<QueryPagePaginationWhereWhereConditions>;
};

/** Indicates what fields are available at the top level of a query operation. */
export type QueryPlaylistArgs = {
    id: Scalars['String']['input'];
};

/** Indicates what fields are available at the top level of a query operation. */
export type QueryPlaylistPaginationArgs = {
    first?: Scalars['Int']['input'];
    name?: InputMaybe<Scalars['String']['input']>;
    name_like?: InputMaybe<Scalars['String']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<PlaylistSort>>;
    visibility?: InputMaybe<PlaylistVisibility>;
    where?: InputMaybe<QueryPlaylistPaginationWhereWhereConditions>;
};

/** Indicates what fields are available at the top level of a query operation. */
export type QueryPlaylisttrackArgs = {
    id: Scalars['String']['input'];
    playlist: Scalars['String']['input'];
};

/** Indicates what fields are available at the top level of a query operation. */
export type QueryPlaylisttrackPaginationArgs = {
    first?: Scalars['Int']['input'];
    page?: InputMaybe<Scalars['Int']['input']>;
    playlist: Scalars['String']['input'];
    position?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<PlaylistTrackSort>>;
    where?: InputMaybe<QueryPlaylisttrackPaginationWhereWhereConditions>;
};

/** Indicates what fields are available at the top level of a query operation. */
export type QuerySearchArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search: Scalars['String']['input'];
};

/** Indicates what fields are available at the top level of a query operation. */
export type QuerySeriesArgs = {
    slug: Scalars['String']['input'];
};

/** Indicates what fields are available at the top level of a query operation. */
export type QuerySeriesPaginationArgs = {
    first?: Scalars['Int']['input'];
    id?: InputMaybe<Scalars['Int']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    name_like?: InputMaybe<Scalars['String']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<SeriesSort>>;
    where?: InputMaybe<QuerySeriesPaginationWhereWhereConditions>;
};

/** Indicates what fields are available at the top level of a query operation. */
export type QuerySongPaginationArgs = {
    first?: Scalars['Int']['input'];
    id?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<SongSort>>;
    title?: InputMaybe<Scalars['String']['input']>;
    titleNative?: InputMaybe<Scalars['String']['input']>;
    where?: InputMaybe<QuerySongPaginationWhereWhereConditions>;
};

/** Indicates what fields are available at the top level of a query operation. */
export type QueryStudioArgs = {
    slug: Scalars['String']['input'];
};

/** Indicates what fields are available at the top level of a query operation. */
export type QueryStudioPaginationArgs = {
    first?: Scalars['Int']['input'];
    id?: InputMaybe<Scalars['Int']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    name_like?: InputMaybe<Scalars['String']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<StudioSort>>;
    where?: InputMaybe<QueryStudioPaginationWhereWhereConditions>;
};

/** Indicates what fields are available at the top level of a query operation. */
export type QueryThemegroupPaginationArgs = {
    first?: Scalars['Int']['input'];
    id?: InputMaybe<Scalars['Int']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<ThemeGroupSort>>;
    where?: InputMaybe<QueryThemegroupPaginationWhereWhereConditions>;
};

/** Indicates what fields are available at the top level of a query operation. */
export type QueryVideoArgs = {
    id: Scalars['Int']['input'];
};

/** Indicates what fields are available at the top level of a query operation. */
export type QueryVideoPaginationArgs = {
    basename?: InputMaybe<Scalars['String']['input']>;
    filename?: InputMaybe<Scalars['String']['input']>;
    first?: Scalars['Int']['input'];
    id?: InputMaybe<Scalars['Int']['input']>;
    lyrics?: InputMaybe<Scalars['Boolean']['input']>;
    mimetype?: InputMaybe<Scalars['String']['input']>;
    nc?: InputMaybe<Scalars['Boolean']['input']>;
    overlap?: InputMaybe<VideoOverlap>;
    page?: InputMaybe<Scalars['Int']['input']>;
    path?: InputMaybe<Scalars['String']['input']>;
    path_like?: InputMaybe<Scalars['String']['input']>;
    resolution?: InputMaybe<Scalars['Int']['input']>;
    resolution_greater?: InputMaybe<Scalars['Int']['input']>;
    resolution_lesser?: InputMaybe<Scalars['Int']['input']>;
    size_greater?: InputMaybe<Scalars['Int']['input']>;
    size_lesser?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<VideoSort>>;
    source?: InputMaybe<VideoSource>;
    subbed?: InputMaybe<Scalars['Boolean']['input']>;
    uncen?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<QueryVideoPaginationWhereWhereConditions>;
};

/** Dynamic WHERE conditions for the `where` argument of the query `animePagination`. */
export type QueryAnimePaginationWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QueryAnimePaginationWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QueryAnimePaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QueryAnimePaginationWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<AnimeFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `animePagination`. */
export type QueryAnimePaginationWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QueryAnimePaginationWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QueryAnimePaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QueryAnimePaginationWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `animePagination`. */
export type QueryAnimePaginationWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<QueryAnimePaginationWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `animethemePagination`. */
export type QueryAnimethemePaginationWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QueryAnimethemePaginationWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QueryAnimethemePaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QueryAnimethemePaginationWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<AnimeThemeFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `animethemePagination`. */
export type QueryAnimethemePaginationWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QueryAnimethemePaginationWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QueryAnimethemePaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QueryAnimethemePaginationWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `animethemePagination`. */
export type QueryAnimethemePaginationWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<QueryAnimethemePaginationWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `animethemeentryPagination`. */
export type QueryAnimethemeentryPaginationWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QueryAnimethemeentryPaginationWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QueryAnimethemeentryPaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QueryAnimethemeentryPaginationWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<AnimeThemeEntryFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `animethemeentryPagination`. */
export type QueryAnimethemeentryPaginationWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QueryAnimethemeentryPaginationWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QueryAnimethemeentryPaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QueryAnimethemeentryPaginationWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `animethemeentryPagination`. */
export type QueryAnimethemeentryPaginationWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<QueryAnimethemeentryPaginationWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `artistPagination`. */
export type QueryArtistPaginationWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QueryArtistPaginationWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QueryArtistPaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QueryArtistPaginationWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<ArtistFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `artistPagination`. */
export type QueryArtistPaginationWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QueryArtistPaginationWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QueryArtistPaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QueryArtistPaginationWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `artistPagination`. */
export type QueryArtistPaginationWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<QueryArtistPaginationWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `audioPagination`. */
export type QueryAudioPaginationWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QueryAudioPaginationWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QueryAudioPaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QueryAudioPaginationWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<AudioFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `audioPagination`. */
export type QueryAudioPaginationWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QueryAudioPaginationWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QueryAudioPaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QueryAudioPaginationWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `audioPagination`. */
export type QueryAudioPaginationWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<QueryAudioPaginationWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `dumpPagination`. */
export type QueryDumpPaginationWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QueryDumpPaginationWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QueryDumpPaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QueryDumpPaginationWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<DumpFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `dumpPagination`. */
export type QueryDumpPaginationWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QueryDumpPaginationWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QueryDumpPaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QueryDumpPaginationWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `dumpPagination`. */
export type QueryDumpPaginationWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<QueryDumpPaginationWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `externalprofilePagination`. */
export type QueryExternalprofilePaginationWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QueryExternalprofilePaginationWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QueryExternalprofilePaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QueryExternalprofilePaginationWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<ExternalProfileFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `externalprofilePagination`. */
export type QueryExternalprofilePaginationWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QueryExternalprofilePaginationWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QueryExternalprofilePaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QueryExternalprofilePaginationWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `externalprofilePagination`. */
export type QueryExternalprofilePaginationWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<QueryExternalprofilePaginationWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `imagePagination`. */
export type QueryImagePaginationWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QueryImagePaginationWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QueryImagePaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QueryImagePaginationWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<ImageFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `imagePagination`. */
export type QueryImagePaginationWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QueryImagePaginationWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QueryImagePaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QueryImagePaginationWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `imagePagination`. */
export type QueryImagePaginationWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<QueryImagePaginationWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `pagePagination`. */
export type QueryPagePaginationWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QueryPagePaginationWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QueryPagePaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QueryPagePaginationWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<PageFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `pagePagination`. */
export type QueryPagePaginationWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QueryPagePaginationWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QueryPagePaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QueryPagePaginationWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `pagePagination`. */
export type QueryPagePaginationWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<QueryPagePaginationWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `playlistPagination`. */
export type QueryPlaylistPaginationWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QueryPlaylistPaginationWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QueryPlaylistPaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QueryPlaylistPaginationWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<PlaylistFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `playlistPagination`. */
export type QueryPlaylistPaginationWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QueryPlaylistPaginationWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QueryPlaylistPaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QueryPlaylistPaginationWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `playlistPagination`. */
export type QueryPlaylistPaginationWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<QueryPlaylistPaginationWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `playlisttrackPagination`. */
export type QueryPlaylisttrackPaginationWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QueryPlaylisttrackPaginationWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QueryPlaylisttrackPaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QueryPlaylisttrackPaginationWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<PlaylistTrackFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `playlisttrackPagination`. */
export type QueryPlaylisttrackPaginationWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QueryPlaylisttrackPaginationWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QueryPlaylisttrackPaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QueryPlaylisttrackPaginationWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `playlisttrackPagination`. */
export type QueryPlaylisttrackPaginationWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<QueryPlaylisttrackPaginationWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `seriesPagination`. */
export type QuerySeriesPaginationWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QuerySeriesPaginationWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QuerySeriesPaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QuerySeriesPaginationWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<SeriesFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `seriesPagination`. */
export type QuerySeriesPaginationWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QuerySeriesPaginationWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QuerySeriesPaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QuerySeriesPaginationWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `seriesPagination`. */
export type QuerySeriesPaginationWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<QuerySeriesPaginationWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `songPagination`. */
export type QuerySongPaginationWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QuerySongPaginationWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QuerySongPaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QuerySongPaginationWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<SongFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `songPagination`. */
export type QuerySongPaginationWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QuerySongPaginationWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QuerySongPaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QuerySongPaginationWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `songPagination`. */
export type QuerySongPaginationWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<QuerySongPaginationWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `studioPagination`. */
export type QueryStudioPaginationWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QueryStudioPaginationWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QueryStudioPaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QueryStudioPaginationWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<StudioFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `studioPagination`. */
export type QueryStudioPaginationWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QueryStudioPaginationWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QueryStudioPaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QueryStudioPaginationWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `studioPagination`. */
export type QueryStudioPaginationWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<QueryStudioPaginationWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `themegroupPagination`. */
export type QueryThemegroupPaginationWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QueryThemegroupPaginationWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QueryThemegroupPaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QueryThemegroupPaginationWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<ThemeGroupFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `themegroupPagination`. */
export type QueryThemegroupPaginationWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QueryThemegroupPaginationWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QueryThemegroupPaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QueryThemegroupPaginationWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `themegroupPagination`. */
export type QueryThemegroupPaginationWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<QueryThemegroupPaginationWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `videoPagination`. */
export type QueryVideoPaginationWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QueryVideoPaginationWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QueryVideoPaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QueryVideoPaginationWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<VideoFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `videoPagination`. */
export type QueryVideoPaginationWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<QueryVideoPaginationWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<QueryVideoPaginationWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<QueryVideoPaginationWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `videoPagination`. */
export type QueryVideoPaginationWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<QueryVideoPaginationWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

export enum ResourceSite {
    AmazonMusic = 'AMAZON_MUSIC',
    AmazonPrimeVideo = 'AMAZON_PRIME_VIDEO',
    Anidb = 'ANIDB',
    Anilist = 'ANILIST',
    AnimePlanet = 'ANIME_PLANET',
    Ann = 'ANN',
    AppleMusic = 'APPLE_MUSIC',
    Crunchyroll = 'CRUNCHYROLL',
    DisneyPlus = 'DISNEY_PLUS',
    Hidive = 'HIDIVE',
    Hulu = 'HULU',
    Kitsu = 'KITSU',
    Livechart = 'LIVECHART',
    Mal = 'MAL',
    Netflix = 'NETFLIX',
    OfficialSite = 'OFFICIAL_SITE',
    Spotify = 'SPOTIFY',
    Wiki = 'WIKI',
    X = 'X',
    Youtube = 'YOUTUBE',
    YoutubeMusic = 'YOUTUBE_MUSIC',
}

/** Represents an assignable label for users that provides a configured group of permissions. */
export type Role = {
    __typename?: 'Role';
    /** The hex representation of the color used to distinguish the resource */
    color?: Maybe<Scalars['String']['output']>;
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** Is the role assigned on account verification? */
    default: Scalars['String']['output'];
    /** The primary key of the resource */
    id: Scalars['Int']['output'];
    /** The label of the resource */
    name: Scalars['String']['output'];
    permissions: PermissionConnection;
    /** The weight assigned to the resource, where higher values correspond to higher priority */
    priority: Scalars['Int']['output'];
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
};

/** Represents an assignable label for users that provides a configured group of permissions. */
export type RoleCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

/** Represents an assignable label for users that provides a configured group of permissions. */
export type RolePermissionsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    default?: InputMaybe<Scalars['Boolean']['input']>;
    first?: Scalars['Int']['input'];
    priority_greater?: InputMaybe<Scalars['Int']['input']>;
    priority_lesser?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<PermissionSort>>;
};

/** Represents an assignable label for users that provides a configured group of permissions. */
export type RoleUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

/** A paginated list of Role edges. */
export type RoleConnection = {
    __typename?: 'RoleConnection';
    /** A list of Role edges. */
    edges: Array<RoleEdge>;
    /** A list of Role resources. Use this if you don't care about pivot fields. */
    nodes: Array<Role>;
    /** Pagination information about the list of edges. */
    pageInfo: PageInfo;
};

export type RoleEdge = {
    __typename?: 'RoleEdge';
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** The Role node. */
    node: Role;
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
};

export type RoleEdgeCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

export type RoleEdgeUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

export enum RoleSort {
    CreatedAt = 'CREATED_AT',
    CreatedAtDesc = 'CREATED_AT_DESC',
    Id = 'ID',
    IdDesc = 'ID_DESC',
    Name = 'NAME',
    NameDesc = 'NAME_DESC',
    Priority = 'PRIORITY',
    PriorityDesc = 'PRIORITY_DESC',
    Random = 'RANDOM',
    UpdatedAt = 'UPDATED_AT',
    UpdatedAtDesc = 'UPDATED_AT_DESC',
}

/** The available SQL operators that are used to filter query results. */
export enum SqlOperator {
    /** Whether a value is within a range of values (`BETWEEN`) */
    Between = 'BETWEEN',
    /** Equal operator (`=`) */
    Eq = 'EQ',
    /** Greater than operator (`>`) */
    Gt = 'GT',
    /** Greater than or equal operator (`>=`) */
    Gte = 'GTE',
    /** Whether a value is within a set of values (`IN`) */
    In = 'IN',
    /** Whether a value is not null (`IS NOT NULL`) */
    IsNotNull = 'IS_NOT_NULL',
    /** Whether a value is null (`IS NULL`) */
    IsNull = 'IS_NULL',
    /** Simple pattern matching (`LIKE`) */
    Like = 'LIKE',
    /** Less than operator (`<`) */
    Lt = 'LT',
    /** Less than or equal operator (`<=`) */
    Lte = 'LTE',
    /** Not equal operator (`!=`) */
    Neq = 'NEQ',
    /** Whether a value is not within a range of values (`NOT BETWEEN`) */
    NotBetween = 'NOT_BETWEEN',
    /** Whether a value is not within a set of values (`NOT IN`) */
    NotIn = 'NOT_IN',
    /** Negation of simple pattern matching (`NOT LIKE`) */
    NotLike = 'NOT_LIKE',
}

/** Returns a listing of resources that match a given search term. */
export type Search = {
    __typename?: 'Search';
    /** The anime results of the search */
    anime: Array<Anime>;
    /** The theme results of the search */
    animethemes: Array<AnimeTheme>;
    /** The artist results of the search */
    artists: Array<Artist>;
    /** The playlist results of the search */
    playlists: Array<Playlist>;
    /** The series results of the search */
    series: Array<Series>;
    /** The song results of the search */
    songs: Array<Song>;
    /** The studio results of the search */
    studios: Array<Studio>;
    /** The video results of the search */
    videos: Array<Video>;
};

/**
 * Represents a collection of related anime.
 *
 * For example, the Monogatari series is the collection of the Bakemonogatari anime and its related productions.
 */
export type Series = {
    __typename?: 'Series';
    anime: SeriesAnimeConnection;
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** The primary key of the resource */
    id: Scalars['Int']['output'];
    /** The primary title of the series */
    name: Scalars['String']['output'];
    /** The URL slug & route key of the resource */
    slug: Scalars['String']['output'];
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
};

/**
 * Represents a collection of related anime.
 *
 * For example, the Monogatari series is the collection of the Bakemonogatari anime and its related productions.
 */
export type SeriesAnimeArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    first?: Scalars['Int']['input'];
    format?: InputMaybe<AnimeFormat>;
    format_in?: InputMaybe<Array<AnimeFormat>>;
    name_like?: InputMaybe<Scalars['String']['input']>;
    season?: InputMaybe<AnimeSeason>;
    season_in?: InputMaybe<Array<AnimeSeason>>;
    sort?: InputMaybe<Array<AnimeSort>>;
    where?: InputMaybe<SeriesAnimeWhereWhereConditions>;
    year?: InputMaybe<Scalars['Int']['input']>;
    year_greater?: InputMaybe<Scalars['Int']['input']>;
    year_lesser?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * Represents a collection of related anime.
 *
 * For example, the Monogatari series is the collection of the Bakemonogatari anime and its related productions.
 */
export type SeriesCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

/**
 * Represents a collection of related anime.
 *
 * For example, the Monogatari series is the collection of the Bakemonogatari anime and its related productions.
 */
export type SeriesUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

/** A paginated list of Anime edges. */
export type SeriesAnimeConnection = {
    __typename?: 'SeriesAnimeConnection';
    /** A list of Anime edges. */
    edges: Array<SeriesAnimeEdge>;
    /** A list of Anime resources. Use this if you don't care about pivot fields. */
    nodes: Array<Anime>;
    /** Pagination information about the list of edges. */
    pageInfo: PageInfo;
};

export type SeriesAnimeEdge = {
    __typename?: 'SeriesAnimeEdge';
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** The Anime node. */
    node: Anime;
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
};

export type SeriesAnimeEdgeCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

export type SeriesAnimeEdgeUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `anime`. */
export type SeriesAnimeWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<SeriesAnimeWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<SeriesAnimeWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<SeriesAnimeWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<AnimeFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `anime`. */
export type SeriesAnimeWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<SeriesAnimeWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<SeriesAnimeWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<SeriesAnimeWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `anime`. */
export type SeriesAnimeWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<SeriesAnimeWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

export enum SeriesFilterableColumns {
    CreatedAt = 'CREATED_AT',
    Id = 'ID',
    Name = 'NAME',
    Slug = 'SLUG',
    UpdatedAt = 'UPDATED_AT',
}

/** A paginated list of Series items. */
export type SeriesPaginator = {
    __typename?: 'SeriesPaginator';
    /** A list of Series items. */
    data: Array<Series>;
    /** Pagination information about the list of items. */
    paginatorInfo: PaginatorInfo;
};

export enum SeriesSort {
    CreatedAt = 'CREATED_AT',
    CreatedAtDesc = 'CREATED_AT_DESC',
    Id = 'ID',
    IdDesc = 'ID_DESC',
    Name = 'NAME',
    NameDesc = 'NAME_DESC',
    Random = 'RANDOM',
    UpdatedAt = 'UPDATED_AT',
    UpdatedAtDesc = 'UPDATED_AT_DESC',
}

/** Information about pagination using a simple paginator. */
export type SimplePaginatorInfo = {
    __typename?: 'SimplePaginatorInfo';
    /** Number of items in the current page. */
    count: Scalars['Int']['output'];
    /** Index of the current page. */
    currentPage: Scalars['Int']['output'];
    /** Index of the first item in the current page. */
    firstItem?: Maybe<Scalars['Int']['output']>;
    /** Are there more pages after this one? */
    hasMorePages: Scalars['Boolean']['output'];
    /** Index of the last item in the current page. */
    lastItem?: Maybe<Scalars['Int']['output']>;
    /** Number of items per page. */
    perPage: Scalars['Int']['output'];
};

/**
 * Represents the composition that accompanies an AnimeTheme.
 *
 * For example, Staple Stable is the song for the Bakemonogatari OP1 AnimeTheme.
 */
export type Song = {
    __typename?: 'Song';
    animethemes: Array<AnimeTheme>;
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** The primary key of the resource */
    id: Scalars['Int']['output'];
    performances: Array<Performance>;
    resources: ExternalResourceConnection;
    /** The name of the composition */
    title?: Maybe<Scalars['String']['output']>;
    /** The native name of the composition */
    titleNative?: Maybe<Scalars['String']['output']>;
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
};

/**
 * Represents the composition that accompanies an AnimeTheme.
 *
 * For example, Staple Stable is the song for the Bakemonogatari OP1 AnimeTheme.
 */
export type SongAnimethemesArgs = {
    first?: Scalars['Int']['input'];
    page?: InputMaybe<Scalars['Int']['input']>;
    sequence?: InputMaybe<Scalars['Int']['input']>;
    sequence_greater?: InputMaybe<Scalars['Int']['input']>;
    sequence_lesser?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<AnimeThemeSort>>;
    type?: InputMaybe<ThemeType>;
    type_in?: InputMaybe<Array<ThemeType>>;
};

/**
 * Represents the composition that accompanies an AnimeTheme.
 *
 * For example, Staple Stable is the song for the Bakemonogatari OP1 AnimeTheme.
 */
export type SongCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

/**
 * Represents the composition that accompanies an AnimeTheme.
 *
 * For example, Staple Stable is the song for the Bakemonogatari OP1 AnimeTheme.
 */
export type SongPerformancesArgs = {
    alias?: InputMaybe<Scalars['String']['input']>;
    as?: InputMaybe<Scalars['String']['input']>;
    first?: Scalars['Int']['input'];
    memberAlias?: InputMaybe<Scalars['String']['input']>;
    memberAs?: InputMaybe<Scalars['String']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    relevance?: InputMaybe<Scalars['Int']['input']>;
    relevance_greater?: InputMaybe<Scalars['Int']['input']>;
    relevance_lesser?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<PerformanceSort>>;
    where?: InputMaybe<SongPerformancesWhereWhereConditions>;
};

/**
 * Represents the composition that accompanies an AnimeTheme.
 *
 * For example, Staple Stable is the song for the Bakemonogatari OP1 AnimeTheme.
 */
export type SongResourcesArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    externalId?: InputMaybe<Scalars['Int']['input']>;
    first?: Scalars['Int']['input'];
    site?: InputMaybe<ResourceSite>;
    sort?: InputMaybe<Array<ExternalResourceSort>>;
    where?: InputMaybe<SongResourcesWhereWhereConditions>;
};

/**
 * Represents the composition that accompanies an AnimeTheme.
 *
 * For example, Staple Stable is the song for the Bakemonogatari OP1 AnimeTheme.
 */
export type SongUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

export enum SongFilterableColumns {
    CreatedAt = 'CREATED_AT',
    Id = 'ID',
    Title = 'TITLE',
    TitleNative = 'TITLE_NATIVE',
    UpdatedAt = 'UPDATED_AT',
}

/** A paginated list of Song items. */
export type SongPaginator = {
    __typename?: 'SongPaginator';
    /** A list of Song items. */
    data: Array<Song>;
    /** Pagination information about the list of items. */
    paginatorInfo: PaginatorInfo;
};

/** Dynamic WHERE conditions for the `where` argument of the query `performances`. */
export type SongPerformancesWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<SongPerformancesWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<SongPerformancesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<SongPerformancesWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<PerformanceFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `performances`. */
export type SongPerformancesWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<SongPerformancesWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<SongPerformancesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<SongPerformancesWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `performances`. */
export type SongPerformancesWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<SongPerformancesWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `resources`. */
export type SongResourcesWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<SongResourcesWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<SongResourcesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<SongResourcesWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<ExternalResourceFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `resources`. */
export type SongResourcesWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<SongResourcesWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<SongResourcesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<SongResourcesWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `resources`. */
export type SongResourcesWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<SongResourcesWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

export enum SongSort {
    CreatedAt = 'CREATED_AT',
    CreatedAtDesc = 'CREATED_AT_DESC',
    Id = 'ID',
    IdDesc = 'ID_DESC',
    Random = 'RANDOM',
    Title = 'TITLE',
    TitleDesc = 'TITLE_DESC',
    TitleNative = 'TITLE_NATIVE',
    TitleNativeDesc = 'TITLE_NATIVE_DESC',
    UpdatedAt = 'UPDATED_AT',
    UpdatedAtDesc = 'UPDATED_AT_DESC',
}

/** Directions for ordering a list of records. */
export enum SortOrder {
    /** Sort records in ascending order. */
    Asc = 'ASC',
    /** Sort records in descending order. */
    Desc = 'DESC',
}

/**
 * Represents a company that produces anime.
 *
 * For example, Shaft is the studio that produced the anime Bakemonogatari.
 */
export type Studio = {
    __typename?: 'Studio';
    anime: StudioAnimeConnection;
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** The primary key of the resource */
    id: Scalars['Int']['output'];
    images: ImageConnection;
    /** The primary title of the Studio */
    name: Scalars['String']['output'];
    resources: ExternalResourceConnection;
    /** The URL slug & route key of the resource */
    slug: Scalars['String']['output'];
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
};

/**
 * Represents a company that produces anime.
 *
 * For example, Shaft is the studio that produced the anime Bakemonogatari.
 */
export type StudioAnimeArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    first?: Scalars['Int']['input'];
    format?: InputMaybe<AnimeFormat>;
    format_in?: InputMaybe<Array<AnimeFormat>>;
    name_like?: InputMaybe<Scalars['String']['input']>;
    season?: InputMaybe<AnimeSeason>;
    season_in?: InputMaybe<Array<AnimeSeason>>;
    sort?: InputMaybe<Array<AnimeSort>>;
    where?: InputMaybe<StudioAnimeWhereWhereConditions>;
    year?: InputMaybe<Scalars['Int']['input']>;
    year_greater?: InputMaybe<Scalars['Int']['input']>;
    year_lesser?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * Represents a company that produces anime.
 *
 * For example, Shaft is the studio that produced the anime Bakemonogatari.
 */
export type StudioCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

/**
 * Represents a company that produces anime.
 *
 * For example, Shaft is the studio that produced the anime Bakemonogatari.
 */
export type StudioImagesArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    facet?: InputMaybe<ImageFacet>;
    first?: Scalars['Int']['input'];
    path_like?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<ImageSort>>;
    where?: InputMaybe<StudioImagesWhereWhereConditions>;
};

/**
 * Represents a company that produces anime.
 *
 * For example, Shaft is the studio that produced the anime Bakemonogatari.
 */
export type StudioResourcesArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    externalId?: InputMaybe<Scalars['Int']['input']>;
    first?: Scalars['Int']['input'];
    site?: InputMaybe<ResourceSite>;
    sort?: InputMaybe<Array<ExternalResourceSort>>;
    where?: InputMaybe<StudioResourcesWhereWhereConditions>;
};

/**
 * Represents a company that produces anime.
 *
 * For example, Shaft is the studio that produced the anime Bakemonogatari.
 */
export type StudioUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

/** A paginated list of Anime edges. */
export type StudioAnimeConnection = {
    __typename?: 'StudioAnimeConnection';
    /** A list of Anime edges. */
    edges: Array<StudioAnimeEdge>;
    /** A list of Anime resources. Use this if you don't care about pivot fields. */
    nodes: Array<Anime>;
    /** Pagination information about the list of edges. */
    pageInfo: PageInfo;
};

export type StudioAnimeEdge = {
    __typename?: 'StudioAnimeEdge';
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** The Anime node. */
    node: Anime;
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
};

export type StudioAnimeEdgeCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

export type StudioAnimeEdgeUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `anime`. */
export type StudioAnimeWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<StudioAnimeWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<StudioAnimeWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<StudioAnimeWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<AnimeFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `anime`. */
export type StudioAnimeWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<StudioAnimeWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<StudioAnimeWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<StudioAnimeWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `anime`. */
export type StudioAnimeWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<StudioAnimeWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

export enum StudioFilterableColumns {
    CreatedAt = 'CREATED_AT',
    Id = 'ID',
    Name = 'NAME',
    Slug = 'SLUG',
    UpdatedAt = 'UPDATED_AT',
}

/** Dynamic WHERE conditions for the `where` argument of the query `images`. */
export type StudioImagesWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<StudioImagesWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<StudioImagesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<StudioImagesWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<ImageFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `images`. */
export type StudioImagesWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<StudioImagesWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<StudioImagesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<StudioImagesWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `images`. */
export type StudioImagesWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<StudioImagesWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

/** A paginated list of Studio items. */
export type StudioPaginator = {
    __typename?: 'StudioPaginator';
    /** A list of Studio items. */
    data: Array<Studio>;
    /** Pagination information about the list of items. */
    paginatorInfo: PaginatorInfo;
};

/** Dynamic WHERE conditions for the `where` argument of the query `resources`. */
export type StudioResourcesWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<StudioResourcesWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<StudioResourcesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<StudioResourcesWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<ExternalResourceFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `resources`. */
export type StudioResourcesWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<StudioResourcesWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<StudioResourcesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<StudioResourcesWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `resources`. */
export type StudioResourcesWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<StudioResourcesWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

export enum StudioSort {
    CreatedAt = 'CREATED_AT',
    CreatedAtDesc = 'CREATED_AT_DESC',
    Id = 'ID',
    IdDesc = 'ID_DESC',
    Name = 'NAME',
    NameDesc = 'NAME_DESC',
    Random = 'RANDOM',
    UpdatedAt = 'UPDATED_AT',
    UpdatedAtDesc = 'UPDATED_AT_DESC',
}

/**
 * Represents an alternate title or common abbreviation for an entity.
 *
 * For example, the anime Bakemonogatari has the synonym "Monstory".
 */
export type Synonym = {
    __typename?: 'Synonym';
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** The primary key of the resource */
    id: Scalars['Int']['output'];
    /** The alternate title or common abbreviations */
    text: Scalars['String']['output'];
    /** The type of the synonym */
    type: SynonymType;
    /** The formatted string value of the type field */
    typeLocalized: Scalars['String']['output'];
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
};

/**
 * Represents an alternate title or common abbreviation for an entity.
 *
 * For example, the anime Bakemonogatari has the synonym "Monstory".
 */
export type SynonymCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

/**
 * Represents an alternate title or common abbreviation for an entity.
 *
 * For example, the anime Bakemonogatari has the synonym "Monstory".
 */
export type SynonymUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

export enum SynonymFilterableColumns {
    CreatedAt = 'CREATED_AT',
    Id = 'ID',
    Text = 'TEXT',
    Type = 'TYPE',
    UpdatedAt = 'UPDATED_AT',
}

export enum SynonymSort {
    CreatedAt = 'CREATED_AT',
    CreatedAtDesc = 'CREATED_AT_DESC',
    Id = 'ID',
    IdDesc = 'ID_DESC',
    Random = 'RANDOM',
    Text = 'TEXT',
    TextDesc = 'TEXT_DESC',
    UpdatedAt = 'UPDATED_AT',
    UpdatedAtDesc = 'UPDATED_AT_DESC',
}

export enum SynonymType {
    English = 'ENGLISH',
    Native = 'NATIVE',
    Other = 'OTHER',
    Short = 'SHORT',
}

/**
 * Represents the group that accompanies a Theme.
 *
 * For example, English Version is the group for english dubbed Theme.
 */
export type ThemeGroup = {
    __typename?: 'ThemeGroup';
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** The primary key of the resource */
    id: Scalars['Int']['output'];
    /** The name of the group */
    name: Scalars['String']['output'];
    /** The slug of the group */
    slug: Scalars['String']['output'];
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
};

/**
 * Represents the group that accompanies a Theme.
 *
 * For example, English Version is the group for english dubbed Theme.
 */
export type ThemeGroupCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

/**
 * Represents the group that accompanies a Theme.
 *
 * For example, English Version is the group for english dubbed Theme.
 */
export type ThemeGroupUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

export enum ThemeGroupFilterableColumns {
    CreatedAt = 'CREATED_AT',
    Id = 'ID',
    Name = 'NAME',
    Slug = 'SLUG',
    UpdatedAt = 'UPDATED_AT',
}

/** A paginated list of ThemeGroup items. */
export type ThemeGroupPaginator = {
    __typename?: 'ThemeGroupPaginator';
    /** A list of ThemeGroup items. */
    data: Array<ThemeGroup>;
    /** Pagination information about the list of items. */
    paginatorInfo: PaginatorInfo;
};

export enum ThemeGroupSort {
    CreatedAt = 'CREATED_AT',
    CreatedAtDesc = 'CREATED_AT_DESC',
    Id = 'ID',
    IdDesc = 'ID_DESC',
    Name = 'NAME',
    NameDesc = 'NAME_DESC',
    Random = 'RANDOM',
    Slug = 'SLUG',
    SlugDesc = 'SLUG_DESC',
    UpdatedAt = 'UPDATED_AT',
    UpdatedAtDesc = 'UPDATED_AT_DESC',
}

export enum ThemeType {
    /** Ending */
    Ed = 'ED',
    /** Insert Song */
    In = 'IN',
    /** Opening */
    Op = 'OP',
}

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
    /** Only return trashed results. */
    Only = 'ONLY',
    /** Return both trashed and non-trashed results. */
    With = 'WITH',
    /** Only return non-trashed results. */
    Without = 'WITHOUT',
}

/** Represents an AnimeThemes account. */
export type User = {
    __typename?: 'User';
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** The primary key of the resource */
    id: Scalars['Int']['output'];
    /** The username of the resource */
    name: Scalars['String']['output'];
    playlists: Array<Playlist>;
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
};

/** Represents an AnimeThemes account. */
export type UserCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

/** Represents an AnimeThemes account. */
export type UserPlaylistsArgs = {
    first?: Scalars['Int']['input'];
    name_like?: InputMaybe<Scalars['String']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<PlaylistSort>>;
    visibility?: InputMaybe<PlaylistVisibility>;
    where?: InputMaybe<UserPlaylistsWhereWhereConditions>;
};

/** Represents an AnimeThemes account. */
export type UserUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `playlists`. */
export type UserPlaylistsWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<UserPlaylistsWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<UserPlaylistsWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<UserPlaylistsWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<PlaylistFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `playlists`. */
export type UserPlaylistsWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<UserPlaylistsWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<UserPlaylistsWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<UserPlaylistsWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `playlists`. */
export type UserPlaylistsWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<UserPlaylistsWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

/**
 * Represents a WebM of an anime theme.
 *
 * For example, the video Bakemonogatari-OP1.webm represents the WebM of the Bakemonogatari OP1 theme.
 */
export type Video = {
    __typename?: 'Video';
    animethemeentries: VideoAnimeThemeEntryConnection;
    audio: Audio;
    /** The basename of the file in storage */
    basename: Scalars['String']['output'];
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** The filename of the file in storage */
    filename: Scalars['String']['output'];
    /** The primary key of the resource */
    id: Scalars['Int']['output'];
    /** The URL to stream the file from storage */
    link: Scalars['String']['output'];
    /** Does the video include subtitles of song lyrics? */
    lyrics: Scalars['Boolean']['output'];
    /** The media type of the file in storage */
    mimetype: Scalars['String']['output'];
    /** Is the video creditless? */
    nc: Scalars['Boolean']['output'];
    /** The degree to which the sequence and episode content overlap */
    overlap: VideoOverlap;
    /** The formatted string value of the overlap field */
    overlapLocalized: Scalars['String']['output'];
    /** The path of the file in storage */
    path: Scalars['String']['output'];
    /** The priority value for the video */
    priority: Scalars['Int']['output'];
    /** The frame height of the file in storage */
    resolution?: Maybe<Scalars['Int']['output']>;
    /** The size of the file in storage in Bytes */
    size: Scalars['Int']['output'];
    /** Where did this video come from? */
    source?: Maybe<VideoSource>;
    /** The formatted string value of the source field */
    sourceLocalized?: Maybe<Scalars['String']['output']>;
    /** Does the video include subtitles of dialogue? */
    subbed: Scalars['Boolean']['output'];
    /** The attributes used to distinguish the file within the context of a theme */
    tags?: Maybe<Scalars['String']['output']>;
    tracks: Array<PlaylistTrack>;
    /** Is the video an uncensored version of a censored sequence? */
    uncen: Scalars['Boolean']['output'];
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
    videoscript?: Maybe<VideoScript>;
};

/**
 * Represents a WebM of an anime theme.
 *
 * For example, the video Bakemonogatari-OP1.webm represents the WebM of the Bakemonogatari OP1 theme.
 */
export type VideoAnimethemeentriesArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    episodes?: InputMaybe<Scalars['String']['input']>;
    episodes_like?: InputMaybe<Scalars['String']['input']>;
    first?: Scalars['Int']['input'];
    nsfw?: InputMaybe<Scalars['Boolean']['input']>;
    sort?: InputMaybe<Array<AnimeThemeEntrySort>>;
    spoiler?: InputMaybe<Scalars['Boolean']['input']>;
    version?: InputMaybe<Scalars['Int']['input']>;
    version_greater?: InputMaybe<Scalars['Int']['input']>;
    version_lesser?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<VideoAnimethemeentriesWhereWhereConditions>;
};

/**
 * Represents a WebM of an anime theme.
 *
 * For example, the video Bakemonogatari-OP1.webm represents the WebM of the Bakemonogatari OP1 theme.
 */
export type VideoCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

/**
 * Represents a WebM of an anime theme.
 *
 * For example, the video Bakemonogatari-OP1.webm represents the WebM of the Bakemonogatari OP1 theme.
 */
export type VideoTracksArgs = {
    first?: Scalars['Int']['input'];
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<PlaylistTrackSort>>;
};

/**
 * Represents a WebM of an anime theme.
 *
 * For example, the video Bakemonogatari-OP1.webm represents the WebM of the Bakemonogatari OP1 theme.
 */
export type VideoUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

/** A paginated list of AnimeThemeEntry edges. */
export type VideoAnimeThemeEntryConnection = {
    __typename?: 'VideoAnimeThemeEntryConnection';
    /** A list of AnimeThemeEntry edges. */
    edges: Array<VideoAnimeThemeEntryEdge>;
    /** A list of AnimeThemeEntry resources. Use this if you don't care about pivot fields. */
    nodes: Array<AnimeThemeEntry>;
    /** Pagination information about the list of edges. */
    pageInfo: PageInfo;
};

export type VideoAnimeThemeEntryEdge = {
    __typename?: 'VideoAnimeThemeEntryEdge';
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** The anime theme entry node. */
    node: AnimeThemeEntry;
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
};

export type VideoAnimeThemeEntryEdgeCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

export type VideoAnimeThemeEntryEdgeUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `animethemeentries`. */
export type VideoAnimethemeentriesWhereWhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<VideoAnimethemeentriesWhereWhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<VideoAnimethemeentriesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<VideoAnimethemeentriesWhereWhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<AnimeThemeEntryFilterableColumns>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE HAS conditions for the `where` argument of the query `animethemeentries`. */
export type VideoAnimethemeentriesWhereWhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<VideoAnimethemeentriesWhereWhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<VideoAnimethemeentriesWhereWhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<VideoAnimethemeentriesWhereWhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `animethemeentries`. */
export type VideoAnimethemeentriesWhereWhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<VideoAnimethemeentriesWhereWhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

export enum VideoFilterableColumns {
    Basename = 'BASENAME',
    CreatedAt = 'CREATED_AT',
    Filename = 'FILENAME',
    Id = 'ID',
    Lyrics = 'LYRICS',
    Mimetype = 'MIMETYPE',
    Nc = 'NC',
    Overlap = 'OVERLAP',
    Path = 'PATH',
    Resolution = 'RESOLUTION',
    Size = 'SIZE',
    Source = 'SOURCE',
    Subbed = 'SUBBED',
    Uncen = 'UNCEN',
    UpdatedAt = 'UPDATED_AT',
}

export enum VideoOverlap {
    None = 'NONE',
    Over = 'OVER',
    Trans = 'TRANS',
}

/** A paginated list of Video items. */
export type VideoPaginator = {
    __typename?: 'VideoPaginator';
    /** A list of Video items. */
    data: Array<Video>;
    /** Pagination information about the list of items. */
    paginatorInfo: PaginatorInfo;
};

/**
 * Represents an encoding script used to produce a video.
 *
 * For example, the 2009/Summer/Bakemonogatari-OP1.txt video script represents the encoding script of the Bakemonogatari-OP1.webm video.
 */
export type VideoScript = {
    __typename?: 'VideoScript';
    /** The date that the resource was created */
    createdAt?: Maybe<Scalars['String']['output']>;
    /** The primary key of the resource */
    id: Scalars['Int']['output'];
    /** The URL to download the file from storage */
    link: Scalars['String']['output'];
    /** The path of the file in storage */
    path: Scalars['String']['output'];
    /** The date that the resource was updated */
    updatedAt?: Maybe<Scalars['String']['output']>;
    video: Video;
};

/**
 * Represents an encoding script used to produce a video.
 *
 * For example, the 2009/Summer/Bakemonogatari-OP1.txt video script represents the encoding script of the Bakemonogatari-OP1.webm video.
 */
export type VideoScriptCreatedAtArgs = {
    format?: Scalars['String']['input'];
};

/**
 * Represents an encoding script used to produce a video.
 *
 * For example, the 2009/Summer/Bakemonogatari-OP1.txt video script represents the encoding script of the Bakemonogatari-OP1.webm video.
 */
export type VideoScriptUpdatedAtArgs = {
    format?: Scalars['String']['input'];
};

export enum VideoSort {
    Basename = 'BASENAME',
    BasenameDesc = 'BASENAME_DESC',
    CreatedAt = 'CREATED_AT',
    CreatedAtDesc = 'CREATED_AT_DESC',
    Filename = 'FILENAME',
    FilenameDesc = 'FILENAME_DESC',
    Id = 'ID',
    IdDesc = 'ID_DESC',
    Random = 'RANDOM',
    Resolution = 'RESOLUTION',
    ResolutionDesc = 'RESOLUTION_DESC',
    Size = 'SIZE',
    SizeDesc = 'SIZE_DESC',
    UpdatedAt = 'UPDATED_AT',
    UpdatedAtDesc = 'UPDATED_AT_DESC',
}

export enum VideoSource {
    Bd = 'BD',
    Dvd = 'DVD',
    Ld = 'LD',
    Raw = 'RAW',
    Vhs = 'VHS',
    Web = 'WEB',
}

/** Represents the watch history of the authenticated user. */
export type WatchHistory = {
    __typename?: 'WatchHistory';
    animethemeentry: AnimeThemeEntry;
    video: Video;
};

/** Dynamic WHERE conditions for queries. */
export type WhereConditions = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<WhereConditions>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<WhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<WhereConditions>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic WHERE conditions for HAS conditions. */
export type WhereConditionsHasCondition = {
    /** A set of conditions that requires all conditions to match. */
    AND?: InputMaybe<Array<WhereConditionsHasCondition>>;
    /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
    HAS?: InputMaybe<WhereConditionsRelation>;
    /** A set of conditions that requires at least one condition to match. */
    OR?: InputMaybe<Array<WhereConditionsHasCondition>>;
    /** The column that is used for the condition. */
    column?: InputMaybe<Scalars['String']['input']>;
    /** The operator that is used for the condition. */
    operator?: InputMaybe<SqlOperator>;
    /** The value that is used for the condition. */
    value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE condition queries. */
export type WhereConditionsRelation = {
    /** The amount to test. */
    amount?: InputMaybe<Scalars['Int']['input']>;
    /** Additional condition logic. */
    condition?: InputMaybe<WhereConditionsHasCondition>;
    /** The comparison operator to test against the amount. */
    operator?: InputMaybe<SqlOperator>;
    /** The relation that is checked. */
    relation: Scalars['String']['input'];
};

export type VideoNotificationQueryVariables = Exact<{
    id: Scalars['Int']['input'];
}>;

export type VideoNotificationQuery = {
    __typename?: 'Query';
    video?: {
        __typename?: 'Video';
        link: string;
        overlapLocalized: string;
        resolution?: number | null;
        sourceLocalized?: string | null;
        tags?: string | null;
        animethemeentries: {
            __typename?: 'VideoAnimeThemeEntryConnection';
            nodes: Array<{
                __typename?: 'AnimeThemeEntry';
                episodes?: string | null;
                nsfw: boolean;
                spoiler: boolean;
                version: number;
                animetheme: {
                    __typename?: 'AnimeTheme';
                    type: ThemeType;
                    sequence?: number | null;
                    typeLocalized: string;
                    song?: {
                        __typename?: 'Song';
                        title?: string | null;
                        performances: Array<{
                            __typename?: 'Performance';
                            alias?: string | null;
                            as?: string | null;
                            artist: { __typename?: 'Artist'; name: string; slug: string };
                            member?: { __typename?: 'Artist'; id: number; name: string; slug: string } | null;
                        }>;
                    } | null;
                    group?: { __typename?: 'ThemeGroup'; slug: string } | null;
                    anime: {
                        __typename?: 'Anime';
                        slug: string;
                        images: {
                            __typename?: 'ImageConnection';
                            nodes: Array<{ __typename?: 'Image'; link: string }>;
                        };
                    };
                };
            }>;
        };
    } | null;
};

export type AnimeThreadQueryVariables = Exact<{
    slug: Scalars['String']['input'];
}>;

export type AnimeThreadQuery = {
    __typename?: 'Query';
    anime?: {
        __typename?: 'Anime';
        name: string;
        slug: string;
        season?: AnimeSeason | null;
        synopsis?: string | null;
        images: {
            __typename?: 'ImageConnection';
            nodes: Array<{ __typename?: 'Image'; facet: ImageFacet; link: string }>;
        };
    } | null;
};

export type AnimeThreadEmbedFragment = { __typename?: 'Anime'; name: string; slug: string; synopsis?: string | null };

export type VideoEmbedFragment = {
    __typename?: 'Video';
    overlapLocalized: string;
    resolution?: number | null;
    sourceLocalized?: string | null;
    tags?: string | null;
    animethemeentries: {
        __typename?: 'VideoAnimeThemeEntryConnection';
        nodes: Array<{
            __typename?: 'AnimeThemeEntry';
            episodes?: string | null;
            nsfw: boolean;
            spoiler: boolean;
            version: number;
            animetheme: {
                __typename?: 'AnimeTheme';
                typeLocalized: string;
                sequence?: number | null;
                anime: {
                    __typename?: 'Anime';
                    slug: string;
                    images: { __typename?: 'ImageConnection'; nodes: Array<{ __typename?: 'Image'; link: string }> };
                };
                song?: {
                    __typename?: 'Song';
                    title?: string | null;
                    performances: Array<{
                        __typename?: 'Performance';
                        alias?: string | null;
                        as?: string | null;
                        artist: { __typename?: 'Artist'; name: string; slug: string };
                        member?: { __typename?: 'Artist'; id: number } | null;
                    }>;
                } | null;
                group?: { __typename?: 'ThemeGroup'; slug: string } | null;
            };
        }>;
    };
};

export type CurrentFeaturedThemeQueryVariables = Exact<{ [key: string]: never }>;

export type CurrentFeaturedThemeQuery = {
    __typename?: 'Query';
    currentfeaturedtheme?: {
        __typename?: 'FeaturedTheme';
        animethemeentry?: {
            __typename?: 'AnimeThemeEntry';
            version: number;
            animetheme: {
                __typename?: 'AnimeTheme';
                typeLocalized: string;
                sequence?: number | null;
                anime: { __typename?: 'Anime'; name: string };
                group?: { __typename?: 'ThemeGroup'; slug: string } | null;
            };
        } | null;
        video?: { __typename?: 'Video'; tags?: string | null } | null;
    } | null;
};

export type ArtistDescriptionFragmentPerformanceFragment = {
    __typename?: 'Performance';
    alias?: string | null;
    as?: string | null;
    artist: { __typename?: 'Artist'; name: string; slug: string };
    member?: { __typename?: 'Artist'; id: number } | null;
};

export type CreateVideoSlugThemeFragment = {
    __typename?: 'AnimeTheme';
    typeLocalized: string;
    sequence?: number | null;
    group?: { __typename?: 'ThemeGroup'; slug: string } | null;
};

export type CreateVideoSlugEntryFragment = { __typename?: 'AnimeThemeEntry'; version: number };

export type CreateVideoSlugVideoFragment = { __typename?: 'Video'; tags?: string | null };

export const AnimeThreadEmbedFragmentDoc = {
    kind: 'Document',
    definitions: [
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'AnimeThreadEmbed' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Anime' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'synopsis' } },
                ],
            },
        },
    ],
} as unknown as DocumentNode<AnimeThreadEmbedFragment, unknown>;
export const CreateVideoSlugVideoFragmentDoc = {
    kind: 'Document',
    definitions: [
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'createVideoSlugVideo' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Video' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [{ kind: 'Field', name: { kind: 'Name', value: 'tags' } }],
            },
        },
    ],
} as unknown as DocumentNode<CreateVideoSlugVideoFragment, unknown>;
export const CreateVideoSlugEntryFragmentDoc = {
    kind: 'Document',
    definitions: [
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'createVideoSlugEntry' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'AnimeThemeEntry' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [{ kind: 'Field', name: { kind: 'Name', value: 'version' } }],
            },
        },
    ],
} as unknown as DocumentNode<CreateVideoSlugEntryFragment, unknown>;
export const CreateVideoSlugThemeFragmentDoc = {
    kind: 'Document',
    definitions: [
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'createVideoSlugTheme' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'AnimeTheme' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'typeLocalized' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'sequence' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'group' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'Field', name: { kind: 'Name', value: 'slug' } }],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<CreateVideoSlugThemeFragment, unknown>;
export const ArtistDescriptionFragmentPerformanceFragmentDoc = {
    kind: 'Document',
    definitions: [
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'ArtistDescriptionFragmentPerformance' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Performance' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'alias' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'as' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'artist' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'member' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<ArtistDescriptionFragmentPerformanceFragment, unknown>;
export const VideoEmbedFragmentDoc = {
    kind: 'Document',
    definitions: [
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'VideoEmbed' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Video' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'FragmentSpread', name: { kind: 'Name', value: 'createVideoSlugVideo' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'overlapLocalized' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'resolution' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'sourceLocalized' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'animethemeentries' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'nodes' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'FragmentSpread',
                                                name: { kind: 'Name', value: 'createVideoSlugEntry' },
                                            },
                                            { kind: 'Field', name: { kind: 'Name', value: 'episodes' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'nsfw' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'spoiler' } },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'animetheme' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'FragmentSpread',
                                                            name: { kind: 'Name', value: 'createVideoSlugTheme' },
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'anime' },
                                                            selectionSet: {
                                                                kind: 'SelectionSet',
                                                                selections: [
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'slug' },
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'images' },
                                                                        selectionSet: {
                                                                            kind: 'SelectionSet',
                                                                            selections: [
                                                                                {
                                                                                    kind: 'Field',
                                                                                    name: {
                                                                                        kind: 'Name',
                                                                                        value: 'nodes',
                                                                                    },
                                                                                    selectionSet: {
                                                                                        kind: 'SelectionSet',
                                                                                        selections: [
                                                                                            {
                                                                                                kind: 'Field',
                                                                                                name: {
                                                                                                    kind: 'Name',
                                                                                                    value: 'link',
                                                                                                },
                                                                                            },
                                                                                        ],
                                                                                    },
                                                                                },
                                                                            ],
                                                                        },
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'song' },
                                                            selectionSet: {
                                                                kind: 'SelectionSet',
                                                                selections: [
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'title' },
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'performances' },
                                                                        selectionSet: {
                                                                            kind: 'SelectionSet',
                                                                            selections: [
                                                                                {
                                                                                    kind: 'FragmentSpread',
                                                                                    name: {
                                                                                        kind: 'Name',
                                                                                        value: 'ArtistDescriptionFragmentPerformance',
                                                                                    },
                                                                                },
                                                                            ],
                                                                        },
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'createVideoSlugVideo' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Video' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [{ kind: 'Field', name: { kind: 'Name', value: 'tags' } }],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'createVideoSlugEntry' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'AnimeThemeEntry' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [{ kind: 'Field', name: { kind: 'Name', value: 'version' } }],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'createVideoSlugTheme' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'AnimeTheme' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'typeLocalized' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'sequence' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'group' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'Field', name: { kind: 'Name', value: 'slug' } }],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'ArtistDescriptionFragmentPerformance' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Performance' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'alias' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'as' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'artist' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'member' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<VideoEmbedFragment, unknown>;
export const VideoNotificationDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'VideoNotification' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'video' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'id' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'createVideoSlugVideo' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'link' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'overlapLocalized' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'resolution' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'sourceLocalized' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'animethemeentries' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'nodes' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'FragmentSpread',
                                                            name: { kind: 'Name', value: 'createVideoSlugEntry' },
                                                        },
                                                        { kind: 'Field', name: { kind: 'Name', value: 'episodes' } },
                                                        { kind: 'Field', name: { kind: 'Name', value: 'nsfw' } },
                                                        { kind: 'Field', name: { kind: 'Name', value: 'spoiler' } },
                                                        { kind: 'Field', name: { kind: 'Name', value: 'version' } },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'animetheme' },
                                                            selectionSet: {
                                                                kind: 'SelectionSet',
                                                                selections: [
                                                                    {
                                                                        kind: 'FragmentSpread',
                                                                        name: {
                                                                            kind: 'Name',
                                                                            value: 'createVideoSlugTheme',
                                                                        },
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'type' },
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'sequence' },
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'song' },
                                                                        selectionSet: {
                                                                            kind: 'SelectionSet',
                                                                            selections: [
                                                                                {
                                                                                    kind: 'Field',
                                                                                    name: {
                                                                                        kind: 'Name',
                                                                                        value: 'title',
                                                                                    },
                                                                                },
                                                                                {
                                                                                    kind: 'Field',
                                                                                    name: {
                                                                                        kind: 'Name',
                                                                                        value: 'performances',
                                                                                    },
                                                                                    arguments: [
                                                                                        {
                                                                                            kind: 'Argument',
                                                                                            name: {
                                                                                                kind: 'Name',
                                                                                                value: 'sort',
                                                                                            },
                                                                                            value: {
                                                                                                kind: 'EnumValue',
                                                                                                value: 'RELEVANCE',
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                    selectionSet: {
                                                                                        kind: 'SelectionSet',
                                                                                        selections: [
                                                                                            {
                                                                                                kind: 'Field',
                                                                                                name: {
                                                                                                    kind: 'Name',
                                                                                                    value: 'alias',
                                                                                                },
                                                                                            },
                                                                                            {
                                                                                                kind: 'Field',
                                                                                                name: {
                                                                                                    kind: 'Name',
                                                                                                    value: 'as',
                                                                                                },
                                                                                            },
                                                                                            {
                                                                                                kind: 'Field',
                                                                                                name: {
                                                                                                    kind: 'Name',
                                                                                                    value: 'artist',
                                                                                                },
                                                                                                selectionSet: {
                                                                                                    kind: 'SelectionSet',
                                                                                                    selections: [
                                                                                                        {
                                                                                                            kind: 'Field',
                                                                                                            name: {
                                                                                                                kind: 'Name',
                                                                                                                value: 'name',
                                                                                                            },
                                                                                                        },
                                                                                                        {
                                                                                                            kind: 'Field',
                                                                                                            name: {
                                                                                                                kind: 'Name',
                                                                                                                value: 'slug',
                                                                                                            },
                                                                                                        },
                                                                                                    ],
                                                                                                },
                                                                                            },
                                                                                            {
                                                                                                kind: 'Field',
                                                                                                name: {
                                                                                                    kind: 'Name',
                                                                                                    value: 'member',
                                                                                                },
                                                                                                selectionSet: {
                                                                                                    kind: 'SelectionSet',
                                                                                                    selections: [
                                                                                                        {
                                                                                                            kind: 'Field',
                                                                                                            name: {
                                                                                                                kind: 'Name',
                                                                                                                value: 'id',
                                                                                                            },
                                                                                                        },
                                                                                                        {
                                                                                                            kind: 'Field',
                                                                                                            name: {
                                                                                                                kind: 'Name',
                                                                                                                value: 'name',
                                                                                                            },
                                                                                                        },
                                                                                                        {
                                                                                                            kind: 'Field',
                                                                                                            name: {
                                                                                                                kind: 'Name',
                                                                                                                value: 'slug',
                                                                                                            },
                                                                                                        },
                                                                                                    ],
                                                                                                },
                                                                                            },
                                                                                        ],
                                                                                    },
                                                                                },
                                                                            ],
                                                                        },
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'group' },
                                                                        selectionSet: {
                                                                            kind: 'SelectionSet',
                                                                            selections: [
                                                                                {
                                                                                    kind: 'Field',
                                                                                    name: {
                                                                                        kind: 'Name',
                                                                                        value: 'slug',
                                                                                    },
                                                                                },
                                                                            ],
                                                                        },
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'anime' },
                                                                        selectionSet: {
                                                                            kind: 'SelectionSet',
                                                                            selections: [
                                                                                {
                                                                                    kind: 'Field',
                                                                                    name: {
                                                                                        kind: 'Name',
                                                                                        value: 'slug',
                                                                                    },
                                                                                },
                                                                                {
                                                                                    kind: 'Field',
                                                                                    name: {
                                                                                        kind: 'Name',
                                                                                        value: 'images',
                                                                                    },
                                                                                    arguments: [
                                                                                        {
                                                                                            kind: 'Argument',
                                                                                            name: {
                                                                                                kind: 'Name',
                                                                                                value: 'facet',
                                                                                            },
                                                                                            value: {
                                                                                                kind: 'EnumValue',
                                                                                                value: 'SMALL_COVER',
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                    selectionSet: {
                                                                                        kind: 'SelectionSet',
                                                                                        selections: [
                                                                                            {
                                                                                                kind: 'Field',
                                                                                                name: {
                                                                                                    kind: 'Name',
                                                                                                    value: 'nodes',
                                                                                                },
                                                                                                selectionSet: {
                                                                                                    kind: 'SelectionSet',
                                                                                                    selections: [
                                                                                                        {
                                                                                                            kind: 'Field',
                                                                                                            name: {
                                                                                                                kind: 'Name',
                                                                                                                value: 'link',
                                                                                                            },
                                                                                                        },
                                                                                                    ],
                                                                                                },
                                                                                            },
                                                                                        ],
                                                                                    },
                                                                                },
                                                                            ],
                                                                        },
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'createVideoSlugVideo' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Video' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [{ kind: 'Field', name: { kind: 'Name', value: 'tags' } }],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'createVideoSlugEntry' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'AnimeThemeEntry' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [{ kind: 'Field', name: { kind: 'Name', value: 'version' } }],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'createVideoSlugTheme' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'AnimeTheme' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'typeLocalized' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'sequence' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'group' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'Field', name: { kind: 'Name', value: 'slug' } }],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<VideoNotificationQuery, VideoNotificationQueryVariables>;
export const AnimeThreadDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'AnimeThread' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anime' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'slug' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'AnimeThreadEmbed' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'season' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'synopsis' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'images' },
                                    arguments: [
                                        {
                                            kind: 'Argument',
                                            name: { kind: 'Name', value: 'facet' },
                                            value: { kind: 'EnumValue', value: 'LARGE_COVER' },
                                        },
                                    ],
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'nodes' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        { kind: 'Field', name: { kind: 'Name', value: 'facet' } },
                                                        { kind: 'Field', name: { kind: 'Name', value: 'link' } },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'AnimeThreadEmbed' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Anime' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'synopsis' } },
                ],
            },
        },
    ],
} as unknown as DocumentNode<AnimeThreadQuery, AnimeThreadQueryVariables>;
export const CurrentFeaturedThemeDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'CurrentFeaturedTheme' },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currentfeaturedtheme' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'animethemeentry' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'FragmentSpread',
                                                name: { kind: 'Name', value: 'createVideoSlugEntry' },
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'animetheme' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'FragmentSpread',
                                                            name: { kind: 'Name', value: 'createVideoSlugTheme' },
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'anime' },
                                                            selectionSet: {
                                                                kind: 'SelectionSet',
                                                                selections: [
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'name' },
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'video' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'FragmentSpread',
                                                name: { kind: 'Name', value: 'createVideoSlugVideo' },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'createVideoSlugEntry' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'AnimeThemeEntry' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [{ kind: 'Field', name: { kind: 'Name', value: 'version' } }],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'createVideoSlugTheme' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'AnimeTheme' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'typeLocalized' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'sequence' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'group' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'Field', name: { kind: 'Name', value: 'slug' } }],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'createVideoSlugVideo' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Video' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [{ kind: 'Field', name: { kind: 'Name', value: 'tags' } }],
            },
        },
    ],
} as unknown as DocumentNode<CurrentFeaturedThemeQuery, CurrentFeaturedThemeQueryVariables>;
