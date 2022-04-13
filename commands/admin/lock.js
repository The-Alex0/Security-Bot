const Discord = require('discord.js')
const { Color } = require("../../config.js");

module.exports = {
  name: "lock",
  aliases: ["close"],
  description: "Locks the current or selected text channels",
  usage: ["e!lock"],
  category: ["Moderation"],
  enabled: true,			  
  memberPermissions: [ "MANAGE_CHANNELS" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","MANAGE_CHANNELS" ],		
  ownerOnly: false,			
  cooldown: 6000,
  run: async (bot, message, args, dev, data) => {
  


  message.channel
      .updateOverwrite(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(` 
         <#${message.channel.id}> Has been locked
      `));
     });
   }
}
