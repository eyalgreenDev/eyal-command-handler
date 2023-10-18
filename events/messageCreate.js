const { ChannelType } = require("discord.js");
const config=require("../config")
module.exports={
    name:'messageCreate',
    execute(message,client){
        if (message.author.bot || !message.content.startsWith(config.prefix) || message.channel.type === ChannelType.DM) {
            return;
          }
          const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.prefixcommands.get(commandName);
    if (!command) {
        return;
      }
      try {
        command.execute(message, args);
    } catch (error) {
      console.error(error);
      message.reply({content: `There was an error executing that command.`});
    }
}
}