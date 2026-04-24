import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';

export const veryPreviousEmbedButton = new ButtonBuilder()
    .setCustomId('veryPrevious')
    .setEmoji('⏪')
    .setStyle(ButtonStyle.Primary);

export const previousEmbedButton = new ButtonBuilder()
    .setCustomId('previous')
    .setEmoji('◀️')
    .setStyle(ButtonStyle.Primary);

export const nextEmbedButton = new ButtonBuilder().setCustomId('next').setEmoji('▶️').setStyle(ButtonStyle.Primary);

export const veryNextEmbedButton = new ButtonBuilder()
    .setCustomId('veryNext')
    .setEmoji('⏩')
    .setStyle(ButtonStyle.Primary);

export const previousNextRow = new ActionRowBuilder<ButtonBuilder>().addComponents([
    veryPreviousEmbedButton,
    previousEmbedButton,
    nextEmbedButton,
    veryNextEmbedButton,
]);
