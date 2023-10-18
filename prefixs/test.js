module.exports={
    name:'test',
    description:'test the bot',
    async execute(message,args){
        await message.reply({
            content: `**The bot is working!**`
        });
    }
}