// library
const Discord = require("discord.js");

// var
var MsgStorage = [];
var WarnedStorage = [];

module.exports = (msg, client) => {
  if(msg.channel.name != undefined){
  	if(MsgStorage[msg.author.id] === undefined){
  		MsgStorage[msg.author.id] = { MsgCount: 0, LastMsg: []};
  		setTimeout(() => {
          delete MsgStorage[msg.author.id];
  		}, 3000);
  	}

  	if(WarnedStorage[msg.author.id] === undefined){
       WarnedStorage[msg.author.id] = { Warn: 0};
       setTimeout(() => {
       	delete WarnedStorage[msg.author.id];
       }, 1800000); // 30 MINUTE
  	}
    
    // Ajoute +1 msg
    MsgStorage[msg.author.id].MsgCount += 1;

    // Met à jours le last msg 
    MsgStorage[msg.author.id].LastMsg.push(msg);
    
    function CheckWarn(author){
    	if(WarnedStorage[author] != undefined){
    		if(WarnedStorage[author].Warn == 1){
    			let user = msg.guild.member(msg.author);
    			if(user.kickable){
    				const embed = new Discord.MessageEmbed()
    				embed.setTitle(`Tu à était kick | 1 warn` )
    				embed.addField("Tu vient de te faire kick pour ", "`Spam`") 
    				embed.addField("Comment éviter de ce faire kick ? ", "`On est a Montréal, pas aux Favelas\nReprends toi, calme toi mon tit gars`") 
    				embed.addField("Comment re rejoindre le serveur ? ", "`Trouve l'invite et rend pas fou ! Kappa`") 
    				embed.setColor("#fcad03")

    				user.send(embed).then(() => {
                       user.kick("SPAM").catch(e => {});
                    }).catch(() => {
                    	user.kick("SPAM").catch(e => {});
                    });
    			}
    		} else if(WarnedStorage[author].Warn == 2){
    			let user = msg.guild.member(msg.author);
    			if(user.kickable){
    				const embed = new Discord.MessageEmbed()
    				embed.setTitle(`Tu à était kick | 2 warn` )
    				embed.addField("Tu vient de te faire kick pour ", "`Spam | 2ème warn !`") 
    				embed.addField("Comment éviter de ce faire kick ? ", "`On est a Montréal, pas aux Favelas\nReprends toi, calme toi mon tit gars`") 
    				embed.addField("Comment re rejoindre le serveur ? ", "`Bah va dans découverte mon amis.`") 
    				embed.setColor("#fcad03")

    				user.send(embed).then(() => {
                       user.kick("SPAM").catch(e => {});
                    }).catch(() => {
                    	user.kick("SPAM").catch(e => {});
                    });
    			}

    		}else if(WarnedStorage[author].Warn == 3){
    			let user = msg.guild.member(msg.author);
    			if(user.bannable){
    				const embed = new Discord.MessageEmbed()
    				embed.setTitle(`Tu à était BANNIS | 3 warn ` )
    				embed.addField("Tu vient de te faire ban pour ", "`Spam`") 
    				embed.addField("Comment éviter d'être un méchant garçon ? ", "`Arrêter d'être un petit spammer !`") 
    				embed.addField("Comment re rejoindre le serveur ? ", "`Tu ne peux plus ...`") 
    				embed.setColor("#fcad03")

    				user.send(embed).then(() => {
                       user.ban({ days: 7, reason: 'SPAM' }).catch(e => {});
                    }).catch(() => {
                    	user.ban({ days: 7, reason: 'SPAM' }).catch(e => {});
                    });
    			}
    		}
    	}
    }

    if(!MsgStorage[msg.author.id]){
    	return false;
    }

    if (MsgStorage[msg.author.id].MsgCount >= 5) {

      if (msg.deletable) msg.delete();


      var SpamKicking = false
      MsgStorage[msg.author.id].LastMsg.forEach(message => {
        if(message.content === msg.content){
          SpamKicking = true;
      	}
      });

      if(SpamKicking){
      	WarnedStorage[msg.author.id].Warn += 1;
      	delete MsgStorage[msg.author.id];
      	CheckWarn(msg.author.id);
      }

    }

    if(MsgStorage[msg.author.id]){
    	if (MsgStorage[msg.author.id].MsgCount >= 8) {

    		if (msg.deletable) msg.delete();

    		WarnedStorage[msg.author.id].Warn += 1;
    		delete MsgStorage[msg.author.id];
    		CheckWarn(msg.author.id);

    	}
    }

  }

}