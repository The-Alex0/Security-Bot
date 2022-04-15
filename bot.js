const inlinereply = require('discord-reply');
const Discord = require("discord.js");
const { MessageActionRow, MessageButton } = require("discord-buttons");
const bot = new Discord.Client(); 
require('discord-buttons')(bot);
const { Color, Image, Footer, Author } = require("./config.js");
const fs = require("fs"); 
const request = require("request");
const prefix = "!";
const { Collection, MessageEmbed } = require("discord.js");
const { inspect } = require("util");
let dev = ["802491275445010443"];
const cmd = require("node-cmd");

bot.login("OTU4Mzc1ODY3OTMzOTQ1ODU3.YkMbFA.NIjZ_Mq0chTMx4M8JjwGpdoQlsE")
global.mongoose = require('mongoose')
mongoose.connect("mongodb+srv://corona:corona@cluster0.tmlvu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("✅ Connected to the database.");
}).catch((err) => {
  console.log("❎ Unable to connect to the Mongodb database. Error:" + err);
});
global.Guild = require("./data/guild.js");
global.User = require("./data/user.js");
//global.Prime = require("./data/prime.js");
global.Owner = require("./data/owner.js");
bot.commands = new Collection();
bot.aliases = new Collection();
bot.cooldowns = new Collection();
bot.catagories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
  require(`./handler/${handler}`)(bot);
});
/**/
let util = require("util"),
  readdir = util.promisify(fs.readdir);

const init = async () => {
  // Then we load events, which will include our message and ready event.
  const evtFiles = await readdir("./events/");
  console.log(`Loading a total of ${evtFiles.length} events.`, "log");
  evtFiles.forEach(file => {
    const eventName = file.split(".")[0];
    console.log(`Loading Event: ${eventName}`);
    const event = new(require(`./events/${file}`))(bot);
    bot.on(eventName, (...args) => event.run(...args, bot));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
};
init();

bot.on("ready", () => {
  console.log(`[!]-------------------------------------[!]`);
  console.log(`Display Name : ${bot.user.username}`);
  console.log(`Public Prefix : ${prefix}`);
  console.log(`Version : v2`);
  console.log(`[!]-------------------------------------[!]`);
});

  bot.on("ready", async () => {
/*let channel = bot.channels.cache.get("944918083557031986");
  channel.send(new Discord.MessageEmbed().setColor(Color).setTimestamp().setThumbnail(bot.user.displayAvatarURL()).setTitle("Security Status").addField("Prefix", "`s!`").addField("Status", "🟢 Online").addField("Servers", `${bot.guilds.cache.size}`));*/
  await bot.user.setStatus("Online");
  await bot.user.setActivity(` ${prefix}help `, { type: "COMPETING" });
 
 });
////

bot.on("clickButton", async (button) => {
 console.log(button.id);
});

//=============================== - [ joinserverbot ] - ===================================//
bot.on("guildCreate", guild  => {
guild.owner.send("Thanks For Added me to your server")
}) 

//=============================== - [ logsbot ] - ===================================//
bot.on("guildCreate", guild => {
  let channel = bot.channels.cache.get("961638404133634098");
  const afo1 = new Discord.MessageEmbed()
  .setColor("#3ef900")
  .setTitle( `✅  **I Joined This Server!**`)
  .addField("  Server Name:  ",  `**${guild.name}**`)
  .addField("  Create On: ", `**${guild.createdAt} **`)
  .addField("  Server Owner: ",   `**__${guild.owner}__** `)
  .addField("  Member Count: ",  `**__${guild.memberCount}__**`)
  channel.send(afo1);
});
bot.on("guildDelete", guild => {
  let channel = bot.channels.cache.get("961638404133634098");
  const afo2 = new Discord.MessageEmbed()
  .setColor("#ff0505")
  .setTitle(`❌  ** Kicked Me In This Server!**`)
  .addField(" Server Name:  ",  `**${guild.name}**`)
  .addField(" Server Owner: ",   `**__${guild.owner}__**`)
  .addField(" Server Id: ",  `**${guild.id}**`)
  .addField(" Member Count: ",  `**__${guild.memberCount}__**`)
  channel.send(afo2);
});

//=============================== - [ Say ] - ===================================//
bot.on('message',function(message) {
 
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`${args}`);
}
});

//=============================== - [ Nickname ] - ===================================//
bot.on('message',async message => {
  if(message.content.startsWith(prefix + "nick")) { 
let args = message.content.split(" ").slice(1)
 
let shla = args.slice(1).join(" ") 
 
 if (!message.member.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("you don't have this permission ```MANAGE_GUILD```");
    }
    if (!message.guild.me.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("i don't have this permission ```MANAGE_GUILD```");
    } 
    let qawrma = message.mentions.members.first();
    if(!qawrma) return message.reply(`Mention Someone to change nickname!`)
 
 
      const embed = new Discord.MessageEmbed()
 
      .setColor("BLUE")
      .setDescription(`Done changed nickname  ${qawrma.user.username} to ${shla}`)
 
      await message.channel.send(embed)
 
      qawrma.setNickname(shla)
 
  }
})

//=============================== - [ antispam ] - ===================================//
const usersMap = new Map();
 const LIMIT = 5;
 const TIME = 6000;
 const DIFF = 7000;

 bot.on("message", async message => {
   if (!message.channel.guild) return;
   let guild = await Guild.findOne({ guildID: message.guild.id });
   if (!guild) { Guild.create({ guildID: message.guild.id }); }
   if (guild) {
     if (guild.spam.onoff === "off") return;
     let Ww = await Owner.findOne({ ownerCode: "802491275445010443" });
     if (Ww.worldWhitelist.find((c) => c.type === message.author.id)) return;
     if (message.author.id === message.guild.ownerID) return console.log("owner");
     if (guild.whitelist.find((c) => c.type === message.author.id))
       return console.log("whitelist");
     let pun = guild.punishment;
     if (message.author.bot) return;
     if (usersMap.has(message.author.id)) {
       const userData = usersMap.get(message.author.id);
       const { lastMessage, timer } = userData;
       const difference = message.createdTimestamp - lastMessage.createdTimestamp;
       let msgCount = userData.msgCount;
       if (difference > DIFF) {
         clearTimeout(timer);
         userData.msgCount = 1;
         userData.lastMessage = message;
         userData.timer = setTimeout(() => {
           usersMap.delete(message.author.id);
         }, TIME);
         usersMap.set(message.author.id, userData);
       } else {
         ++msgCount;
         if (parseInt(msgCount) >= LIMIT) {
           if (pun === "") {
             if (!message.member.bannable) return console.log(``);
             message.channel.guild.members.cache
               .get(message.author.id)
               .ban()
             message.channel.bulkDelete(msgCount, true);
           } else {
             message.channel.guild.members.cache
               .get(message.author.id)
               .kick()
               .then(k => {
                 k.guild.owner.send(new Discord.MessageEmbed()
          .setColor(Color)
         .setDescription(`**${message.author.username}** kicked because spaming in channel!`));
               });
             message.channel.bulkDelete(msgCount, true);
           }
         } else {
           userData.msgCount = msgCount;
           usersMap.set(message.author.id, userData);
            } 
         }
        } else {
       let fn = setTimeout(() => {
         usersMap.delete(message.author.id);
       }, TIME);
       usersMap.set(message.author.id, {
         msgCount: 1,
         lastMessage: message,
         timer: fn
       });
     }
 }
 });
