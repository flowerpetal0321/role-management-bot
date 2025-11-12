import { SlashCommandBuilder, ChatInputCommandInteraction, InteractionContextType, PermissionFlagsBits } from 'discord.js';

export const data = 
    new SlashCommandBuilder()
		.setName("removesetting")
		.setDescription("Remove a role management setting")
        .addRoleOption(option =>
            option.setName("giver_role")
                .setDescription("Users with this role are allowed to give a role")
                .setRequired(true)
        )
        .addRoleOption(option =>
            option.setName("target_role")
                .setDescription("This the role that can be given")
                .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setContexts(InteractionContextType.Guild);

export async function execute(interaction:ChatInputCommandInteraction) {
    await interaction.reply("Not implemented.");
}