declare namespace NodeJS {
    interface ProcessEnv {
        ANIMETHEMES_GRAPHQL: string;
        ARTIST_URL: string;
        ANIME_URL: string;
        API_HOST: string;
        API_KEY: string;
        API_PORT: string;
        DISCORD_TOKEN: string;
        DISCORD_FORUM_CHANNEL_ID: string;
        DISCORD_TRELLO_CHANNEL_ID: string;
        DISCORD_WINTER_FORUM_TAG: string;
        DISCORD_SPRING_FORUM_TAG: string;
        DISCORD_SUMMER_FORUM_TAG: string;
        DISCORD_FALL_FORUM_TAG: string;
        NODE_ENV: string | null;
        TRELLO_SECRET: string;
        TRELLO_CALLBACK_URL: string;
    }
}
