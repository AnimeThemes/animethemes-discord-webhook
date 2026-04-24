import { BaseInteraction, Events } from 'discord.js';
import { client } from 'app';

import Event from 'discord/Event';

export default new Event({
    name: Events.InteractionCreate,
    execute(interaction: BaseInteraction) {
        if (!interaction.isCommand()) return;

        if (interaction.isChatInputCommand()) {
            const command = client.slashCommands.get(interaction.commandName);
            if (!command) return;

            if (!interaction.isAutocomplete()) {
                command.execute(interaction);
            }
        }

        if (interaction.isContextMenuCommand()) {
            const command = client.menuCommands.get(interaction.commandName);

            if (!command) return;

            command.execute(interaction);
        }
    },
});
