const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "bug-report",
    aliases: ["bug"],
    description: "you can use this command to report our bot or developer's or service",
    usage: ["e!bug (Type a Something"],
    category: ["Report"],
    enabled: true,
    memberPermissions: [],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS", "BAN_MEMBERS"],
    ownerOnly: false,
    cooldown: 6000,
  run: async (client, message, args, dev) => {

if(!args[0])
{
  message.channel.send("PLease Give me Something to report!!")
  return;
}
let args1 = args.join(' ');
const channel = client.channels.cache.get("952654810174337054")
const embed = new MessageEmbed()
.setDescription(`**Bug Reported**\n Reporter : <@!${message.member.id}>\n Bug : ${args1}\n GUild : ${message.guild.name}`)
channel.send(embed)
message.channel.send("Done your bug report has been sent to the developers thanks for reporting bug we will try to fix asap :)")
      
      

  }
}
