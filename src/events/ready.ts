import { Events } from "discord.js";

import Event from "../structs/types/Event";

export default new Event({
    name: Events.ClientReady,
    once: true,
    execute() {
        console.log("Bot Online");
    }
})