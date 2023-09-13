import { ExtendClient } from "./structs/ExtendClient";

export const client = new ExtendClient();

client.start();

client.on("ready", () => {
    console.log("Bot Online");
});