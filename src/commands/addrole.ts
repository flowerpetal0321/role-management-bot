import { SlashCommandBuilder, ChatInputCommandInteraction, InteractionContextType } from 'discord.js';

export const data = 
    new SlashCommandBuilder()
		.setName("addrole")
		.setDescription("Add a role to a user")
        .addUserOption(option =>
            option.setName("user")
                .setDescription("User to give role to")
                .setRequired(true)
        )
        .addRoleOption(option =>
            option.setName("role")
                .setDescription("Role to give")
                .setRequired(true)
        )
        .setContexts(InteractionContextType.Guild);

export async function execute(interaction:ChatInputCommandInteraction) {
    await interaction.reply("Not implemented.");
}