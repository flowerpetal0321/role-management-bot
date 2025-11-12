import { SlashCommandBuilder, ChatInputCommandInteraction, InteractionContextType } from 'discord.js';

export const data = 
    new SlashCommandBuilder()
		.setName('viewsettings')
		.setDescription('See all role management settings')
        .setContexts(InteractionContextType.Guild);
export async function execute(interaction:ChatInputCommandInteraction) {
    await interaction.reply("Not implemented.");
}