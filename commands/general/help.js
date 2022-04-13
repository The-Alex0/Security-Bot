const fs = require("fs");
const Discord = require("discord.js");
const { MessageButton, MessageActionRow } = require("discord-buttons");
const { Color, Image, Footer, Author } = require("../../config.js");
module.exports = {
  name: "help",
  aliases: ["commands"],
  description: "To show you all command of the bot",
  usage: ["e!help","e!help <command>"],
  category: ["General"],
  enabled: true,            
  memberPermissions: [ "SEND_MESSAGES" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 1000,
  run: async (bot, message, args, dev, data) => {
   
    if (!args[1]) {
  let help = new Discord.MessageEmbed()
    .setColor(Color)
    .setAuthor(Author)
    .setImage(Image)
    .setDescription(`• Security is a Secured Bot that can protect your Server's Privacy and Safety + From getting Hacked. And it's Available for Free! You can get information about it here bot`)
    .addField("General Section", "`invite`, `support`, `stats`, `ping`, `serverinfo`, `userinfo`")
    .addField("Moderation Section", "`kick`, `ban`, `mute`, `unmute`, `clear`, `unbanall`, `lock`, `unlock`, `lockall`, `unlockall`, `nick`, `role`, `say`")
    .addField("Config Section", "`prefix`")
    .addField("Report Section", "`bug`, `feedback`, `suggestion`")
    .addField("Security Section", "`settings`, `punishment`, `whitelist`, `anti`")
    .setFooter(Footer)

      let button1 = new MessageButton()
       .setStyle('url')
       .setURL('https://discord.com/api/oauth2/authorize?client_id=956981187996434532&permissions=8&scope=bot') 
       .setEmoji(`963873812510810193`)
       .setLabel('Invite')

      let button2 = new MessageButton()
       .setStyle('url')
       .setURL('https://discord.gg/evil-team') 
       .setEmoji(`963873766801301514`)
       .setLabel('Support')
     
      let row1 = new MessageActionRow()
      .addComponents(button1, button2)

   return message.channel.send(help,row1);
       } else {
      let  command = args[1]
      if (bot.commands.has(command) || 
      bot.aliases.has(command)) {  
      
      command = bot.commands.get(command) || bot.aliases.get(command);
        let ccmd = " Disabled"
        if ( command.enabled ) {
        ccmd = " Enabled"
        }
      let help1 = new Discord.MessageEmbed()
     .setColor(Color) 
     .setThumbnail(message.author.avatarURL())
     .setTitle("**Help**")
     .setDescription(command.description || command.name + " this command don't have a description")
     .addField("**Usage**", "" + command.usage.join(", ") + "" )
     .addField("**Category**", "" + command.category.join(", ") + "" )
     .addField("**Command is**", ccmd);
      message.channel.send(help1)
        }
    }
  }};
