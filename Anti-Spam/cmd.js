// library
const Discord = require("discord.js");

// var
var MsgStorage = [];
var WarnedStorage = [];

module.exports = (msg, client, prefix, cmd) => {
  
  if(cmd == "ban"){
    if (msg.deletable) msg.delete();
    
    let id = msg.content.split(" ").slice(1).join(" ");
    let membertoban = msg.guild.member(msg.mentions.users.first() || id);


    if ( membertoban ) {

      if (!msg.guild.member(client.user).hasPermission('BAN_MEMBERS')) return msg.reply("Je n'ai pas la permission de bannir !");

      if(membertoban.bannable){



        membertoban.send('User Banned for Eternity with your Dignity').then(() => {
         membertoban.ban({ days: 7, reason: 'User Banned for Eternity with your Dignity' }).catch(e => {});
        }).catch(() => {
         membertoban.ban({ days: 7, reason: 'User Banned for Eternity with your Dignity' }).catch(e => {});
        });

      }else{

        msg.reply("Je ne peux pas ban cette personne").then(e => {
        
        setTimeout(function(){ 
          if (e.deletable) e.delete();
        }, 3000);

      }).catch(e => {
        console.log(" je ne trouve pas le message mais pas grave");
      });

      }

    } else {

      msg.reply("Je ne trouve pas le membre").then(e => {
        
        setTimeout(function(){ 
          if (e.deletable) e.delete();
        }, 3000);

      }).catch(e => {
        console.log(" je ne trouve pas le message mais pas grave");
      });

    }
  }

  if(cmd == "kick"){
    if (msg.deletable) msg.delete();
    
    let id = msg.content.split(" ").slice(1).join(" ");
    let membertokick = msg.guild.member(msg.mentions.users.first() || id);


    if ( membertokick ) {

      if (!msg.guild.member(client.user).hasPermission('KICK_MEMBERS')) return msg.reply("Je n'ai pas la permission de kick !");

      if(membertokick.kickable){



        membertokick.send('Cheh t es Kick Mec').then(() => {
         membertokick.kick("user kick").catch(e => {});
        }).catch(() => {
          membertokick.kick("user kick").catch(e => {});
        });

      }else{

        msg.reply("Je ne peux pas kick cette personne").then(e => {
        
        setTimeout(function(){ 
          if (e.deletable) e.delete();
        }, 3000);

      }).catch(e => {
        console.log(" je ne trouve pas le message mais pas grave");
      });

      }

    } else {

      msg.reply("Je ne trouve pas le membre").then(e => {
        
        setTimeout(function(){ 
          if (e.deletable) e.delete();
        }, 3000);

      }).catch(e => {
        console.log(" je ne trouve pas le message mais pas grave");
      });

    }
  }

  if(cmd == "unban"){
    if (msg.deletable) msg.delete();

    let id = msg.content.split(" ").slice(1).join(" ");

    msg.guild.members.unban(id)
    .then(user => {
      msg.reply("L'esclave à  était trouver").then(e => {

        setTimeout(function(){ 
          if (e.deletable) e.delete();
        }, 3000);

      }).catch(e => {
        console.log(" je ne trouve pas le message mais pas grave");
      });

    })
    .catch(e => {
      msg.reply("L'esclave n'existe pas").then(e => {

        setTimeout(function(){ 
          if (e.deletable) e.delete();
        }, 3000);

      }).catch(e => {
        console.log(" je ne trouve pas le message mais pas grave");
      });
    });

  }

}