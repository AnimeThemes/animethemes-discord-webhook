import { CommandInteraction, Events } from 'discord.js';
import { client } from 'app';

import Event from 'structs/types/Event';

export default new Event({
    name: Events.InteractionCreate,
    execute(interaction: CommandInteraction) {
        if (!interaction.isCommand()) return;
        const command = client.commands.get(interaction.commandName);
        if (!command) return;

        if (interaction.isAutocomplete() && command.autoComplete){
            command.autoComplete(interaction);
            return;
        }

        if (interaction.isChatInputCommand() || interaction.isContextMenuCommand()) {
            command.execute(interaction);
            return;
        }
    },
})