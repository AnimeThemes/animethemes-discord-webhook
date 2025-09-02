import * as dotenv from 'dotenv';

dotenv.config();

const config = {
    ANIMETHEMES_GRAPHQL: process.env.ANIMETHEMES_GRAPHQL,
    API_ANIMETHEMES: process.env.API_ANIMETHEMES,
    ARTIST_URL: process.env.ARTIST_URL,
    ANIME_URL: process.env.ANIME_URL,
    API_HOST_NAME: process.env.API_HOST_NAME,
    API_HOST: process.env.API_HOST,
    API_KEY: process.env.API_KEY,
    API_PORT: process.env.API_PORT ?? 3000,
    DISCORD_TOKEN: process.env.DISCORD_TOKEN,
    DISCORD_FORUM_CHANNEL_ID: process.env.DISCORD_FORUM_CHANNEL_ID,
    DISCORD_TRELLO_CHANNEL_ID: process.env.DISCORD_TRELLO_CHANNEL_ID,
    DISCORD_WINTER_FORUM_TAG: process.env.DISCORD_WINTER_FORUM_TAG,
    DISCORD_SPRING_FORUM_TAG: process.env.DISCORD_SPRING_FORUM_TAG,
    DISCORD_SUMMER_FORUM_TAG: process.env.DISCORD_SUMMER_FORUM_TAG,
    DISCORD_FALL_FORUM_TAG: process.env.DISCORD_FALL_FORUM_TAG,
    NODE_ENV: process.env.NODE_ENV ?? 'development',
    TRELLO_SECRET: process.env.TRELLO_SECRET,
};

export default config;
