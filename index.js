const Discord = require('discord.js');
const peery = new Discord.Client();
const pfix = 'P';
const peeryid = ['508194135694639104'];

    peery.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!peeryid.includes(message.author.id)) return;
      
  if (message.content.startsWith(pfix + 'setPlaying')) {
    peery.user.setGame(argresult);
      message.channel.send(`**تم تغيير البلاينق الى   ${argresult}**`)
  } else 
     if (message.content === (pfix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(pfix + 'watch')) {
    peery.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**تَم تغيير الواتشينق الى   ${argresult}**`)
  } else 
  if (message.content.startsWith(pfix + 'lis')) {
    peery.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**تَم تغيير الليسينينق الى   ${argresult}**`)
  } else 
  if (message.content.startsWith(pfix + 'stream')) {
    peery.user.setGame(argresult, "https://www.twitch.tv/peery13");
      message.channel.send(`تم تغييرك حالتك بالتويتش الى   **${argresult}**`)
  }
  if (message.content.startsWith(pfix + 'nick')) {
    peery.user.setUsername(argresult).then
      message.channel.send(`جاري تغيير الأسم لـ ..**${argresult}** `)
} else
if (message.content.startsWith(pfix + 'avatar')) {
    peery.user.setAvatar(argresult);
    message.channel.send(`**جاري تغيير الأفتار... :** `);
}
});

peery.login(process.env.TOKEN);
