import { ActionRowBuilder, BaseInteraction, ContextMenuCommandBuilder, ContextMenuCommandInteraction, Events, Message, ModalBuilder, ModalSubmitInteraction, TextChannel, TextInputBuilder } from "discord.js";
import { MenuCommand } from "../structs/types/Commands";
import { client } from "../app";

export default new MenuCommand({
    data: new ContextMenuCommandBuilder()
        .setName('Edit Message')
        .setDefaultMemberPermissions(8)
        .setType(3),

    async execute(interaction: ContextMenuCommandInteraction) {
        const { guild } = interaction;
        const options = interaction.options as any;
        const message = options._hoistedOptions[0].message as Message;

        if (message.author.id !== client.user?.id) return await interaction.reply({ content: "This message is not from the bot", ephemeral: true });

        const modal = new ModalBuilder()
            .setCustomId('modal-edit-message')
            .setTitle('EDIT MESSAGE');

        const messageInput = new TextInputBuilder()
            .setCustomId('input-edit-message')
            .setLabel('MESSAGE')
            .setRequired(true)
            .setStyle(2)
            .setValue(message.content as string);

        const row = new ActionRowBuilder().addComponents(messageInput);

        modal.setComponents([row] as any[]);
        await interaction.showModal(modal);

        client.once(Events.InteractionCreate, async (i: BaseInteraction) => {
            if (!i.isModalSubmit()) return;
            if (i.user.id !== interaction.user.id) return;
            if (i.customId !== 'modal-edit-message') return;

            const interactionModal = i as ModalSubmitInteraction;

            await interactionModal.deferReply({ ephemeral: true });

            const channel = guild?.channels.cache.find(c => c.id === interaction.channelId) as TextChannel;

            channel.messages.fetch(message.id).then((msg: Message) => {
                msg.edit({
                    content: interactionModal.fields.getTextInputValue('input-edit-message')
                })
                .then(async () => await interactionModal.followUp({ content: "Done", ephemeral: true }))
                .catch((err) => console.error(err));
            });
        });
    },
})