import * as dotenv from 'dotenv';

dotenv.config();

export default {
    DISCORD_TOKEN: process.env.DISCORD_TOKEN,
    DISCORD_FORUM_CHANNEL_ID: process.env.DISCORD_FORUM_CHANNEL_ID,
    DISCORD_TRELLO_CHANNEL_ID: process.env.DISCORD_TRELLO_CHANNEL_ID,
    API_ANIMETHEMES: process.env.API_ANIMETHEMES,
    ARTIST_URL: process.env.ARTIST_URL,
    ANIME_URL: process.env.ANIME_URL,
    SERVER_HOST: process.env.SERVER_HOST,
    SERVER_PORT: process.env.SERVER_PORT,
}