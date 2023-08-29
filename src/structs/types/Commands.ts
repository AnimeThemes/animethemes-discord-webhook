import { ButtonInteraction, Collection, ModalSubmitInteraction } from "discord.js";

export type ComponentsButton = Collection<string, (interaction: ButtonInteraction) => any>;
export type ComponentsModal = Collection<string, (interaction: ModalSubmitInteraction) => any>;