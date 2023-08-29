import { ExtendClient } from "./structs/ExtendClient";

import ButtonConstructor from "./Builders/ButtonConstructor";
import EmbedConstructor from "./Builders/EmbedConstructor";

export const client = new ExtendClient();

client.start();

client.on("ready", () => {
    console.log("Bot Online");
});

// Just create a message of the control panel
client.on("messageCreate", (msg) => {
    if (msg.author.id === client.user?.id) return;
    if (msg.author.id !== process.env.DISCORD_PASS_USER_ID) return;

    if (msg.content === 'createMessageEmbedBuilder') {
        msg.channel.send({
            embeds: [new EmbedConstructor().getDefaultEmbed()],
            components: [new ButtonConstructor().getDefaultButtons().row as any]
        });
    }
});