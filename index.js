const {Client, RichEmbed } = require('server.js');
const bot = new Client();

const token = "NzAzNTk4MDIwMTI1NjU1MDgx.XqRAbg.GsUXxDkKcfbMKljijYHHFfvx10A";

const PREFIX = "-gp";

bot.on("message", message =>{
    let args = message.content.substring(PREFIX.length).split(" ");
    
    switch(args[0]){

        case "poll":
            const Embed = new RichEmbed()
            .setColor(0xFFC300)
            .setTitle("Iniciar Propuesta")
            .setDescription("Para iniciar una propuesta general debes de escribir -gp");

            if(!args[1]){
                message.channel.send(Embed);
            }

            let msgArgs = args.slice(1).join(" ");

            message.channel.send(msgArgs).then(messageReaction => {
                messageReaction.react("👍🏻");
                messageReaction.react("👎🏻");
            });

        break;
    }
});