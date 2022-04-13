const Discord = require('discord.js')
const { Color } = require("../../config.js");

module.exports = {
  name: "role",
  aliases: ["rolle"],
  description: "add/remove role form user",
  usage: ["role @User @role"],
  category: ["Moderation"],
  enabled: true,
  memberPermissions: ["MANAGE_ROLES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS", "MANAGE_ROLES"],
  ownerOnly: false,
  cooldown: 6000,
  run: async (client, message, args) => {
    
/*if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("**You Dont Have The Permissions To Add Roles To Users! - [MANAGE_ROLES]**");
*/
    let rMember = message.mentions.members.first();

    if(!rMember) return message.channel.send("Please provide a user to add a role too.")
    
    let role = message.mentions.roles.first();
    
    if(!role) return message.channel.send("Please provide a role to add to said user.") 
    

   /* if(!message.guild.me.hasPermission(["MANAGE_ROLES"])) return message.channel.send("I don't have permission to perform this command. Please give me Manage Roles Permission!")*/

    if(rMember.roles.cache.has(role.id)) {
      
       rMember.roles.remove(role.id);
        
      return message.channel.send(` **${role.name}** role removed from **${rMember.displayName}**`)
    
    } else {
        
      await rMember.roles.add(role.id).catch(e => console.log(e.message))
      
      message.channel.send(`**${role.name}** has been added to **${rMember.displayName}**`)
    
    }

  }
}
