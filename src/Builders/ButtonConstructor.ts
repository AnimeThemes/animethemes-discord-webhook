import { ActionRowBuilder, AnyComponentBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

/**
 * Class ButtonConstructor
 * 
 * @property row ActionRowBuilder<AnyComponentBuilder>
 * 
 * @method getDefaultButtons ButtonConstructor
 */

class ButtonConstructor {

    public row: ActionRowBuilder<AnyComponentBuilder>;

    constructor() {
        this.row = new ActionRowBuilder();
    }

    /**
     * Build the buttons of the control panel.
     * 
     * @returns ButtonConstructor
     */
    getDefaultButtons(): ButtonConstructor {
        this.row = this.row.addComponents(
            new ButtonBuilder()
                .setCustomId('button-new-anime')
                .setLabel('New Anime')
                .setStyle(ButtonStyle.Success),
            new ButtonBuilder()
                .setCustomId('button-new-video')
                .setLabel('New Video')
                .setStyle(ButtonStyle.Success),
            new ButtonBuilder()
                .setCustomId('button-update-video')
                .setLabel('Update Video')
                .setStyle(ButtonStyle.Secondary)
        );

        return this;
    }
}

export default ButtonConstructor;