import { EmbedBuilder } from 'discord.js';

export interface TrelloEmbedConfig {
    actionTitle: string;
    actionDescription?: string;
    imageUrl?: string;
    color?: number;
    boardName: string;
    boardUrl: string;
    actionUserName: string;
    actionUserImageUrl: string;
}

export function createTrelloEmbed(config: TrelloEmbedConfig) {
    const embed = new EmbedBuilder()
        .setTitle(config.actionTitle)
        .setAuthor({
            name: config.boardName,
            url: config.boardUrl,
            iconURL: 'https://animethemes.moe/apple-touch-icon.png',
        })
        .setFooter({
            text: config.actionUserName,
            iconURL: config.actionUserImageUrl,
        });

    if (config.actionDescription) {
        embed.setDescription(config.actionDescription);
    }

    if (config.imageUrl) {
        embed.setThumbnail(config.imageUrl);
    }

    if (config.color) {
        embed.setColor(config.color);
    }

    return embed;
}