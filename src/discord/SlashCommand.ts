import { ChatInputCommandInteraction, SlashCommandOptionsOnlyBuilder } from 'discord.js';

export type SlashCommandCommand = {
    data: SlashCommandOptionsOnlyBuilder;
    execute: (interaction: ChatInputCommandInteraction) => void;
};

export default class SlashCommand {
    public command: SlashCommandCommand;

    constructor(options: SlashCommandCommand) {
        this.command = {
            data: options.data,
            execute: options.execute,
        };
    }
}
