import {
    AttachmentBuilder,
    BaseInteraction,
    CommandInteraction,
    Events,
    LabelBuilder,
    ModalBuilder,
    ModalSubmitInteraction,
    SlashCommandBuilder,
    TextChannel,
    TextInputBuilder,
    TextInputStyle,
} from 'discord.js';
import { client } from 'app';
import { SlashCommand } from 'discord/commands';
import { deferReply, followUp, showModal } from 'lib/discord';

const say = new SlashCommand({
    data: new SlashCommandBuilder()
        .setName('say')
        .setDescription('Bot sends a message')
        .setDefaultMemberPermissions(8)
        .addChannelOption((option) =>
            option.setName('channel').setDescription('Set a channel').addChannelTypes(0).setRequired(true),
        ),

    async execute(interaction: CommandInteraction) {
        const { guild } = interaction;

        const modal = new ModalBuilder().setCustomId('modal-message').setTitle('Message');

        const textLabel = new LabelBuilder()
            .setLabel('Message')
            .setTextInputComponent(
                new TextInputBuilder()
                    .setCustomId('input-message')
                    .setRequired(true)
                    .setStyle(TextInputStyle.Paragraph),
            );

        const imageLabel = new LabelBuilder()
            .setLabel('Image Link')
            .setTextInputComponent(
                new TextInputBuilder()
                    .setCustomId('input-image')
                    .setRequired(false)
                    .setPlaceholder('Comma-separated Links')
                    .setStyle(TextInputStyle.Paragraph),
            );

        modal.setLabelComponents([textLabel, imageLabel]);
        await showModal(interaction, modal);

        client.once(Events.InteractionCreate, async (i: BaseInteraction) => {
            if (!i.isModalSubmit()) return;
            if (i.user.id !== interaction.user.id) return;
            if (i.customId !== 'modal-message') return;

            const interactionModal = i as ModalSubmitInteraction;

            await deferReply(interactionModal);

            const { fields } = interactionModal;
            const message = fields.getTextInputValue('input-message');

            const channel = guild?.channels.cache.find(
                (c) => c.id === interaction.options.get('channel')?.value,
            ) as TextChannel;

            channel
                .send({
                    content: message,
                    files: fields
                        .getTextInputValue('input-image')
                        .split(',')
                        .filter(Boolean)
                        .map((image) => new AttachmentBuilder(image)),
                })
                .then(async () => {
                    await followUp(interactionModal, 'Done');
                })
                .catch((err) => console.error(err));
        });
    },
});

export default say;
