import { Client, Collection, SlashCommandBuilder, ChatInputCommandInteraction, Events, ClientEvents } from "discord.js";

export class MyClient extends Client {
    commands: Collection<string, SlashCommand>
}

export class SlashCommand {
    readonly data: SlashCommandBuilder;
    readonly execute: (interaction: ChatInputCommandInteraction) => {};
}

export class EventListener {
    readonly name: string;
    readonly once?: boolean;
    readonly execute: (...args: ClientEvents[]) => void;
}