import { BitFieldResolvable, Client, Collection, GatewayIntentsString, IntentsBitField, Partials } from 'discord.js';
import { ComponentsButton, ComponentsModal } from './types/Commands';

import * as dotenv from 'dotenv';

import Event from "./types/Event";
import fs from "fs";

dotenv.config();

export class ExtendClient extends Client {

    public buttons: ComponentsButton = new Collection();
    public modals: ComponentsModal = new Collection();
    public events: any = new Collection();

    constructor() {
        super({
            intents: Object.keys(IntentsBitField.Flags) as BitFieldResolvable<GatewayIntentsString, number>,
            partials: [
                Partials.Channel, Partials.Message
            ]
        })
    }

    public start() {
        this.registerEvents();
        this.login(process.env.DISCORD_TOKEN);
    }

    private async registerEvents() {
        const eventFiles: string[] = fs.readdirSync('./src/events').filter(file => file.endsWith('.js') || file.endsWith('.ts'));
        
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
