import { BaseInteraction, Events } from "discord.js";

import * as dotenv from "dotenv";

import Event from "../structs/types/Event";
import ModalConstructor from "../Builders/ModalConstructor";

dotenv.config();

export default new Event({
    name: Events.InteractionCreate,
    async execute(interaction: BaseInteraction): Promise<any> {
        if (!interaction.isButton()) return;

        const { customId } = interaction;

        switch (customId) {
            case 'button-new-anime':
                new ModalConstructor(interaction).modalBuilderNewAnime().show();
                break;
            case 'button-new-video':
                new ModalConstructor(interaction).modalBuilderNewVideo().show();
                break;
            case 'button-update-video':
                new ModalConstructor(interaction).modalBuilderUpdateVideo().show();
                break;
        }
    }
})