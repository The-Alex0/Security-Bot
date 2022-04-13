const { MessageEmbed } = require("discord.js");


module.exports = {
    name: "feedback",
    aliases: ["feed"],
    description: "You Can Feedback To Owner Bot",
    usage: ["e!feedback (Type a Something"],
    category: ["Report"],
    enabled: true,
    memberPermissions: [],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS", "BAN_MEMBERS"],
    ownerOnly: false,
    cooldown: 6000,
  run: async (client, message, args, dev) => {

if(!args[0])
{
  message.channel.send("PLease Give me Something to feedback!!")
  return;
}
let args1 = args.join(' ');
const channel = client.channels.cache.get("952654811944321134")
const embed = new MessageEmbed()
.setDescription(`**Feedback Reported**\n Reporter : <@!${message.member.id}>\n Feedback : ${args1}\n GUild : ${message.guild.name}`)
channel.send(embed)
message.channel.send("Done your Feedback has been sent to the developers thanks")
      
      

  }
}
