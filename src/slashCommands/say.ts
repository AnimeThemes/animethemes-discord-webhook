import { ActionRowBuilder, AttachmentBuilder, BaseInteraction, CommandInteraction, Events, ModalBuilder, ModalSubmitInteraction, SlashCommandBuilder, TextChannel, TextInputBuilder } from 'discord.js';
import { SlashCommand } from 'structs/types/DiscordCommands';
import { client } from 'app';
import { deferReply, followUp, showModal } from 'lib/discord';

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

        const image = new TextInputBuilder()
            .setCustomId('input-image')
            .setLabel('Image Link')
            .setRequired(false)
            .setPlaceholder('Comma-separated Links')
            .setStyle(2);

        const row = new ActionRowBuilder().addComponents(text);
        const row2 = new ActionRowBuilder().addComponents(image);

        modal.setComponents([row, row2] as any[]);
        await showModal(interaction, modal);
        
        client.once(Events.InteractionCreate, async (i: BaseInteraction) => {
            if (!i.isModalSubmit()) return;
            if (i.user.id !== interaction.user.id) return;
            if (i.customId !== 'modal-message') return;

            const interactionModal = i as ModalSubmitInteraction;

            await deferReply(interactionModal);

            const { fields } = interactionModal;
            const message = fields.getTextInputValue('input-message');

            const channel = guild?.channels.cache.find(c => c.id === interaction.options.get('channel')?.value) as TextChannel;

            channel.send({
                content: message,
                files: fields.getTextInputValue('input-image').split(',').filter(Boolean).map(image => new AttachmentBuilder(image)),
            })
            .then(async () => {
                await followUp(interactionModal, 'Done');
            })
            .catch((err) => console.error(err));
        });
    },
})