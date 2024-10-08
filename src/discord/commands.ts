import { ButtonInteraction, Collection, CommandInteraction, ContextMenuCommandBuilder, ContextMenuCommandInteraction, ModalSubmitInteraction, SlashCommandOptionsOnlyBuilder } from 'discord.js';

export type ComponentsModal = Collection<string, (interaction: ModalSubmitInteraction) => any>;
export type ComponentsButton = Collection<string, (interaction: ButtonInteraction) => any>;

export class SlashCommand {
    public command: any;

    constructor(
        options: { data: SlashCommandOptionsOnlyBuilder,
        execute: (interaction: CommandInteraction) => any }
    ) {
        this.command = {
            data: options.data,
            execute: options.execute,
        };
    }
}

export class MenuCommand {
    public command: any;

    constructor(
        options: { data: Omit<ContextMenuCommandBuilder, ''>,
        execute: (interaction: ContextMenuCommandInteraction) => any }
    ) {
        this.command = {
            data: options.data,
            execute: options.execute,
        };
    }
}