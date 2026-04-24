import {
    AttachmentBuilder,
    BaseInteraction,
    Events,
    LabelBuilder,
    ModalBuilder,
    SlashCommandBuilder,
    TextChannel,
    TextInputBuilder,
    TextInputStyle,
    ChatInputCommandInteraction,
    MessageFlags,
    ChannelType,
} from 'discord.js';
import { client } from 'app';
import SlashCommand from 'discord/SlashCommand';

const say = new SlashCommand({
    data: new SlashCommandBuilder()
        .setName('say')
        .setDescription('Bot sends a message')
        .setDefaultMemberPermissions(8)
        .addChannelOption((option) =>
            option
                .setName('channel')
                .setDescription('Set a channel')
                .addChannelTypes(ChannelType.GuildText)
                .setRequired(true),
        ),

    async execute(interaction: ChatInputCommandInteraction) {
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
        await interaction.showModal(modal);

        client.once(Events.InteractionCreate, async (i: BaseInteraction) => {
            if (!i.isModalSubmit()) return;
            if (i.user.id !== interaction.user.id) return;
            if (i.customId !== 'modal-message') return;

            await i.deferReply({
                flags: [MessageFlags.Ephemeral],
            });

            const { fields } = i;
            const message = fields.getTextInputValue('input-message');

            const channel = interaction.options.getChannel('channel') as TextChannel;

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
                    await i.followUp({
                        content: 'Done',
                        flags: [MessageFlags.Ephemeral],
                    });
                })
                .catch((err) => console.error(err));
        });
    },
});

export default say;
