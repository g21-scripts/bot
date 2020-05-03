const Discord = require("discord.js");
const client = new Discord.Client();


function presence(){
    client.user.setPresence({
        status: "online",
        game: {
            name: "Prefijo -g | Guille y Monoloko",
            type: "PLAYING"
        }
    });
}

client.on("ready", () => {
    console.log("BOTARDO LISTO");
    presence();
 });
//////////////////////////////////////////////////////////// LOG DE LOS MENSAJES ///////////////////////////////////////////////////

 client.on("message", message => {
   // Recibir mensaje
   console.log(message.content);
 });


  
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 client.on("message", (message) => {
  if(message.content.startsWith("-g ayuda")) {
    message.channel.send("```VEO QUE NECESITAS SOPORTE TÉCNICO, CONTACTA A SU DESARROLLADOR POR DISCORD: Guille Moyano#5796 y explicale el problema y el te lo solucionará yo no se :/```");
  }

});

 client.on("message", (message) => {
    if(message.content.startsWith("-g admin")) {
      message.channel.send("```ACCEDIENDO AL SISTEMA..```");
      message.channel.send("```ESTAS LOGGEADO...```");
      message.channel.send("```BANNEANDO USUARIOS.```");
      message.channel.send("```USUARIOS BANNEADOS..```");
      message.channel.send("```ESTRELLANDO AVIONES DE RYANAIR...```");
      message.channel.send("```ERROR NO ERES UN ADMIN```");
    }
 
 });

 client.on("message", (message) => {
  if(message.content.startsWith("-g yt")) {
    message.channel.send("https://www.youtube.com/user/monoloko1996");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("-g donaciones")) {
    message.channel.send("https://www.paypal.me/monoloko");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("-g ivao")) {
    message.channel.send("https://es.ivao.aero/");
  }

});


client.on("message", async (message) => {
  if(message.content.startsWith("-g pinturillo")) {
    message.channel.send("https://www.pinturillo2.com/");
  }
  if (message.content === '-g borrarmonoloko') {
    const fetched = await message.channel.fetchMessages({limit: 100});
    message.channel.bulkDelete(fetched);
    console.log('Mensajes eliminados')
  }

});



///////////////////////////////////////////////  MODERACION -g kick  ////////////////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('-g kickmonoloko')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('Razon Opcional')
          .then(() => {
            message.reply(`El usuario ${user.tag} ha sido kickeado correctamente`);
          })
          .catch(err => {
            message.reply('We´re unable, We may end up in the Hudson');
            // Da el error
            console.error(err);
          });
      } else {
        message.reply("Maquina que te banneo a tí por poner este comando sin ser Admin");
      }
    } else {
      message.reply("No has mencionado al usuario que quieres kickear");
    }
  }
});

////////////////////////////////////////////////////////////// AVISOS //////////////////////////////////////////////////////

client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('-g warnmonoloko')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .console.warn({
            reason: 'Has sido avisado por un staff' 
          })
          .then(() => {
            message.reply(`El usuario ${user.tag} ha sido avisado correctamente`);
          })
          .catch(err => {
            message.reply('We´re unable, We may end up in the Hudson');
            // Da el error
            console.error(err);
          });
      } else {
        message.reply("Maquina que te aviso a tí por poner este comando sin ser Admin");
      }
    } else {
      message.reply("No has mencionado al usuario que quieres avisar");
    }
  }
});

/////////////////////////////////////////////////////////////////   BANNEAR -g ban  ///////////////////////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('-g banmonoloko')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: 'Fuiste malo ahora tendras tu merecido!!! ahahahahahaha',
          })
          .then(() => {
            message.reply(`El usuario ${user.tag} ha sido mandado a la mierda con exito!!!`);
          })
          .catch(err => {
            message.reply('We´re unable we may end up in the Hudson');
            // Dice el error
            console.error(err);
          });
      } else {
        message.reply("No eres admin, eres un troll, espera que saco el martillo del banneo...");
      }
    } else {
      message.reply("No has mencionado a nadie para mandarlo al carré...");
    }
  }
});

/////////////////////////////////////////////////////////////////////// MENSAJES ///////////////////////////////////////////////////////////////////////////////////////////////////////

