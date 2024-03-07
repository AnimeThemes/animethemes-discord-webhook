import * as dotenv from 'dotenv';

dotenv.config();

/**
 * Class Config.
 */
export default class Config {
    public static readonly DISCORD_TOKEN = process.env.DISCORD_TOKEN;
    public static readonly DISCORD_FORUM_CHANNEL_ID = process.env.DISCORD_FORUM_CHANNEL_ID;
    public static readonly DISCORD_TRELLO_CHANNEL_ID = process.env.DISCORD_TRELLO_CHANNEL_ID;
    public static readonly API_ANIMETHEMES = process.env.API_ANIMETHEMES;
    public static readonly ARTIST_URL = process.env.ARTIST_URL;
    public static readonly ANIME_URL = process.env.ANIME_URL;
    public static readonly SERVER_HOST = process.env.SERVER_HOST;
    public static readonly SERVER_PORT = process.env.SERVER_PORT;
}