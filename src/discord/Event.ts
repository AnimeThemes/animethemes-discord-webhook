import { ClientEvents } from 'discord.js';

class Event<K extends keyof ClientEvents> {
    name: K;
    once: boolean;
    execute: (...args: ClientEvents[K]) => void;

    constructor(object: { name: K; once?: boolean; execute: (...args: ClientEvents[K]) => void }) {
        this.name = object.name;
        this.once = object.once ?? false;
        this.execute = object.execute;
    }
}

export default Event;
