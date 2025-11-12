import { SlashCommandBuilder, ChatInputCommandInteraction, InteractionContextType, PermissionFlagsBits } from 'discord.js';

export const data = 
    new SlashCommandBuilder()
		.setName("editsetting")
		.setDescription("Toggle the can remove option")
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