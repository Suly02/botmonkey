//Discord MonkeyFree

const Discord = require('discord.js');
const config = require("./config.json"); //config.token est présent dans le fichier de config.json avec config.prefixe

const bot = new Discord.Client();

    bot.on("ready", () => {
        bot.user.setPresence({game: { name: 'se triturer la bistouquette', type: 0 }});
        bot.user.setUsername("Jean-Didier");
        console.log('Bot has started');
    });
    
    bot.login(process.env.TOKEN2);    


    bot.on("message", async message=> {
       // if(message.author.bot) return; //si l'auteur est un bot, il ne le prend pas en compte

        const argument = message.content.slice(config.prefixe.length).trim().split(/ +/g); //argument est un tableau contenant les paramètres passés après une commande
        const commande = argument.shift().toLowerCase(); //commande est le mot derrière le prefixe

        if (commande === "ping"){ 
            message.channel.send("/help");
            if (argument[0]==="1")
            {
                message.channel.send("Tu crois vraiment que je vais répondre \"pong\" petit enculé ?");
            }
            if (argument[0]==="2")
            {
                message.reply("pong");
            }
            if (argument[0]==="3")
            {
                message.channel.send("pong");
            }
        }
        
        if(commande === "say") {
            const sayMessage = argument.join(" "); //met tous les paramètres de la commande dans sayMessage
            message.delete().catch(O_o=>{}); //Supprime du chat la ligne de commande,the catch just ignores the error with a cute smiley thing.
            message.channel.send(sayMessage);
          }

        /*
        if (message.content === prefixe+"ping"){
           message.channel.send('Pong! ' + Math.round(bot.ping)+ 'ms!')
           //message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");   
        }*/

        if (message.content=== "Heil"){ //répond en mentionnant la personne avec un @
            message.reply("Sieg Heil my Führer");
        }

        if (commande === "help"){
            var help_embed= new Discord.RichEmbed()
            .setColor('D1F22C')
            .addField("Commande du bot !", " -/help : Affiche les commandes du bot !")
            .addField("/ping n:", "n compris entre 1 et 3")
            .addField("/say blabla:", "le bot dit blabla")
            //.setFooter("Ce bot est génial") //permet d'ajouter un texte en plus petit
            message.channel.send(help_embed);
            //message.channel.sendMessage("Voici les commandes du bot:\n ./help pour afficher les commandes") //permet d'afficher le message dans le channel 
            console.log("Commande help demandée")
        }

       

        


});
