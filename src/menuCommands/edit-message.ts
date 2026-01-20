import {
    AttachmentBuilder,
    BaseInteraction,
    ContextMenuCommandBuilder,
    ContextMenuCommandInteraction,
    Events,
    LabelBuilder,
    Message,
    ModalBuilder,
    ModalSubmitInteraction,
    TextChannel,
    TextInputBuilder,
    TextInputStyle,
} from 'discord.js';
import { client } from 'app';
import { deferReply, followUp, reply, showModal } from 'lib/discord';
import { MenuCommand } from 'discord/commands';

const editMessage = new MenuCommand({
    data: new ContextMenuCommandBuilder().setName('Edit Message').setDefaultMemberPermissions(8).setType(3),

    async execute(interaction: ContextMenuCommandInteraction) {
        const { guild } = interaction;
        const options = interaction.options as any;
        const message = options._hoistedOptions[0].message as Message;

        if (message.author.id !== client.user?.id) return await reply(interaction, 'This message is not from the bot.');

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
        await showModal(interaction, modal);

        client.once(Events.InteractionCreate, async (i: BaseInteraction) => {
            if (!i.isModalSubmit()) return;
            if (i.user.id !== interaction.user.id) return;
            if (i.customId !== 'modal-edit-message') return;

            const interactionModal = i as ModalSubmitInteraction;

            await deferReply(interactionModal);

            const channel = guild?.channels.cache.find((c) => c.id === interaction.channelId) as TextChannel;

            channel.messages.fetch(message.id).then((msg: Message) => {
                msg.edit({
                    content: interactionModal.fields.getTextInputValue('input-edit-message'),
                    files: interactionModal.fields
                        .getTextInputValue('input-edit-image')
                        .split(',')
                        .filter(Boolean)
                        .map((image) => new AttachmentBuilder(image)),
                })
                    .then(async () => await followUp(interactionModal, 'Done'))
                    .catch((err) => console.error(err));
            });
        });
    },
});

export default editMessage;
