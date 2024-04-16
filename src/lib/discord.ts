import { CommandInteraction, ModalBuilder, ModalSubmitInteraction } from 'discord.js';

export async function deferReply(interaction: CommandInteraction | ModalSubmitInteraction, ephemeral: boolean | undefined = true): Promise<null> {
    try {
        await interaction.deferReply({ ephemeral: ephemeral });
    } catch (err) {
        console.error(err);
    } finally {
        return null;
    }
}

export async function editReply(interaction: CommandInteraction, msg: string): Promise<null> {
    try {
        await interaction.editReply({ content: msg });
    } catch (err) {
        console.error(err);
    } finally {
        return null;
    }
}

export async function followUp(interaction: CommandInteraction | ModalSubmitInteraction, msg: string, ephemeral: boolean | undefined = true): Promise<null> {
    try {
        await interaction.followUp({ content: msg, ephemeral: ephemeral });
    } catch (err) {
        console.error(err);
    } finally {
        return null;
    }
}

export async function reply(interaction: CommandInteraction, msg: string, ephemeral: boolean | undefined = true): Promise<null> {
    try {
        await interaction.reply({ content: msg, ephemeral: ephemeral });
    } catch (err) {
        console.error(err);
    } finally {
        return null;
    }
}

export async function showModal(interaction: CommandInteraction, modal: ModalBuilder): Promise<null> {
    try {
        await interaction.showModal(modal);
    } catch (err) {
        console.error(err);
    } finally {
        return null;
    }
}