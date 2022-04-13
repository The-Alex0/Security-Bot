const Discord = require("discord.js")
const { Color } = require("../../config.js");
const { MessageButton } = require("discord-buttons");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  enabled: true,            
  memberPermissions: [ "SEND_MESSAGES" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 2000,
  run: async (bot, message, args, dev, data) => {
   
 let butn = new MessageButton()
  .setStyle('url')
  .setURL('https://discord.com/api/oauth2/authorize?client_id=956981187996434532&permissions=8&scope=bot') 
  .setEmoji('<:emoji_97:963873812510810193>')
  .setLabel('Invite Evil Bot')

return message.channel.send(`Hello Sir Are You Sure You Can Invite Me To Secure Your Server?? Good Click Below To Invite Me.`, butn);

  }
}
