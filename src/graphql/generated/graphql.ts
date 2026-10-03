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
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * Implement the DateTime<Utc> scalar
   *
   * The input/output is a string in RFC3339 format.
   */
  DateTime: { input: any; output: any; }
};

/**
 * Represents a production with at least one opening or ending sequence.
 *
 * For example, Bakemonogatari is an anime production with five opening sequences and one ending sequence.
 */
export type Anime = {
  __typename?: 'Anime';
  /** The format of the anime */
  format?: Maybe<AnimeFormat>;
  /** The localized string value of the format field */
  formatLocalized?: Maybe<Scalars['String']['output']>;
  /** The primary key of the resource */
  id: Scalars['Int']['output'];
  images: ImageableConnection;
  resources: ResourceableConnection;
  /** The premiere season of the anime */
  season?: Maybe<AnimeSeason>;
  /** The localized string value of the season field */
  seasonLocalized?: Maybe<Scalars['String']['output']>;
  series: AnimeSeriesConnection;
  /** The URL for the anime page on the website */
  siteUrl: Scalars['String']['output'];
  /** The URL slug & route key of the resource */
  slug: Scalars['String']['output'];
  studios: AnimeStudioConnection;
  synonyms: Array<Synonym>;
  /** The brief summary of the anime */
  synopsis?: Maybe<Scalars['String']['output']>;
  themes: Array<Theme>;
  /** The primary title of the anime */
  title: AnimeTitle;
  /** The premiere season year of the anime */
  year?: Maybe<Scalars['Int']['output']>;
};

