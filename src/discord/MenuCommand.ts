import { ContextMenuCommandBuilder, ContextMenuCommandInteraction } from 'discord.js';

export type MenuCommandCommand = {
    data: Omit<ContextMenuCommandBuilder, ''>;
    execute: (interaction: ContextMenuCommandInteraction) => void;
};

export default class MenuCommand {
    public command: MenuCommandCommand;

    constructor(options: MenuCommandCommand) {
        this.command = {
            data: options.data,
            execute: options.execute,
        };
    }
}
