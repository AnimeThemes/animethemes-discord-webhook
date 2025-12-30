import { CommandInteraction, MessageFlags, ModalBuilder, ModalSubmitInteraction } from 'discord.js';

export const deferReply = async (interaction: CommandInteraction | ModalSubmitInteraction): Promise<void> => {
    await interaction.deferReply({ flags: MessageFlags.Ephemeral }).catch((err) => console.error(err));
};

export const editReply = async (interaction: CommandInteraction, msg: string): Promise<void> => {
    await interaction.editReply({ content: msg }).catch((err) => console.error(err));
};

export const followUp = async (interaction: CommandInteraction | ModalSubmitInteraction, msg: string): Promise<void> => {
    await interaction.followUp({ content: msg, flags: MessageFlags.Ephemeral }).catch((err) => console.error(err));
};

export const reply = async (interaction: CommandInteraction, msg: string): Promise<void> => {
    await interaction.reply({ content: msg, flags: MessageFlags.Ephemeral }).catch((err) => console.error(err));
};

export const showModal = async (interaction: CommandInteraction, modal: ModalBuilder): Promise<void> => {
    await interaction.showModal(modal).catch((err) => console.error(err));
};
