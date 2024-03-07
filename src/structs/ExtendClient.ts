import { ApplicationCommandDataResolvable, BitFieldResolvable, Client, Collection, GatewayIntentsString, IntentsBitField, Partials } from 'discord.js';
import { readdirSync } from 'fs';
import { ComponentsModal } from 'structs/types/Commands';

import Config from 'config/Config';
import Event from 'structs/types/Event';

export class ExtendClient extends Client {

    public commands: Collection<string, any> = new Collection();
    public menuCommands: Collection<string, any> = new Collection();
    public modals: ComponentsModal = new Collection();
    public events: any = new Collection();

    constructor() {
        super({
            intents: Object.keys(IntentsBitField.Flags) as BitFieldResolvable<GatewayIntentsString, number>,
            partials: [
                Partials.Channel, Partials.Message, Partials.GuildMember, Partials.GuildScheduledEvent, Partials.User
            ]
        })
    }

    public start() {
        this.registerModules();
        this.registerEvents();
        this.login(Config.DISCORD_TOKEN);
    }

    private registerCommands(commands: Array<ApplicationCommandDataResolvable>){
        this.application?.commands.set(commands)
            .then(() => {
                console.log('✅ Slash Commands (/) defined');
            })
            .catch(error => {
                console.log(`❌ An error occurred while trying to set the Slash Commands (/): \n${error}`);
            });
    }

    private async registerModules() {
        const slashCommands: Array<ApplicationCommandDataResolvable> = new Array();
        const menuCommands: Array<ApplicationCommandDataResolvable> = new Array();

        const commandsSlash: string[] = readdirSync('./src/slashCommands').filter(file => file.endsWith('.js') || file.endsWith('.ts'));
        const commandsMenu: string[] = readdirSync('./src/menuCommands').filter(file => file.endsWith('.js') || file.endsWith('.ts'));

        for (let file of commandsSlash) {
            let command = (await import(`../slashCommands/${file.slice(0, -3)}`)).default.command;
            this.commands.set(command.data.name, command);
            slashCommands.push(command.data.toJSON());
        }

        for (let file of commandsMenu) {
            let command = (await import(`../menuCommands/${file.slice(0, -3)}`)).default.command;
            this.commands.set(command.data.name, command);
            menuCommands.push(command.data);
        }

        let commands = slashCommands.concat(menuCommands);

        this.once('ready', () => this.registerCommands(commands));
    }

    private async registerEvents() {
        const eventFiles: string[] = readdirSync('./src/events').filter(file => file.endsWith('.js') || file.endsWith('.ts'));
        
        for (const file of eventFiles) {
            const event: Event = (await import(`../events/${file.slice(0, -3)}`)).default as Event;
            if (event.once) {
                this.once(event.name, (...args) => event.execute(...args));
            } else {
                this.on(event.name, (...args) => event.execute(...args));
            }
        }
    }
}