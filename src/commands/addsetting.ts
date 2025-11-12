import { SlashCommandBuilder, ChatInputCommandInteraction, InteractionContextType, PermissionFlagsBits } from 'discord.js';

export const data = 
    new SlashCommandBuilder()
		.setName("addsetting")
		.setDescription("Add a role management setting")
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
        .addBooleanOption(option =>
            option.setName("can_remove")
                .setDescription("Allow removing target role")
                .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setContexts(InteractionContextType.Guild);

export async function execute(interaction:ChatInputCommandInteraction) {
    await interaction.reply("Not implemented.");
}