export type AnimeConnection = {
  __typename?: 'AnimeConnection';
  /** A list of edges. */
  edges: Array<AnimeEdge>;
  /** A list of nodes. */
  nodes: Array<Anime>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AnimeEdge = {
  __typename?: 'AnimeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Anime;
};

export type AnimeFilterInput = {
  format?: InputMaybe<AnimeFormat>;
  season?: InputMaybe<AnimeSeason>;
  titleLike?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export enum AnimeFormat {
  Movie = 'MOVIE',
  Ona = 'ONA',
  Ova = 'OVA',
  Special = 'SPECIAL',
  Tv = 'TV',
  TvShort = 'TV_SHORT'
}

export type AnimePagination = {
  __typename?: 'AnimePagination';
  /** The data for the current page. */
  data: Array<Anime>;
  /** Information to aid in pagination. */
  pageInfo: OffsetPageInfo;
};

export enum AnimeSeason {
  Fall = 'FALL',
  Spring = 'SPRING',
  Summer = 'SUMMER',
  Winter = 'WINTER'
}

export type AnimeSeriesConnection = {
  __typename?: 'AnimeSeriesConnection';
  /** A list of edges. */
  edges: Array<AnimeSeriesEdge>;
  /** A list of nodes. */
  nodes: Array<Series>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AnimeSeriesEdge = {
  __typename?: 'AnimeSeriesEdge';
  createdAt: Scalars['String']['output'];
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Series;
  updatedAt: Scalars['String']['output'];
};


/** An edge in a connection. */
export type AnimeSeriesEdgeCreatedAtArgs = {
  format?: Scalars['String']['input'];
};


/** An edge in a connection. */
export type AnimeSeriesEdgeUpdatedAtArgs = {
  format?: Scalars['String']['input'];
};

export enum AnimeSort {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Random = 'RANDOM',
  TitleEnglish = 'TITLE_ENGLISH',
  TitleEnglishDesc = 'TITLE_ENGLISH_DESC',
  TitleNative = 'TITLE_NATIVE',
  TitleNativeDesc = 'TITLE_NATIVE_DESC',
  TitleRomaji = 'TITLE_ROMAJI',
  TitleRomajiDesc = 'TITLE_ROMAJI_DESC',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  Year = 'YEAR',
  YearDesc = 'YEAR_DESC'
}

export type AnimeStudioConnection = {
  __typename?: 'AnimeStudioConnection';
  /** A list of edges. */
  edges: Array<AnimeStudioEdge>;
  /** A list of nodes. */
  nodes: Array<Studio>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AnimeStudioEdge = {
  __typename?: 'AnimeStudioEdge';
  createdAt: Scalars['String']['output'];
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Studio;
  updatedAt: Scalars['String']['output'];
};


/** An edge in a connection. */
export type AnimeStudioEdgeCreatedAtArgs = {
  format?: Scalars['String']['input'];
};


/** An edge in a connection. */
export type AnimeStudioEdgeUpdatedAtArgs = {
  format?: Scalars['String']['input'];
};

export type AnimeTitle = {
  __typename?: 'AnimeTitle';
  english?: Maybe<Scalars['String']['output']>;
  native?: Maybe<Scalars['String']['output']>;
  romaji: Scalars['String']['output'];
};

/** The anime year response type, grouped by season */
export type AnimeYear = {
  __typename?: 'AnimeYear';
  /** The available seasons of the year and its anime */
  season: Array<AnimeYearSeason>;
  /** The year of the AnimeYear type */
  year: Scalars['Int']['output'];
};


/** The anime year response type, grouped by season */
export type AnimeYearSeasonArgs = {
  season?: InputMaybe<AnimeSeason>;
};

/** The anime year season type. */
export type AnimeYearSeason = {
  __typename?: 'AnimeYearSeason';
  anime: AnimeConnection;
  /** The season of the anime year. */
  season: AnimeSeason;
  /** The formatted string value of the season field. */
  seasonLocalized: Scalars['String']['output'];
};


/** The anime year season type. */
export type AnimeYearSeasonAnimeArgs = {
  filter?: InputMaybe<AnimeFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<Array<AnimeSort>>;
};

/** Represents a site-wide message to be broadcasted on the homepage. */
export type Announcement = {
  __typename?: 'Announcement';
  /** The announcement text */
  content: Scalars['String']['output'];
  /** The primary key of the resource */
  id: Scalars['Int']['output'];
};

/**
 * Represents a musical performer of anime sequences.
 *
 * For example, Chiwa Saitou is the musical performer of the Bakemonogatari OP1 theme, among many others.
 */
export type Artist = {
  __typename?: 'Artist';
  groups: ArtistMemberConnection;
  /** The primary key of the resource */
  id: Scalars['Int']['output'];
  images: ImageableConnection;
  /** The brief information of the resource */
  information?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `memberSongStaff` instead */
  memberPerformances: Array<SongStaff>;
  memberSongStaff: Array<SongStaff>;
  members: ArtistMemberConnection;
  /** The primary title of the artist */
  name: ArtistName;
  /** @deprecated Use `songStaff` instead */
  performances: Array<SongStaff>;
  resources: ResourceableConnection;
  /** The URL for the artist page on the website */
  siteUrl: Scalars['String']['output'];
  /** The URL slug & route key of the resource */
  slug: Scalars['String']['output'];
  songStaff: Array<SongStaff>;
  synonyms: Array<Synonym>;
  themeStaff: Array<ThemeStaff>;
};

export type ArtistConnection = {
  __typename?: 'ArtistConnection';
  /** A list of edges. */
  edges: Array<ArtistEdge>;
  /** A list of nodes. */
  nodes: Array<Artist>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ArtistEdge = {
  __typename?: 'ArtistEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Artist;
};

export type ArtistFilterInput = {
  nameMainLike?: InputMaybe<Scalars['String']['input']>;
};

export type ArtistMemberConnection = {
  __typename?: 'ArtistMemberConnection';
  /** A list of edges. */
  edges: Array<ArtistMemberEdge>;
  /** A list of nodes. */
  nodes: Array<Artist>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ArtistMemberEdge = {
  __typename?: 'ArtistMemberEdge';
  /** Used to distinguish member by alias */
  alias?: Maybe<Scalars['String']['output']>;
  /** Used to distinguish member by character */
  as?: Maybe<Scalars['String']['output']>;
  /** The date that the resource was created */
  createdAt: Scalars['String']['output'];
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Artist;
  /** Used to extra annotation, like member role */
  notes?: Maybe<Scalars['String']['output']>;
  /** Used to determine the relevance order of members in group */
  relevance: Scalars['Int']['output'];
  /** The date that the resource was updated */
  updatedAt: Scalars['String']['output'];
};


/** An edge in a connection. */
export type ArtistMemberEdgeCreatedAtArgs = {
  format?: Scalars['String']['input'];
};


/** An edge in a connection. */
export type ArtistMemberEdgeUpdatedAtArgs = {
  format?: Scalars['String']['input'];
};

export type ArtistName = {
  __typename?: 'ArtistName';
  /** The stylized name of the artist */
  main: Scalars['String']['output'];
  /** The native name of the artist */
  native?: Maybe<Scalars['String']['output']>;
};

export type ArtistPagination = {
  __typename?: 'ArtistPagination';
  /** The data for the current page. */
  data: Array<Artist>;
  /** Information to aid in pagination. */
  pageInfo: OffsetPageInfo;
};

export enum ArtistSort {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  NameMain = 'NAME_MAIN',
  NameMainDesc = 'NAME_MAIN_DESC',
  NameNative = 'NAME_NATIVE',
  NameNativeDesc = 'NAME_NATIVE_DESC',
  Random = 'RANDOM',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/**
 * Represents the audio track of a video.
 *
 * For example, the audio Bakemonogatari-OP1.ogg represents the audio track of the Bakemonogatari-OP1.webm video.
 */
export type Audio = {
  __typename?: 'Audio';
  /** The basename of the file in storage */
  basename: Scalars['String']['output'];
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
};

export type CreatePlaylistInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  visibility: PlaylistVisibility;
};

export type CreatePlaylistTrackInput = {
  entryId: Scalars['Int']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  videoId: Scalars['Int']['input'];
};

/** Represents the current featured theme on the homepage of the site. */
export type CurrentFeaturedTheme = {
  __typename?: 'CurrentFeaturedTheme';
  /** The end date of the resource */
  endAt?: Maybe<Scalars['String']['output']>;
  entry: Entry;
  /** The primary key of the resource */
  id: Scalars['Int']['output'];
  /** The start date of the resource */
  startAt?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  video: Video;
};


/** Represents the current featured theme on the homepage of the site. */
export type CurrentFeaturedThemeEndAtArgs = {
  format?: Scalars['String']['input'];
};


/** Represents the current featured theme on the homepage of the site. */
export type CurrentFeaturedThemeStartAtArgs = {
  format?: Scalars['String']['input'];
};

/**
 * Represents a version of a theme.
 *
 * For example, the ED theme of the Bakemonogatari anime has three theme entries to represent three versions.
 */
export type Entry = {
  __typename?: 'Entry';
  /** The episodes that the theme is used for */
  episodes?: Maybe<Scalars['String']['output']>;
  /** The number of favorites recorded for the resource */
  favoritesCount: Scalars['Int']['output'];
  /** The primary key of the resource */
  id: Scalars['Int']['output'];
  /** Any additional information for this sequence */
  notes?: Maybe<Scalars['String']['output']>;
  /** Is not safe for work content included? */
  nsfw: Scalars['Boolean']['output'];
  /** Is content included that may spoil the viewer? */
  spoiler: Scalars['Boolean']['output'];
  theme: Theme;
  /** The number of tracks belonging to the resource */
  tracksCount: Scalars['Int']['output'];
  /** The version number of the theme */
  version: Scalars['Int']['output'];
  videos: EntryVideoConnection;
};

export type EntryConnection = {
  __typename?: 'EntryConnection';
  /** A list of edges. */
  edges: Array<EntryEdge>;
  /** A list of nodes. */
  nodes: Array<Entry>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type EntryEdge = {
  __typename?: 'EntryEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Entry;
};

export type EntryFilterInput = {
  spoiler?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EntryVideoConnection = {
  __typename?: 'EntryVideoConnection';
  /** A list of edges. */
  edges: Array<EntryVideoEdge>;
  /** A list of nodes. */
  nodes: Array<Video>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type EntryVideoEdge = {
  __typename?: 'EntryVideoEdge';
  createdAt: Scalars['String']['output'];
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Video;
  updatedAt: Scalars['String']['output'];
};


/** An edge in a connection. */
export type EntryVideoEdgeCreatedAtArgs = {
  format?: Scalars['String']['input'];
};


/** An edge in a connection. */
export type EntryVideoEdgeUpdatedAtArgs = {
  format?: Scalars['String']['input'];
};

/**
 * Represents a site with supplementary information for another resource such as an anime or artist.
 *
 * For example, the Bakemonogatari anime has MyAnimeList, AniList and AniDB resources.
 */
export type ExternalResource = {
  __typename?: 'ExternalResource';
  /** The primary key of the resource in the external site */
  externalId?: Maybe<Scalars['Int']['output']>;
  /** The primary key of the resource */
  id: Scalars['Int']['output'];
  /** The URL of the external site */
  link: Scalars['String']['output'];
  /** The external site that the resource belongs to */
  site: ResourceSite;
  /** The localized string value of the site field */
  siteLocalized: Scalars['String']['output'];
};

/** Represents a favorite of a user. */
export type Favorite = {
  __typename?: 'Favorite';
  entry?: Maybe<Entry>;
  id: Scalars['Int']['output'];
  user: User;
};

export type FavoriteableType = {
  entry?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * Represents a visual component for another resource such as an anime or artist.
 *
 * For example, the Bakemonogatari anime has two images to represent small and large cover images.
 */
export type Image = {
  __typename?: 'Image';
  /** The component that the resource is intended for */
  facet: ImageFacet;
  /** The localized string value of the facet field */
  facetLocalized: Scalars['String']['output'];
  /** The primary key of the resource */
  id: Scalars['Int']['output'];
  /** The URL to stream the file from storage */
  link: Scalars['String']['output'];
  /** The path of the file in storage */
  path: Scalars['String']['output'];
};

export type ImageConnection = {
  __typename?: 'ImageConnection';
  /** A list of edges. */
  edges: Array<ImageEdge>;
  /** A list of nodes. */
  nodes: Array<Image>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ImageEdge = {
  __typename?: 'ImageEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Image;
};

export enum ImageFacet {
  Avatar = 'AVATAR',
  Banner = 'BANNER',
  Document = 'DOCUMENT',
  Grill = 'GRILL',
  LargeCover = 'LARGE_COVER',
  SmallCover = 'SMALL_COVER'
}

export type ImageFilterInput = {
  facet?: InputMaybe<ImageFacet>;
};

export enum ImageSort {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Random = 'RANDOM',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

export type ImageableConnection = {
  __typename?: 'ImageableConnection';
  /** A list of edges. */
  edges: Array<ImageableEdge>;
  /** A list of nodes. */
  nodes: Array<Image>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ImageableEdge = {
  __typename?: 'ImageableEdge';
  /** The date that the resource was created */
  createdAt: Scalars['String']['output'];
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** Used to sort the images */
  depth: Scalars['Int']['output'];
  /** The item at the end of the edge */
  node: Image;
  /** The date that the resource was updated */
  updatedAt: Scalars['String']['output'];
};


/** An edge in a connection. */
export type ImageableEdgeCreatedAtArgs = {
  format?: Scalars['String']['input'];
};


/** An edge in a connection. */
export type ImageableEdgeUpdatedAtArgs = {
  format?: Scalars['String']['input'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

/** Represents an Themes account. */
export type Me = {
  __typename?: 'Me';
  /** The date that the resource was created */
  createdAt: Scalars['DateTime']['output'];
  /** The email of the user */
  email: Scalars['String']['output'];
  /** The date the user verified their email */
  emailVerifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The favorites of the authenticated user. */
  favorites: Array<Favorite>;
  /** The primary key of the resource */
  id: Scalars['Int']['output'];
  /** The username of the resource */
  name: Scalars['String']['output'];
  /** The playlists of the authenticated user. */
  playlists: PlaylistConnection;
  /** The ratings of the authenticated user. */
  ratings: Array<Rating>;
  /** The roles of the authenticated user. */
  roles: Array<Role>;
  /** The date that the resource was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** The watch history of the authenticated user. */
  watchHistory: WatchHistoryConnection;
};


/** Represents an Themes account. */
export type MeFavoritesArgs = {
  filter?: InputMaybe<UserFavoritesFilterInput>;
};


/** Represents an Themes account. */
export type MePlaylistsArgs = {
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<Array<PlaylistSort>>;
};


/** Represents an Themes account. */
export type MeRatingsArgs = {
  sort?: InputMaybe<Array<RatingSort>>;
};


/** Represents an Themes account. */
export type MeWatchHistoryArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Clear the watch history for the authenticated user. */
  clearWatchHistory: Scalars['Boolean']['output'];
  createPlaylist: Playlist;
  createPlaylistTrack: PlaylistTrack;
  deletePlaylist: Scalars['Boolean']['output'];
  deletePlaylistTrack: Scalars['Boolean']['output'];
  forgotPassword: Scalars['Boolean']['output'];
  login: Me;
  logout: Scalars['Boolean']['output'];
  register: Me;
  resendEmailVerification: Scalars['Boolean']['output'];
  resetPassword: Scalars['Boolean']['output'];
  toggleFavorite?: Maybe<Favorite>;
  updatePassword: Scalars['Boolean']['output'];
  updatePlaylist: Playlist;
  updatePlaylistTrack: PlaylistTrack;
  updateUserInformation: Scalars['Boolean']['output'];
  /** Mark a video as watched for the authenticated user. */
  watch: WatchHistory;
};


export type MutationCreatePlaylistArgs = {
  input: CreatePlaylistInput;
};


export type MutationCreatePlaylistTrackArgs = {
  input: CreatePlaylistTrackInput;
  playlist: Scalars['String']['input'];
};


export type MutationDeletePlaylistArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePlaylistTrackArgs = {
  id: Scalars['String']['input'];
  playlist: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationToggleFavoriteArgs = {
  favorite: FavoriteableType;
};


export type MutationUpdatePasswordArgs = {
  input: UpdatePasswordInput;
};


export type MutationUpdatePlaylistArgs = {
  id: Scalars['String']['input'];
  input: UpdatePlaylistInput;
};


export type MutationUpdatePlaylistTrackArgs = {
  id: Scalars['String']['input'];
  input: UpdatePlaylistTrackInput;
  playlist: Scalars['String']['input'];
};


export type MutationUpdateUserInformationArgs = {
  input: UpdateUserInformationInput;
};


export type MutationWatchArgs = {
  entryId: Scalars['Int']['input'];
  videoId: Scalars['Int']['input'];
};

export type OffsetPageInfo = {
  __typename?: 'OffsetPageInfo';
  /** The number of items per page. */
  first: Scalars['Int']['output'];
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? Note: Paginating backwards is not supported. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** The offset of the current page. */
  offset: Scalars['Int']['output'];
  /** The total number of items. */
  total: Scalars['Int']['output'];
};

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

export type PageConnection = {
  __typename?: 'PageConnection';
  /** A list of edges. */
  edges: Array<PageEdge>;
  /** A list of nodes. */
  nodes: Array<Page>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Page;
};

export type PageFilterInput = {
  nameLike?: InputMaybe<Scalars['String']['input']>;
};

/** Information about pagination in a connection */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export enum PageSort {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Name = 'NAME',
  NameDesc = 'NAME_DESC',
  Random = 'RANDOM',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

export type PaginationInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type Permissions = {
  __typename?: 'Permissions';
  canCreatePlaylist: PermissionsResult;
  canRevalidatePages: Scalars['Boolean']['output'];
};

export type PermissionsResult = {
  __typename?: 'PermissionsResult';
  /** Whether the permission check was successful. */
  allow: Scalars['Boolean']['output'];
  /** The reason for the permission check failure, if any. */
  reason?: Maybe<Scalars['String']['output']>;
};

/**
 * Represents a list of ordered tracks intended for continuous playback.
 *
 * For example, a "/r/anime's Best OPs and EDs of 2022" playlist may contain a collection of tracks allowing the continuous playback of Best OP and ED nominations for the /r/anime Awards.
 */
export type Playlist = {
  __typename?: 'Playlist';
  /** The description of the playlist */
  description?: Maybe<Scalars['String']['output']>;
  /** The primary key of the resource */
  id: Scalars['String']['output'];
  /** The title of the playlist */
  name: Scalars['String']['output'];
  permissions: PlaylistPermissions;
  /** The URL for the playlist page on the website */
  siteUrl: Scalars['String']['output'];
  tracks: Array<PlaylistTrack>;
  tracksCount: Scalars['Int']['output'];
  tracksExists: Scalars['Boolean']['output'];
  user: User;
  /** The state of who can see the playlist */
  visibility: PlaylistVisibility;
  /** The localized string value of the visibility field */
  visibilityLocalized: Scalars['String']['output'];
};


/**
 * Represents a list of ordered tracks intended for continuous playback.
 *
 * For example, a "/r/anime's Best OPs and EDs of 2022" playlist may contain a collection of tracks allowing the continuous playback of Best OP and ED nominations for the /r/anime Awards.
 */
export type PlaylistTracksArgs = {
  filter?: InputMaybe<PlaylistTracksFilterInput>;
  sort?: InputMaybe<Array<PlaylistTrackSort>>;
};

export type PlaylistConnection = {
  __typename?: 'PlaylistConnection';
  /** A list of edges. */
  edges: Array<PlaylistEdge>;
  /** A list of nodes. */
  nodes: Array<Playlist>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PlaylistEdge = {
  __typename?: 'PlaylistEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Playlist;
};

export type PlaylistFilterInput = {
  nameLike?: InputMaybe<Scalars['String']['input']>;
};

export type PlaylistPagination = {
  __typename?: 'PlaylistPagination';
  /** The data for the current page. */
  data: Array<Playlist>;
  /** Information to aid in pagination. */
  pageInfo: OffsetPageInfo;
};

export type PlaylistPermissions = {
  __typename?: 'PlaylistPermissions';
  canDelete: Scalars['Boolean']['output'];
  canReorderTracks: Scalars['Boolean']['output'];
  canUpdate: Scalars['Boolean']['output'];
};

export enum PlaylistSort {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Name = 'NAME',
  NameDesc = 'NAME_DESC',
  Random = 'RANDOM',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/**
 * Represents an entry in a playlist.
 *
 * For example, a "/r/anime's Best OPs and EDs of 2022" playlist may contain a track for the ParipiKoumei-OP1.webm video.
 */
export type PlaylistTrack = {
  __typename?: 'PlaylistTrack';
  entry: Entry;
  /** The primary key of the resource */
  id: Scalars['String']['output'];
  playlist: Playlist;
  /** The position of the playlist track within the playlist */
  position: Scalars['Int']['output'];
  video: Video;
};

export enum PlaylistTrackSort {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Position = 'POSITION',
  PositionDesc = 'POSITION_DESC',
  Random = 'RANDOM',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

export type PlaylistTracksFilterInput = {
  entryId?: InputMaybe<Scalars['Int']['input']>;
  videoId?: InputMaybe<Scalars['Int']['input']>;
};

export enum PlaylistVisibility {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
  Unlisted = 'UNLISTED'
}

export type Query = {
  __typename?: 'Query';
  anime?: Maybe<Anime>;
  animeConnection: AnimeConnection;
  /** Returns a list of years grouped by its seasons. */
  animeyears: Array<AnimeYear>;
  artist?: Maybe<Artist>;
  artistConnection: ArtistConnection;
  blogPages: PageConnection;
  currentAnnouncements: Array<Announcement>;
  currentFeaturedTheme?: Maybe<CurrentFeaturedTheme>;
  imageConnection: ImageConnection;
  me?: Maybe<Me>;
  mostPopularEntries: EntryConnection;
  page?: Maybe<Page>;
  pageConnection: PageConnection;
  permissions: Permissions;
  playlist?: Maybe<Playlist>;
  playlistConnection: PlaylistConnection;
  search: Search;
  series?: Maybe<Series>;
  seriesConnection: SeriesConnection;
  studio?: Maybe<Studio>;
  studioConnection: StudioConnection;
  themeConnection: ThemeConnection;
  themeShuffle: Array<Theme>;
  video?: Maybe<Video>;
  videoConnection: VideoConnection;
};


export type QueryAnimeArgs = {
  slug: Scalars['String']['input'];
};


export type QueryAnimeConnectionArgs = {
  filter?: InputMaybe<AnimeFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<Array<AnimeSort>>;
};


export type QueryAnimeyearsArgs = {
  year?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type QueryArtistArgs = {
  slug: Scalars['String']['input'];
};


export type QueryArtistConnectionArgs = {
  filter?: InputMaybe<ArtistFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<Array<ArtistSort>>;
};


export type QueryBlogPagesArgs = {
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<Array<PageSort>>;
};


export type QueryImageConnectionArgs = {
  filter?: InputMaybe<ImageFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<Array<ImageSort>>;
};


export type QueryMostPopularEntriesArgs = {
  filter?: InputMaybe<EntryFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryPageArgs = {
  slug: Scalars['String']['input'];
};


export type QueryPageConnectionArgs = {
  filter?: InputMaybe<PageFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryPlaylistArgs = {
  id: Scalars['String']['input'];
};


export type QueryPlaylistConnectionArgs = {
  filter?: InputMaybe<PlaylistFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<Array<PlaylistSort>>;
};


export type QuerySearchArgs = {
  first?: Scalars['Int']['input'];
  page?: Scalars['Int']['input'];
  search: Scalars['String']['input'];
};


export type QuerySeriesArgs = {
  slug: Scalars['String']['input'];
};


export type QuerySeriesConnectionArgs = {
  filter?: InputMaybe<SeriesFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<Array<SeriesSort>>;
};


export type QueryStudioArgs = {
  slug: Scalars['String']['input'];
};


export type QueryStudioConnectionArgs = {
  filter?: InputMaybe<StudioFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<Array<StudioSort>>;
};


export type QueryThemeConnectionArgs = {
  filter?: InputMaybe<ThemeFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<Array<ThemeSort>>;
};


export type QueryThemeShuffleArgs = {
  first?: Scalars['Int']['input'];
  input?: InputMaybe<ThemeShuffleInput>;
};


export type QueryVideoArgs = {
  id: Scalars['Int']['input'];
};


export type QueryVideoConnectionArgs = {
  filter?: InputMaybe<VideoFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<Array<VideoSort>>;
};

/** Represents the rating of the authenticated user. */
export type Rating = {
  __typename?: 'Rating';
  entry: Entry;
  /** The score of the rating. */
  score: Scalars['Float']['output'];
};

export enum RatingSort {
  Random = 'RANDOM',
  Score = 'SCORE',
  ScoreDesc = 'SCORE_DESC'
}

export type RegisterInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
  terms: Scalars['Boolean']['input'];
};

export type ResetPasswordInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
  token: Scalars['String']['input'];
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
  YoutubeMusic = 'YOUTUBE_MUSIC'
}

export type ResourceableConnection = {
  __typename?: 'ResourceableConnection';
  /** A list of edges. */
  edges: Array<ResourceableEdge>;
  /** A list of nodes. */
  nodes: Array<ExternalResource>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ResourceableEdge = {
  __typename?: 'ResourceableEdge';
  /** Used to distinguish resources that map to the same resourceable */
  as?: Maybe<Scalars['String']['output']>;
  /** The date that the resource was created */
  createdAt: Scalars['String']['output'];
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: ExternalResource;
  updatedAt: Scalars['String']['output'];
};


/** An edge in a connection. */
export type ResourceableEdgeCreatedAtArgs = {
  format?: Scalars['String']['input'];
};


/** An edge in a connection. */
export type ResourceableEdgeUpdatedAtArgs = {
  format?: Scalars['String']['input'];
};

/** Represents an assignable label for users that provides a configured group of permissions. */
export type Role = {
  __typename?: 'Role';
  /** The hex representation of the color used to distinguish the resource */
  color?: Maybe<Scalars['String']['output']>;
  /** Is the role assigned on account verification? */
  default: Scalars['Boolean']['output'];
  /** The primary key of the resource */
  id: Scalars['Int']['output'];
  /** The label of the resource */
  name: Scalars['String']['output'];
  /** The weight assigned to the resource, where higher values correspond to higher priority */
  priority: Scalars['Int']['output'];
};

/** Returns a listing of resources that match a given search term. */
export type Search = {
  __typename?: 'Search';
  /** The anime results of the search */
  anime: AnimePagination;
  /** The artist results of the search */
  artists: ArtistPagination;
  /** The playlist results of the search */
  playlists: PlaylistPagination;
  /** The series results of the search */
  series: SeriesPagination;
  /** The song results of the search */
  songs: SongPagination;
  /** The studio results of the search */
  studios: StudioPagination;
  /** The theme results of the search */
  themes: ThemePagination;
  /** The video results of the search */
  videos: VideoPagination;
};


/** Returns a listing of resources that match a given search term. */
export type SearchAnimeArgs = {
  filter?: InputMaybe<SearchAnimeFilterInput>;
  sort?: InputMaybe<Array<SearchAnimeSort>>;
};


/** Returns a listing of resources that match a given search term. */
export type SearchArtistsArgs = {
  filter?: InputMaybe<SearchArtistFilterInput>;
  sort?: InputMaybe<Array<SearchArtistSort>>;
};


/** Returns a listing of resources that match a given search term. */
export type SearchPlaylistsArgs = {
  sort?: InputMaybe<Array<SearchPlaylistSort>>;
};


/** Returns a listing of resources that match a given search term. */
export type SearchSeriesArgs = {
  filter?: InputMaybe<SearchSeriesFilterInput>;
  sort?: InputMaybe<Array<SearchSeriesSort>>;
};


/** Returns a listing of resources that match a given search term. */
export type SearchStudiosArgs = {
  filter?: InputMaybe<SearchStudioFilterInput>;
  sort?: InputMaybe<Array<SearchStudioSort>>;
};


/** Returns a listing of resources that match a given search term. */
export type SearchThemesArgs = {
  filter?: InputMaybe<SearchThemeFilterInput>;
  sort?: InputMaybe<Array<SearchThemeSort>>;
};

export type SearchAnimeFilterInput = {
  format?: InputMaybe<AnimeFormat>;
  season?: InputMaybe<AnimeSeason>;
  titleRomajiPrefix?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export enum SearchAnimeSort {
  CreatedAtDesc = 'CREATED_AT_DESC',
  Season = 'SEASON',
  SeasonDesc = 'SEASON_DESC',
  TitleRomaji = 'TITLE_ROMAJI',
  TitleRomajiDesc = 'TITLE_ROMAJI_DESC',
  Year = 'YEAR',
  YearDesc = 'YEAR_DESC'
}

export type SearchArtistFilterInput = {
  nameMainPrefix?: InputMaybe<Scalars['String']['input']>;
};

export enum SearchArtistSort {
  CreatedAtDesc = 'CREATED_AT_DESC',
  NameMain = 'NAME_MAIN',
  NameMainDesc = 'NAME_MAIN_DESC'
}

export enum SearchPlaylistSort {
  CreatedAtDesc = 'CREATED_AT_DESC',
  Name = 'NAME',
  NameDesc = 'NAME_DESC'
}

export type SearchSeriesFilterInput = {
  titleRomajiPrefix?: InputMaybe<Scalars['String']['input']>;
};

export enum SearchSeriesSort {
  CreatedAtDesc = 'CREATED_AT_DESC',
  TitleRomaji = 'TITLE_ROMAJI',
  TitleRomajiDesc = 'TITLE_ROMAJI_DESC'
}

export type SearchStudioFilterInput = {
  namePrefix?: InputMaybe<Scalars['String']['input']>;
};

export enum SearchStudioSort {
  CreatedAtDesc = 'CREATED_AT_DESC',
  Name = 'NAME',
  NameDesc = 'NAME_DESC'
}

export type SearchThemeFilterInput = {
  songTitleRomajiPrefix?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ThemeType>;
};

export enum SearchThemeSort {
  AnimeSeason = 'ANIME_SEASON',
  AnimeSeasonDesc = 'ANIME_SEASON_DESC',
  AnimeYear = 'ANIME_YEAR',
  AnimeYearDesc = 'ANIME_YEAR_DESC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  SongTitleRomaji = 'SONG_TITLE_ROMAJI',
  SongTitleRomajiDesc = 'SONG_TITLE_ROMAJI_DESC'
}

/**
 * Represents a collection of related anime.
 *
 * For example, the Monogatari series is the collection of the Bakemonogatari anime and its related productions.
 */
export type Series = {
  __typename?: 'Series';
  anime: SeriesAnimeConnection;
  /** The primary key of the resource */
  id: Scalars['Int']['output'];
  /** The URL for the series page on the website */
  siteUrl: Scalars['String']['output'];
  /** The URL slug & route key of the resource */
  slug: Scalars['String']['output'];
  /** The primary title of the series */
  title: SeriesTitle;
};

export type SeriesAnimeConnection = {
  __typename?: 'SeriesAnimeConnection';
  /** A list of edges. */
  edges: Array<SeriesAnimeEdge>;
  /** A list of nodes. */
  nodes: Array<Anime>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SeriesAnimeEdge = {
  __typename?: 'SeriesAnimeEdge';
  createdAt: Scalars['String']['output'];
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Anime;
  updatedAt: Scalars['String']['output'];
};


/** An edge in a connection. */
export type SeriesAnimeEdgeCreatedAtArgs = {
  format?: Scalars['String']['input'];
};


/** An edge in a connection. */
export type SeriesAnimeEdgeUpdatedAtArgs = {
  format?: Scalars['String']['input'];
};

export type SeriesConnection = {
  __typename?: 'SeriesConnection';
  /** A list of edges. */
  edges: Array<SeriesEdge>;
  /** A list of nodes. */
  nodes: Array<Series>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SeriesEdge = {
  __typename?: 'SeriesEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Series;
};

export type SeriesFilterInput = {
  titleRomajiLike?: InputMaybe<Scalars['String']['input']>;
};

export type SeriesPagination = {
  __typename?: 'SeriesPagination';
  /** The data for the current page. */
  data: Array<Series>;
  /** Information to aid in pagination. */
  pageInfo: OffsetPageInfo;
};

export enum SeriesSort {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Random = 'RANDOM',
  TitleRomaji = 'TITLE_ROMAJI',
  TitleRomajiDesc = 'TITLE_ROMAJI_DESC',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

export type SeriesTitle = {
  __typename?: 'SeriesTitle';
  romaji: Scalars['String']['output'];
};

/**
 * Represents the composition that accompanies an Theme.
 *
 * For example, Staple Stable is the song for the Bakemonogatari OP1 Theme.
 */
export type Song = {
  __typename?: 'Song';
  /** The primary key of the resource */
  id: Scalars['Int']['output'];
  /** @deprecated Use `performances` instead */
  performances: Array<SongStaff>;
  staff: Array<SongStaff>;
  themes: Array<Theme>;
  /** The title of the composition */
  title: SongTitle;
};

export type SongPagination = {
  __typename?: 'SongPagination';
  /** The data for the current page. */
  data: Array<Song>;
  /** Information to aid in pagination. */
  pageInfo: OffsetPageInfo;
};

/** Represents the link between a song and an artist or group. */
export type SongStaff = {
  __typename?: 'SongStaff';
  /** The alias the artist is using for this staff */
  alias?: Maybe<Scalars['String']['output']>;
  artist: Artist;
  /** The character the artist is performing as */
  as?: Maybe<Scalars['String']['output']>;
  /** The primary key of the resource */
  id: Scalars['Int']['output'];
  member?: Maybe<Artist>;
  /** The alias the member is using for this staff */
  memberAlias?: Maybe<Scalars['String']['output']>;
  /** The character the member is performing as */
  memberAs?: Maybe<Scalars['String']['output']>;
  /** Used to determine the relevance order of artists in staffs */
  relevance: Scalars['Int']['output'];
  /** The role the artist is performing */
  role: Scalars['String']['output'];
  song: Song;
};

export type SongTitle = {
  __typename?: 'SongTitle';
  /** The native title of the composition */
  native?: Maybe<Scalars['String']['output']>;
  /** The romaji title of the composition */
  romaji?: Maybe<Scalars['String']['output']>;
};

/**
 * Represents a company that produces anime.
 *
 * For example, Shaft is the studio that produced the anime Bakemonogatari.
 */
export type Studio = {
  __typename?: 'Studio';
  anime: StudioAnimeConnection;
  /** The primary key of the resource */
  id: Scalars['Int']['output'];
  images: ImageableConnection;
  /** The primary title of the Studio */
  name: Scalars['String']['output'];
  resources: ResourceableConnection;
  /** The URL for the studio page on the website */
  siteUrl: Scalars['String']['output'];
  /** The URL slug & route key of the resource */
  slug: Scalars['String']['output'];
};

export type StudioAnimeConnection = {
  __typename?: 'StudioAnimeConnection';
  /** A list of edges. */
  edges: Array<StudioAnimeEdge>;
  /** A list of nodes. */
  nodes: Array<Anime>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type StudioAnimeEdge = {
  __typename?: 'StudioAnimeEdge';
  createdAt: Scalars['String']['output'];
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Anime;
  updatedAt: Scalars['String']['output'];
};


/** An edge in a connection. */
export type StudioAnimeEdgeCreatedAtArgs = {
  format?: Scalars['String']['input'];
};


/** An edge in a connection. */
export type StudioAnimeEdgeUpdatedAtArgs = {
  format?: Scalars['String']['input'];
};

export type StudioConnection = {
  __typename?: 'StudioConnection';
  /** A list of edges. */
  edges: Array<StudioEdge>;
  /** A list of nodes. */
  nodes: Array<Studio>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type StudioEdge = {
  __typename?: 'StudioEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Studio;
};

export type StudioFilterInput = {
  nameLike?: InputMaybe<Scalars['String']['input']>;
};

export type StudioPagination = {
  __typename?: 'StudioPagination';
  /** The data for the current page. */
  data: Array<Studio>;
  /** Information to aid in pagination. */
  pageInfo: OffsetPageInfo;
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
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/**
 * Represents an alternate title or common abbreviation for an entity.
 *
 * For example, the anime Bakemonogatari has the synonym "Monstory".
 */
export type Synonym = {
  __typename?: 'Synonym';
  /** The primary key of the resource */
  id: Scalars['Int']['output'];
  /** The language of the synonym. It may be used for short synonyms */
  language?: Maybe<Scalars['String']['output']>;
  /** The alternate title or common abbreviations */
  text: Scalars['String']['output'];
};

/**
 * Represents an OP or ED sequence for an anime.
 *
 * For example, the anime Bakemonogatari has five OP themes and one ED theme.
 */
export type Theme = {
  __typename?: 'Theme';
  anime: Anime;
  entries: Array<Entry>;
  group?: Maybe<ThemeGroup>;
  /** The primary key of the resource */
  id: Scalars['Int']['output'];
  /** The numeric ordering of the theme */
  sequence?: Maybe<Scalars['Int']['output']>;
  /** The slug that represents the theme. */
  slug: Scalars['String']['output'];
  song?: Maybe<Song>;
  staff: Array<ThemeStaff>;
  /** The type of the sequence */
  type: ThemeType;
  /** The localized string value of the type field */
  typeLocalized: Scalars['String']['output'];
};

export type ThemeConnection = {
  __typename?: 'ThemeConnection';
  /** A list of edges. */
  edges: Array<ThemeEdge>;
  /** A list of nodes. */
  nodes: Array<Theme>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ThemeEdge = {
  __typename?: 'ThemeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Theme;
};

export type ThemeFilterInput = {
  idIn?: InputMaybe<Array<Scalars['Int']['input']>>;
  type?: InputMaybe<ThemeType>;
};

/**
 * Represents the group that accompanies a Theme.
 * For example, English Version is the group for english dubbed Theme.For example, Staple Stable is the song for the Bakemonogatari OP1 Theme.
 */
export type ThemeGroup = {
  __typename?: 'ThemeGroup';
  /** The primary key of the resource */
  id: Scalars['Int']['output'];
  /** The name of the group */
  name: Scalars['String']['output'];
  /** The slug of the group */
  slug: Scalars['String']['output'];
};

export type ThemePagination = {
  __typename?: 'ThemePagination';
  /** The data for the current page. */
  data: Array<Theme>;
  /** Information to aid in pagination. */
  pageInfo: OffsetPageInfo;
};

export type ThemeShuffleInput = {
  format?: InputMaybe<AnimeFormat>;
  spoiler?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<ThemeType>>;
  yearGte?: InputMaybe<Scalars['Int']['input']>;
  yearLte?: InputMaybe<Scalars['Int']['input']>;
};

export enum ThemeSort {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Random = 'RANDOM',
  Sequence = 'SEQUENCE',
  SequenceDesc = 'SEQUENCE_DESC',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/** Represents the link between a theme and an artist. */
export type ThemeStaff = {
  __typename?: 'ThemeStaff';
  /** The alias the artist is using for this staff */
  alias?: Maybe<Scalars['String']['output']>;
  artist: Artist;
  /** The primary key of the resource */
  id: Scalars['Int']['output'];
  /** Used to determine the relevance order of artists in staffs */
  relevance: Scalars['Int']['output'];
  /** The role the artist is performing */
  role: Scalars['String']['output'];
  theme: Theme;
};

export enum ThemeType {
  /** Ending */
  Ed = 'ED',
  /** Insert Song */
  In = 'IN',
  /** Opening */
  Op = 'OP'
}

export type UpdatePasswordInput = {
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  newPasswordConfirmation: Scalars['String']['input'];
};

export type UpdatePlaylistInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<PlaylistVisibility>;
};

export type UpdatePlaylistTrackInput = {
  entryId?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  videoId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateUserInformationInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Represents an Themes account. */
export type User = {
  __typename?: 'User';
  /** The primary key of the resource */
  id: Scalars['Int']['output'];
  /** The username of the resource */
  name: Scalars['String']['output'];
  playlists: Array<Playlist>;
};


/** Represents an Themes account. */
export type UserPlaylistsArgs = {
  sort?: InputMaybe<Array<PlaylistSort>>;
};

export type UserFavoritesFilterInput = {
  entryId?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * Represents a WebM of a theme.
 *
 * For example, the video Bakemonogatari-OP1.webm represents the WebM of the Bakemonogatari OP1 theme.
 */
export type Video = {
  __typename?: 'Video';
  audio?: Maybe<Audio>;
  /** The basename of the file in storage */
  basename: Scalars['String']['output'];
  entries: VideoEntryConnection;
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
  /** The frame height of the file in storage */
  resolution?: Maybe<Scalars['Int']['output']>;
  /** The size of the file in storage in Bytes */
  size?: Maybe<Scalars['Int']['output']>;
  /** Where did this video come from? */
  source?: Maybe<VideoSource>;
  /** The formatted string value of the source field */
  sourceLocalized?: Maybe<Scalars['String']['output']>;
  /** Does the video include subtitles of dialogue? */
  subbed: Scalars['Boolean']['output'];
  /** The attributes used to distinguish the file within the context of a theme */
  tags: Scalars['String']['output'];
  tracks: Array<PlaylistTrack>;
  /** Is the video an uncensored version of a censored sequence? */
  uncen: Scalars['Boolean']['output'];
  videoscript?: Maybe<VideoScript>;
};

export type VideoConnection = {
  __typename?: 'VideoConnection';
  /** A list of edges. */
  edges: Array<VideoEdge>;
  /** A list of nodes. */
  nodes: Array<Video>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type VideoEdge = {
  __typename?: 'VideoEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Video;
};

export type VideoEntryConnection = {
  __typename?: 'VideoEntryConnection';
  /** A list of edges. */
  edges: Array<VideoEntryEdge>;
  /** A list of nodes. */
  nodes: Array<Entry>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type VideoEntryEdge = {
  __typename?: 'VideoEntryEdge';
  createdAt: Scalars['String']['output'];
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Entry;
  updatedAt: Scalars['String']['output'];
};


/** An edge in a connection. */
export type VideoEntryEdgeCreatedAtArgs = {
  format?: Scalars['String']['input'];
};


/** An edge in a connection. */
export type VideoEntryEdgeUpdatedAtArgs = {
  format?: Scalars['String']['input'];
};

export type VideoFilterInput = {
  nc?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum VideoOverlap {
  None = 'NONE',
  Over = 'OVER',
  Trans = 'TRANS'
}

export type VideoPagination = {
  __typename?: 'VideoPagination';
  /** The data for the current page. */
  data: Array<Video>;
  /** Information to aid in pagination. */
  pageInfo: OffsetPageInfo;
};

/**
 * Represents an encoding script used to produce a video.
 *
 * For example, the 2009/Summer/Bakemonogatari-OP1.txt video script represents the encoding script of the Bakemonogatari-OP1.webm video.
 */
export type VideoScript = {
  __typename?: 'VideoScript';
  /** The primary key of the resource */
  id: Scalars['Int']['output'];
  /** The URL to stream the file from storage */
  link: Scalars['String']['output'];
  /** The path of the file in storage */
  path: Scalars['String']['output'];
};

export enum VideoSort {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Random = 'RANDOM',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

export enum VideoSource {
  Bd = 'BD',
  Dvd = 'DVD',
  Ld = 'LD',
  Raw = 'RAW',
  Vhs = 'VHS',
  Web = 'WEB'
}

export type WatchHistory = {
  __typename?: 'WatchHistory';
  entry: Entry;
  video: Video;
};

export type WatchHistoryConnection = {
  __typename?: 'WatchHistoryConnection';
  /** A list of edges. */
  edges: Array<WatchHistoryEdge>;
  /** A list of nodes. */
  nodes: Array<WatchHistory>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type WatchHistoryEdge = {
  __typename?: 'WatchHistoryEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: WatchHistory;
};

export type VideoNotificationQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type VideoNotificationQuery = { __typename?: 'Query', video?: { __typename?: 'Video', tags: string, overlap: VideoOverlap, overlapLocalized: string, resolution?: number | null, sourceLocalized?: string | null, entries: { __typename?: 'VideoEntryConnection', nodes: Array<{ __typename?: 'Entry', episodes?: string | null, notes?: string | null, nsfw: boolean, spoiler: boolean, version: number, theme: { __typename?: 'Theme', typeLocalized: string, sequence?: number | null, anime: { __typename?: 'Anime', siteUrl: string, title: { __typename?: 'AnimeTitle', romaji: string }, images: { __typename?: 'ImageableConnection', nodes: Array<{ __typename?: 'Image', link: string }> } }, song?: { __typename?: 'Song', title: { __typename?: 'SongTitle', romaji?: string | null }, staff: Array<{ __typename?: 'SongStaff', relevance: number, alias?: string | null, as?: string | null, role: string, artist: { __typename?: 'Artist', id: number, siteUrl: string, name: { __typename?: 'ArtistName', main: string } }, member?: { __typename?: 'Artist', id: number } | null }> } | null, group?: { __typename?: 'ThemeGroup', slug: string } | null } }> } } | null };

export type VideoEmbedFragment = { __typename?: 'Video', overlap: VideoOverlap, overlapLocalized: string, resolution?: number | null, sourceLocalized?: string | null, tags: string, entries: { __typename?: 'VideoEntryConnection', nodes: Array<{ __typename?: 'Entry', episodes?: string | null, notes?: string | null, nsfw: boolean, spoiler: boolean, version: number, theme: { __typename?: 'Theme', typeLocalized: string, sequence?: number | null, anime: { __typename?: 'Anime', siteUrl: string, title: { __typename?: 'AnimeTitle', romaji: string }, images: { __typename?: 'ImageableConnection', nodes: Array<{ __typename?: 'Image', link: string }> } }, song?: { __typename?: 'Song', title: { __typename?: 'SongTitle', romaji?: string | null }, staff: Array<{ __typename?: 'SongStaff', relevance: number, alias?: string | null, as?: string | null, role: string, artist: { __typename?: 'Artist', id: number, siteUrl: string, name: { __typename?: 'ArtistName', main: string } }, member?: { __typename?: 'Artist', id: number } | null }> } | null, group?: { __typename?: 'ThemeGroup', slug: string } | null } }> } };

export type CurrentFeaturedThemeQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentFeaturedThemeQuery = { __typename?: 'Query', currentFeaturedTheme?: { __typename?: 'CurrentFeaturedTheme', entry: { __typename?: 'Entry', version: number, theme: { __typename?: 'Theme', typeLocalized: string, sequence?: number | null, anime: { __typename?: 'Anime', title: { __typename?: 'AnimeTitle', romaji: string } }, group?: { __typename?: 'ThemeGroup', slug: string } | null } }, video: { __typename?: 'Video', tags: string } } | null };

export type SearchAnimeQueryVariables = Exact<{
  search: Scalars['String']['input'];
}>;


export type SearchAnimeQuery = { __typename?: 'Query', search: { __typename?: 'Search', anime: { __typename?: 'AnimePagination', pageInfo: { __typename?: 'OffsetPageInfo', first: number }, data: Array<{ __typename?: 'Anime', formatLocalized?: string | null, siteUrl: string, seasonLocalized?: string | null, synopsis?: string | null, year?: number | null, title: { __typename?: 'AnimeTitle', romaji: string }, images: { __typename?: 'ImageableConnection', nodes: Array<{ __typename?: 'Image', facet: ImageFacet, link: string }> } }> } } };

export type ArtistDescriptionFragmentSongStaffFragment = { __typename?: 'SongStaff', alias?: string | null, as?: string | null, role: string, artist: { __typename?: 'Artist', id: number, siteUrl: string, name: { __typename?: 'ArtistName', main: string } }, member?: { __typename?: 'Artist', id: number } | null };

export type CreateVideoSlugThemeFragment = { __typename?: 'Theme', typeLocalized: string, sequence?: number | null, group?: { __typename?: 'ThemeGroup', slug: string } | null };

export type CreateVideoSlugEntryFragment = { __typename?: 'Entry', version: number };

export type CreateVideoSlugVideoFragment = { __typename?: 'Video', tags: string };

export const CreateVideoSlugVideoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"createVideoSlugVideo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Video"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}}]}}]} as unknown as DocumentNode<CreateVideoSlugVideoFragment, unknown>;
export const CreateVideoSlugEntryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"createVideoSlugEntry"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"version"}}]}}]} as unknown as DocumentNode<CreateVideoSlugEntryFragment, unknown>;
export const CreateVideoSlugThemeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"createVideoSlugTheme"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"typeLocalized"}},{"kind":"Field","name":{"kind":"Name","value":"sequence"}},{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<CreateVideoSlugThemeFragment, unknown>;
export const ArtistDescriptionFragmentSongStaffFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistDescriptionFragmentSongStaff"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SongStaff"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"as"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"main"}}]}},{"kind":"Field","name":{"kind":"Name","value":"siteUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"member"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]} as unknown as DocumentNode<ArtistDescriptionFragmentSongStaffFragment, unknown>;
export const VideoEmbedFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoEmbed"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Video"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"createVideoSlugVideo"}},{"kind":"Field","name":{"kind":"Name","value":"overlap"}},{"kind":"Field","name":{"kind":"Name","value":"overlapLocalized"}},{"kind":"Field","name":{"kind":"Name","value":"resolution"}},{"kind":"Field","name":{"kind":"Name","value":"sourceLocalized"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"createVideoSlugEntry"}},{"kind":"Field","name":{"kind":"Name","value":"episodes"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"nsfw"}},{"kind":"Field","name":{"kind":"Name","value":"spoiler"}},{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"createVideoSlugTheme"}},{"kind":"Field","name":{"kind":"Name","value":"anime"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"romaji"}}]}},{"kind":"Field","name":{"kind":"Name","value":"siteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"song"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"romaji"}}]}},{"kind":"Field","name":{"kind":"Name","value":"staff"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistDescriptionFragmentSongStaff"}},{"kind":"Field","name":{"kind":"Name","value":"relevance"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"createVideoSlugVideo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Video"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"createVideoSlugEntry"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"version"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"createVideoSlugTheme"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"typeLocalized"}},{"kind":"Field","name":{"kind":"Name","value":"sequence"}},{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistDescriptionFragmentSongStaff"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SongStaff"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"as"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"main"}}]}},{"kind":"Field","name":{"kind":"Name","value":"siteUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"member"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]} as unknown as DocumentNode<VideoEmbedFragment, unknown>;
export const VideoNotificationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VideoNotification"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"video"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"createVideoSlugVideo"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoEmbed"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"createVideoSlugVideo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Video"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"createVideoSlugEntry"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"version"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"createVideoSlugTheme"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"typeLocalized"}},{"kind":"Field","name":{"kind":"Name","value":"sequence"}},{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistDescriptionFragmentSongStaff"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SongStaff"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"as"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"main"}}]}},{"kind":"Field","name":{"kind":"Name","value":"siteUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"member"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoEmbed"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Video"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"createVideoSlugVideo"}},{"kind":"Field","name":{"kind":"Name","value":"overlap"}},{"kind":"Field","name":{"kind":"Name","value":"overlapLocalized"}},{"kind":"Field","name":{"kind":"Name","value":"resolution"}},{"kind":"Field","name":{"kind":"Name","value":"sourceLocalized"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"createVideoSlugEntry"}},{"kind":"Field","name":{"kind":"Name","value":"episodes"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"nsfw"}},{"kind":"Field","name":{"kind":"Name","value":"spoiler"}},{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"createVideoSlugTheme"}},{"kind":"Field","name":{"kind":"Name","value":"anime"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"romaji"}}]}},{"kind":"Field","name":{"kind":"Name","value":"siteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"song"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"romaji"}}]}},{"kind":"Field","name":{"kind":"Name","value":"staff"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistDescriptionFragmentSongStaff"}},{"kind":"Field","name":{"kind":"Name","value":"relevance"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<VideoNotificationQuery, VideoNotificationQueryVariables>;
export const CurrentFeaturedThemeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CurrentFeaturedTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentFeaturedTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entry"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"createVideoSlugEntry"}},{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"createVideoSlugTheme"}},{"kind":"Field","name":{"kind":"Name","value":"anime"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"romaji"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"createVideoSlugVideo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"createVideoSlugEntry"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"version"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"createVideoSlugTheme"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"typeLocalized"}},{"kind":"Field","name":{"kind":"Name","value":"sequence"}},{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"createVideoSlugVideo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Video"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}}]}}]} as unknown as DocumentNode<CurrentFeaturedThemeQuery, CurrentFeaturedThemeQueryVariables>;
export const SearchAnimeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchAnime"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"search"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anime"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"first"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"formatLocalized"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"romaji"}}]}},{"kind":"Field","name":{"kind":"Name","value":"siteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"seasonLocalized"}},{"kind":"Field","name":{"kind":"Name","value":"synopsis"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facet"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<SearchAnimeQuery, SearchAnimeQueryVariables>;