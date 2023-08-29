import { ActionRowBuilder, BaseInteraction, ComponentType, ModalBuilder, TextInputStyle } from "discord.js";

/**
 * Class ModalConstructor
 * 
 * @property modal ModalBuilder
 * @property interaction any
 * 
 * @method modalBuilderNewAnime ModalConstructor
 * @method modalBuilderNewVideo ModalConstructor
 * @method modalBuilderUpdateVideo ModalConstructor
 * @method show Promise<void>
 */

class ModalConstructor {

    private modal: ModalBuilder;
    private interaction: BaseInteraction & { showModal: (modal: any) => any };

    constructor(interaction: BaseInteraction & { showModal: (modal: any) => any }) {
        this.modal = new ModalBuilder();
        this.interaction = interaction;
    }

    /**
     * Create a modal to a new anime.
     * 
     * @returns ModalConstructor
     */
    modalBuilderNewAnime(): ModalConstructor {
        this.modal = this.modal
            .setCustomId('id-modal-anime')
            .setTitle('Anime Notification')
            .addComponents(
                new ActionRowBuilder({
                    components: [
                        {
                            custom_id: 'id-anime',
                            label: 'Insert an anime ID',
                            style: TextInputStyle.Short,
                            type: ComponentType.TextInput
                        }
                    ]
                })
            );

        return this;
    }

    /**
     * Create a modal to a new video.
     * 
     * @returns ModalConstructor
     */
    modalBuilderNewVideo(): ModalConstructor {
        this.modal = this.modal
            .setCustomId('id-modal-video')
            .setTitle('Video Notification')
            .addComponents(
                new ActionRowBuilder({
                    components: [
                        {
                            custom_id: 'id-video',
                            label: 'Insert a video ID',
                            style: TextInputStyle.Short,
                            type: ComponentType.TextInput
                        }
                    ]
                })
            );

        return this;
    }

    /**
     * Create a modal to a update video.
     * 
     * @returns ModalConstructor
     */
    modalBuilderUpdateVideo(): ModalConstructor {
        this.modal = this.modal
            .setCustomId('id-modal-update-video')
            .setTitle('Video Update Notification')
            .addComponents(
                new ActionRowBuilder({
                    components: [
                        {
                            custom_id: 'id-video',
                            label: 'Insert a video ID',
                            style: TextInputStyle.Short,
                            type: ComponentType.TextInput
                        }
                    ]
                })
            );

        return this;
    }

    /**
     * Show a modal to the user.
     */
    async show(): Promise<void> {
        await this.interaction.showModal(this.modal);
    }
}

export default ModalConstructor;