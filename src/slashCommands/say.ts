import { ActionRowBuilder, BaseInteraction, CommandInteraction, Events, ModalBuilder, ModalSubmitInteraction, SlashCommandBuilder, TextChannel, TextInputBuilder } from "discord.js";
import { SlashCommand } from "../structs/types/Commands";
import { client } from "../app";

export default new SlashCommand({
    data: new SlashCommandBuilder()
        .setName('say')
        .setDescription('Bot sends a message')
        .setDefaultMemberPermissions(8)
        .addChannelOption(option => option
            .setName('channel')
            .setDescription('Set a channel')
            .addChannelTypes(0)
            .setRequired(true)),

    async execute(interaction: CommandInteraction) {
        const { guild } = interaction;
        const modal = new ModalBuilder()
            .setCustomId('modal-message')
            .setTitle('Message');

        const text = new TextInputBuilder()
            .setCustomId('input-message')
            .setLabel('Message')
            .setRequired(true)
            .setStyle(2);

        const row = new ActionRowBuilder().addComponents(text);

        modal.setComponents([row] as any[]);
        await interaction.showModal(modal);
        
        client.once(Events.InteractionCreate, async (i: BaseInteraction) => {
            if (!i.isModalSubmit()) return;
            if (i.user.id !== interaction.user.id) return;
            if (i.customId !== 'modal-message') return;

            const interactionModal = i as ModalSubmitInteraction;

            await interactionModal.deferReply({ ephemeral: true });

            const { fields } = interactionModal;
            const message = fields.getTextInputValue('input-message');

            const channel = guild?.channels.cache.find(c => c.id === interaction.options.get('channel')?.value) as TextChannel;

            channel.send({
                content: message
            })
            .then(async () => {
                await interactionModal.followUp({ content: "Done", ephemeral: true });
            })
            .catch((err) => console.error(err));
        });
    },
})