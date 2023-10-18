const {SlashCommandBuilder}=require("discord.js");
const data = new SlashCommandBuilder()
.setName("test")
.setDescription(`Test command`)
module.exports={
    data,
    async execute(interaction){
        return await interaction.reply({
            content: `**The bot is working!**`
        });
    },
};