// DA LA BIENVENIDA A LOS USUARIOS NUEVOS

const { Client, MessageEmbed } = require('discord.js');

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.id === '394895272255422464');
  if (!channel) return;
  channel.send(`Hola ${member} bienvenido al servidor de Monoloko!!!`);
});

client.on('message', async message => {
  // If the message is "how to embed"
  if (message.content === '-g comandos') {
    const embed = new Discord.RichEmbed()
      .setTitle('Comandos V2')
      .setColor(0xff0000)
      .setDescription('Mis comandos son')
      .addField('**-g ayuda**', `Te da contacto con el soporte técnico del BOT`)
      .addField('**-g ivao**', `Te da la páina de IVAO España`)
      .addField('**-g cartas**', `Te das las cartas de Enaire`)
      .addField('**-g rrss**', `Redes Sociales de Monoloko`)
      .addField('**-g donaciones**', `Te lleva a la pagina de donaciones de Monoloko`)
      .addField('**-g invitacion**', `Te da una invitacion del discord`)
      .addField('**-g piropo**', `Te lanza un piropo`)
      .addField('**-g admin**', `Te da acceso a panel de admin si lo eres :)`)
      .addField('**-g pinturillo**', `Te da la página del pinturillo`)
      .setFooter("Prefijo: -g | El bot sigue en desarrollo", "https://i.imgur.com/vKqqZBg.jpg")
    message.channel.send(embed);
  }
});

///////////////////////////////////////////////////////// PIROPOS //////////////////////////////////////////////////////////

client.on("message", message => {
  var Mensajes = ["Eh Se te ha caido un papel! ¿Qué papel? / El que te envuelve mi bombon!!!", "Si tu cuerpo fuera cárcel y tus labios cadena, qué bonito lugar para pasar mi condena.", "¿Qué hace una estrella volando tan bajo?", "¡Guap@! Apuesto a que te llamas Google, porque tienes todo lo que busco.", "Fíjate como es la ciencia que ahora hasta hacen bombones que andan."];
  var aleatorio = Math.floor(Math.random()*(Mensajes.length));
  if(message.content.startsWith('-g piropo')){
      message.channel.send(Mensajes[aleatorio]);
  }
});

/////////////////////////////////////////// EMBED ///////////////////////////////////////////////////////////////////

client.on('message', async message => {
  // If the message is "how to embed"
  if (message.content === '-g rrss') {
    const embed = new Discord.RichEmbed()
      .setTitle('Redes Sociales de Monoloko')
      .setColor(0x44CB12)
      .setDescription('Mis redes sociales son:')
      .addField('**Youtube: https://www.youtube.com/user/monoloko1996** ', `Aqui tienes el canal de youtube del capitan monoloko`)
      .addField('**Twitter: https://twitter.com/monoloko1996 **', `Aqui tienes su cuenta de twitter para que no os perdais nada`)
      .addField('**Instagram: https://www.instagram.com/monoloko1996/  **', `Aqui de vez en cuando monoloko sube fotos y esas cosas...`)
      .setFooter("Prefijo: -g | El bot sigue en desarrollo", "https://i.imgur.com/vKqqZBg.jpg")
    message.channel.send(embed);
  }
});

client.on('message', async message => {
  // If the message is "how to embed"
  if (message.content === '-g cartas') {
    const embed = new Discord.RichEmbed()
      .setTitle('Cartas de ENAIRE actualizadas al Airac actual')
      .setColor(0xF2E40D)
      .setDescription('**Ciclo de Airac: 2004**')
      .addField('**https://ais.enaire.es/AIP/AIPS/AMDT_327_2020_AIRAC_04_2020/AIP.html** ', `**Cartas de ENAIRE con el Airac 2004**`)
      .setFooter("Prefijo: -g | El bot sigue en desarrollo", "https://i.imgur.com/vKqqZBg.jpg")
    message.channel.send(embed);
    }
  });

  ///////////////////////////////////////////////// DAR ROLES///////////////////////////////////////////////////////////////




client.login("NzAzNTk4MDIwMTI1NjU1MDgx.XqX8NQ.txBWhL0cTG-pjS0Iu8Z43kBVlmA")