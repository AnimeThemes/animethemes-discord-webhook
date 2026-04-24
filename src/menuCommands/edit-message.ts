import {
    AttachmentBuilder,
    BaseInteraction,
    ContextMenuCommandBuilder,
    ContextMenuCommandInteraction,
    Events,
    LabelBuilder,
    Message,
    MessageFlags,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
} from 'discord.js';
import { client } from 'app';
import MenuCommand from 'discord/MenuCommand';

const editMessage = new MenuCommand({
    data: new ContextMenuCommandBuilder().setName('Edit Message').setDefaultMemberPermissions(8).setType(3),

    async execute(interaction: ContextMenuCommandInteraction) {
        if (!interaction.isMessageContextMenuCommand()) return;

        const message = interaction.targetMessage;

        if (message.author.id !== client.user?.id) {
            return await interaction.reply({
                content: 'This message is not from the bot.',
                flags: [MessageFlags.Ephemeral],
            });
        }

        const modal = new ModalBuilder().setCustomId('modal-edit-message').setTitle('EDIT MESSAGE');

        const messageLabel = new LabelBuilder()
            .setLabel('MESSAGE')
            .setTextInputComponent(
                new TextInputBuilder()
                    .setCustomId('input-edit-message')
                    .setRequired(true)
                    .setStyle(TextInputStyle.Paragraph)
                    .setValue(message.content),
            );

        const imageLabel = new LabelBuilder().setLabel('IMAGE LINK').setTextInputComponent(
            new TextInputBuilder()
                .setCustomId('input-edit-image')
                .setRequired(false)
                .setStyle(TextInputStyle.Paragraph)
                .setValue(message.attachments.map((a) => a.proxyURL).join(',')),
        );

        modal.setLabelComponents([messageLabel, imageLabel]);
        await interaction.showModal(modal);

        client.once(Events.InteractionCreate, async (i: BaseInteraction) => {
            if (!i.isModalSubmit()) return;
            if (i.user.id !== interaction.user.id) return;
            if (i.customId !== 'modal-edit-message') return;

            await i.deferReply({
                flags: [MessageFlags.Ephemeral],
            });

            interaction.channel?.messages.fetch(message.id).then((msg: Message) => {
                msg.edit({
                    content: i.fields.getTextInputValue('input-edit-message'),
                    files: i.fields
                        .getTextInputValue('input-edit-image')
                        .split(',')
                        .filter(Boolean)
                        .map((image) => new AttachmentBuilder(image)),
                })
                    .then(async () => await i.followUp({ content: 'Done', flags: [MessageFlags.Ephemeral] }))
                    .catch((err) => console.error(err));
            });
        });
    },
});

export default editMessage;
