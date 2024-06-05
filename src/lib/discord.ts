import { CommandInteraction, ModalBuilder, ModalSubmitInteraction } from 'discord.js';

export const deferReply = async (interaction: CommandInteraction | ModalSubmitInteraction, ephemeral: boolean | undefined = true): Promise<void> => {
    try {
        await interaction.deferReply({ ephemeral: ephemeral });
    } catch (err) {
        console.error(err);
    }
};

export const editReply = async (interaction: CommandInteraction, msg: string): Promise<void> => {
    try {
        await interaction.editReply({ content: msg });
    } catch (err) {
        console.error(err);
    }
};

export const followUp = async (interaction: CommandInteraction | ModalSubmitInteraction, msg: string, ephemeral: boolean | undefined = true): Promise<void> => {
    try {
        await interaction.followUp({ content: msg, ephemeral: ephemeral });
    } catch (err) {
        console.error(err);
    }
};

export const reply = async (interaction: CommandInteraction, msg: string, ephemeral: boolean | undefined = true): Promise<void> => {
    try {
        await interaction.reply({ content: msg, ephemeral: ephemeral });
    } catch (err) {
        console.error(err);
    }
};

export const showModal = async (interaction: CommandInteraction, modal: ModalBuilder): Promise<void> => {
    try {
        await interaction.showModal(modal);
    } catch (err) {
        console.error(err);
    }
};