import { Collection, CommandInteraction, ModalSubmitInteraction, SlashCommandBuilder } from "discord.js";

export type ComponentsModal = Collection<string, (interaction: ModalSubmitInteraction) => any>;

export class SlashCommand {
    public command: any;

    constructor(options: { data: Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">, execute: (interaction: CommandInteraction) => any }) {
        this.command = {
            data: options.data,
            execute: options.execute
        }
    }
}