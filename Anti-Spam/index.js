/*
 PROJECT ANTI SPAM BOT
 author : Anatik (https://github.com/Anatik572), Kurama (https://github.com/Kurama)
*/

// library
const Discord = require('discord.js');

// var
const client = new Discord.Client();
const prefix = ">";
const permission = "ADMINISTRATOR";

// require
const AntiSpam = require("./anti-spam.js");
const Commande = require("./cmd.js");

// config
var permission_cmd = [
  "ID DISCORD", // Add your DISCORD ID to be able to ban people !
  "46803715412546559" // Example

// Event :: Ready
client.on("ready", () => {
	console.log("Bot prêt à être utiliser en tant que "+client.user.tag);
  //𝙰𝚃𝙸𝙺 𝙰𝙽𝙳 𝙺𝚄𝚁𝙰𝙼𝙰
  let rotate = 0;
  setInterval(function() {
    if (rotate === 0) {
      client.user.setPresence(
        { 
          activity: { name: 'D' }, 
          status: 'dnd' 
        }
      );
      rotate = 0.5;
    } else if (rotate === 0.5) {
      client.user.setPresence(
        { 
          activity: { name: 'DE' }, 
          status: 'dnd' 
        }
      );
      rotate = 1;
    } else if (rotate === 1) {
      client.user.setPresence(
        { 
          activity: { name: 'DEL' }, 
          status: 'dnd' 
        }
      );
      rotate = 2;

    } else if (rotate === 2) {
      client.user.setPresence(
        { 
          activity: { name: 'DELE' }, 
          status: 'dnd' 
        }
      );
      rotate = 3;
    } else if (rotate === 3) {
      client.user.setPresence(
        { 
          activity: { name: 'DELET' }, 
          status: 'dnd' 
        }
      );
      rotate = 4;
    } else if (rotate === 4) {
      client.user.setPresence(
        { 
          activity: { name: 'DELETE' }, 
          status: 'dnd' 
        }
      );
      rotate = 5;
    } else if (rotate === 5) {
      client.user.setPresence(
        { 
          activity: { name: 'DELETE O' }, 
          status: 'dnd' 
        }
      );
      rotate = 6;
    } else if (rotate === 6) {
      client.user.setPresence(
        { 
          activity: { name: 'DELETE OR' }, 
          status: 'dnd' 
        }
      );
      rotate = 7;
    } else if (rotate === 7) {
      client.user.setPresence(
        { 
          activity: { name: 'DELETE OR C' }, 
          status: 'dnd' 
        }
      );
      rotate = 8;
    } else if (rotate === 8) {
      client.user.setPresence(
        { 
          activity: { name: 'DELETE OR CO' }, 
          status: 'dnd' 
        }
      );
      rotate = 9;
    } else if (rotate === 9) {
      client.user.setPresence(
        { 
          activity: { name: 'DELETE OR CONS' }, 
          status: 'dnd' 
        }
      );
      rotate = 10;
    } else if (rotate === 10) {
      client.user.setPresence(
        { 
          activity: { name: 'DELETE OR CONSEQ' }, 
          status: 'dnd' 
        }
      );
      rotate = 11;
    } else if (rotate === 11) {
      client.user.setPresence(
        { 
          activity: { name: 'DELETE OR CONSEQUEN' }, 
          status: 'dnd' 
        }
      );
      rotate = 12;
    } else if (rotate === 12) {
      client.user.setPresence(
        { 
          activity: { name: 'DELETE OR CONSEQUENC' }, 
          status: 'dnd' 
        }
      );
      rotate = 13;
    } else if (rotate === 13) {
      client.user.setPresence(
        { 
          activity: { name: 'DELETE OR CONSEQUENCES' }, 
          status: 'dnd' 
        }
      );
      rotate = 0;
    }

  }, 5 * 1500);
});

// Event :: Message
client.on("message", msg => {
  if (msg.channel.name === undefined) return;
  if (msg.channel.type === "dm") return;
  if (client.user.id == msg.author.id) return;
  
  // setup l'anti spam
  AntiSpam(msg, client);
  
  // Conseille pour toi regarde ça ne le mentionne pas 
  if(msg.content.includes(client.user.id)){
    msg.reply("Ne me mentionne pas or conséquences.\n https://imgur.com/YlLWFR4")
  }
  
  // Les Commande sont bien mais que pour les mec dans la whitelist é bah que wui
  if(permission_cmd.indexOf(msg.author.id) != -1){
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;
    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const cmd = args.shift().toLowerCase();
    Commande(msg, client, prefix, cmd);
  }

});

client.login("TOKEN_BOT");