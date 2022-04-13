const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "suggestion",
    aliases: ["sug"],
    description: "You Can suggestion To Developer's",
    usage: ["e!suggestion (Type a Something"],
    category: ["Report"],
    enabled: true,
    memberPermissions: [],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS", "BAN_MEMBERS"],
    ownerOnly: false,
    cooldown: 6000,
  run: async (client, message, args, dev) => {

if(!args[0])
{
  message.channel.send("PLease Give me Something to suggestion!!")
  return;
}
let args1 = args.join(' ');
const channel = client.channels.cache.get("952654811067736095")
const embed = new MessageEmbed()
.setDescription(`**Suggestion Reported**\n Reporter : <@!${message.member.id}>\n Suggestion : ${args1}\n GUild : ${message.guild.name}`)
channel.send(embed)
message.channel.send("Done your Suggestion has been sent to the developers. We will try to add it :)")
      
      

  }
}
