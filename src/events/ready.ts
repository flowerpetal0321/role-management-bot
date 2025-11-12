import { Client, Events } from 'discord.js';

export const name = Events.ClientReady;
export const once = true;
export async function execute(client) {
    if (!(client instanceof Client)) {
        console.log("Unable to ready client.");
    } else {
        console.log(`Ready! Logged in as ${client.user.tag}`);

    }
}