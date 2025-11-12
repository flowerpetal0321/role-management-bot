import { SlashCommandBuilder, ChatInputCommandInteraction, InteractionContextType } from 'discord.js';

export const data = 
    new SlashCommandBuilder()
		.setName("removerole")
		.setDescription("Remove a role from a user")
        .addUserOption(option =>
            option.setName("user")
                .setDescription("User to remove role from")
                .setRequired(true)
        )
        .addRoleOption(option =>
            option.setName("role")
                .setDescription("Role to remove")
                .setRequired(true)
        )
        .setContexts(InteractionContextType.Guild);

export async function execute(interaction:ChatInputCommandInteraction) {
    await interaction.reply("Not implemented.");
}