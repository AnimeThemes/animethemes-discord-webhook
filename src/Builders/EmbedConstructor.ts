import { client } from "../app";
import { EmbedBuilder, TextChannel } from "discord.js";

import * as dotenv from 'dotenv';

dotenv.config();

/**
 * Class DiscordEmbed
 * 
 * @property discordEmbedColor [number, number, number]
 * @property discordChannelId string 
 * @property discordEmbedTitle string
 * @property discordEmbedThumbnail string
 * @property discordEmbedDescription string
 * 
 * @method getDefaultEmbed EmbedBuilder
 * @method setChannelId EmbedBuilder
 * @method setColor EmbedBuilder
 * @method setTitle EmbedBuilder
 * @method setThumbnail EmbedBuilder
 * @method setDescription EmbedBuilder
 * @method notify Promise<string>
 */

class DiscordEmbed {

    private discordEmbedColor: [number, number, number] = [255, 255, 255];
    private discordChannelId: string = process.env.DISCORD_CHANNEL_ID;
    private discordEmbedTitle: string = '';
    private discordEmbedThumbnail: string = '';
    private discordEmbedDescription: string = '';

    /**
     * Build the control panel embed.
     * 
     * @returns EmbedBuilder
     */
    getDefaultEmbed(): EmbedBuilder {
        const embed = new EmbedBuilder()
            .setColor([0, 255, 255])
            .setDescription(description)
        
        return embed;
    }

    /**
     * Set a channel to send the notification.
     * 
     * @returns EmbedBuilder
     */
    setChannelId(channelId: string): DiscordEmbed {
        this.discordChannelId = channelId;

        return this;
    }

    /**
     * Set the color of the embed.
     * 
     * @returns EmbedBuilder
     */
    setColor(embedColor: [number, number, number]): DiscordEmbed {
        this.discordEmbedColor = embedColor;

        return this;
    }

    /**
     * Set the title of the embed.
     * 
     * @returns EmbedBuilder
     */
    setTitle(embedTitle: string): DiscordEmbed {
        this.discordEmbedTitle = embedTitle;

        return this;
    }

    /**
     * Set the thumbnail of the embed.
     * 
     * @returns EmbedBuilder
     */
    setThumbnail(embedThumbnail: string): DiscordEmbed {
        this.discordEmbedThumbnail = embedThumbnail;

        return this;
    }

    /**
     * Set the description of the embed.
     * 
     * @returns EmbedBuilder
     */
    setDescription(embedDescription: string): DiscordEmbed {
        this.discordEmbedDescription = embedDescription;

        return this;
    }

    /**
     * Send the notification
     * 
     * @returns Promise<string>
     */
    async notify(): Promise<string> {
        const channel = client.channels.cache.find(channel => channel.id === this.discordChannelId) as TextChannel;

        const embed = new EmbedBuilder()
            .setColor(this.discordEmbedColor)
            .setTitle(`**${this.discordEmbedTitle}**`)
            .setThumbnail(this.discordEmbedThumbnail)
            .setDescription(this.discordEmbedDescription);

        try {
            await channel.send({
                embeds: [embed]
            });

            return 'Sucess';

        } catch (err) {
            return 'Error';
        }
    }
}

const description = `**New Anime:** Create a notification embed with all anime themes.

**New Video:** Create a notification embed with the new video.

**Update Video:** Create a notification embed with an updated video.`

export default DiscordEmbed;