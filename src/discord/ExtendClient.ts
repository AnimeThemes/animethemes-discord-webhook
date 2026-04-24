import {
    ApplicationCommandDataResolvable,
    BitFieldResolvable,
    Client,
    Collection,
    Events,
    GatewayIntentsString,
    IntentsBitField,
    Partials,
} from 'discord.js';
import { readdirSync } from 'fs';

import config from 'utils/config';
import { MenuCommandCommand } from './MenuCommand';
import { SlashCommandCommand } from './SlashCommand';

class ExtendClient extends Client {
    public slashCommands = new Collection<string, SlashCommandCommand>();
    public menuCommands = new Collection<string, MenuCommandCommand>();

    constructor() {
        super({
            intents: Object.keys(IntentsBitField.Flags) as BitFieldResolvable<GatewayIntentsString, number>,
            partials: [
                Partials.Channel,
                Partials.Message,
                Partials.GuildMember,
                Partials.GuildScheduledEvent,
                Partials.User,
            ],
        });
    }

    public start() {
        this.registerModules();
        this.registerEvents();
        this.login(config.DISCORD_TOKEN);
    }

    private registerCommands(...commands: Array<ApplicationCommandDataResolvable>) {
        this.application?.commands
            .set(commands)
            .then(() => {
                console.log('✅ Slash Commands (/) defined');
            })
            .catch((error) => {
                console.log(`❌ An error occurred while trying to set the Slash Commands (/): \n${error}`);
            });
    }

    private async registerModules() {
        const slashCommands: Array<ApplicationCommandDataResolvable> = [];
        const menuCommands: Array<ApplicationCommandDataResolvable> = [];

        const commandsSlash: string[] = readdirSync('./src/slashCommands').filter(
            (file) => file.endsWith('.js') || file.endsWith('.ts'),
        );
        const commandsMenu: string[] = readdirSync('./src/menuCommands').filter(
            (file) => file.endsWith('.js') || file.endsWith('.ts'),
        );

        for (const file of commandsSlash) {
            const command = (await import(`../slashCommands/${file.slice(0, -3)}`)).default
                .command as SlashCommandCommand;
            this.slashCommands.set(command.data.name, command);
            slashCommands.push(command.data.toJSON());
        }

        for (const file of commandsMenu) {
            const command = (await import(`../menuCommands/${file.slice(0, -3)}`)).default
                .command as MenuCommandCommand;
            this.menuCommands.set(command.data.name, command);
            menuCommands.push(command.data);
        }

        this.once(Events.ClientReady, () => this.registerCommands(...slashCommands, ...menuCommands));
    }

    private async registerEvents() {
        const eventFiles: string[] = readdirSync('./src/events').filter(
            (file) => file.endsWith('.js') || file.endsWith('.ts'),
        );

        for (const file of eventFiles) {
            const event = (await import(`../events/${file.slice(0, -3)}`)).default;
            if (event.once) {
                this.once(event.name, (...args) => event.execute(...args));
            } else {
                this.on(event.name, (...args) => event.execute(...args));
            }
        }
    }
}

export default ExtendClient;
