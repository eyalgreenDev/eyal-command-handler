const better=require("better-chalk");
module.exports={
    name:'ready',
    once:true,
    async execute(client){
        console.log(better.hex("#0000FF",true)+(`Logged is as ${client.user.username}`));
        for(const guild of client.guilds.cache.values()){
            const slashcommands=client.slashcommands.map((command) => command.data.toJSON());
            await guild.commands.set(slashcommands)
        }
    }
}