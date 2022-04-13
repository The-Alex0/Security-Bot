const Discord = require('discord.js')
const { Color } = require("../../config.js");

module.exports = {
  name: "unlockall",
  aliases: ["openall"],
  description: "Unlocks all text channels from your server, not recommended",
  usage: ["e!unlockall"],
  category: ["Moderation"],
  enabled: true,              
  memberPermissions: [ "MANAGE_CHANNELS" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","MANAGE_CHANNELS" ],        
  ownerOnly: false,            
  cooldown: 6000,
  run: async (bot, message, args, dev, data) => {
  
   
      const embed = new Discord.MessageEmbed()
      .setColor(Color)
      .setDescription(`${message.guild.channels.cache.size} Channels has been unlocked`);
      message.channel.send(embed);

    message.guild.channels.cache.filter(c => c.name).forEach(async channel => {
    channel
      .updateOverwrite(message.guild.id, {
        SEND_MESSAGES: true
      })
       });
    }
 }
