require("dotenv").config()
const config = require('./config.json');
const Discord = require("discord.js");
const axios = require('axios');
const bot = new Discord.Client();
bot.on("ready", async () => {
    console.log('---ready---');
    bot.user.setActivity("bang help");
    console.log(
        'Started/Updated at ', new Date()
    );
});

// message after invited
bot.on("guildCreate", guild => {
    let channelID;
    let channels = guild.channels;
    channelLoop:
    for (let c of channels) {
        let channelType = c[1].type;
        if (channelType === "text") {
            channelID = c[0];
            break channelLoop;
        }
    }

    let channel = bot.channels.get(guild.systemChannelID || channelID);
    channel.send(`Hello sobat-sobat misqinku!`);
    channel.send('Assalamualaikum');
    channel.send('gak jawab pki');


});

async function command(message) {
    // import commands here
    const commands = [
        // add file in ./commands here
        require('./commands/meme'),
        require('./commands/kucing'),
        require('./commands/ke'),
        require('./commands/sat'),
        require('./commands/quotes'),
        require('./commands/reaction'),
        require('./commands/help'),
        require('./commands/kbbi'),
        require('./commands/battlefield')
    ];

    // run the commands here
    // sebagai kata pertama
    const msgPref = message.content.split(' ')[0].toLowerCase();
    // sebagai kata kedua
    const cmmd = message.content.split(' ').length > 1 ? message.content.split(' ')[1].toLowerCase() : null;
    if ( 
        msgPref == config.prefix && 
        cmmd && 
        commands.map(item => item.name) && 
        commands[commands.map(item => item.name).indexOf(cmmd)]
    ) {
        const selected = commands[commands.map(item => item.name).indexOf(cmmd)];
        // sebagai kata ketiga
        const args = selected.isWithArgs ? message.content.split(' ')[2].toLowerCase() : '';
        const data = args ? await selected.content(args) : await selected.content();
        switch (selected.type) {
            case 'image':
                message.channel.send(generateImage(data.url, 'MAS BAMBANG', data.title));    
                break;

            case 'textEmbed':
                message.channel.send(generateTextEmbed('MAS BAMBANG', data));
                break;
        
            case 'text':
                message.reply(data);
                break;
            
            case 'react':
                message.react(data);
                break;
            
            case 'dictionary':
                message.channel.send(generateTextEmbed(args.toUpperCase(), data));
                break;

            case 'game':
                message.channel.send(generateTextEmbed('BATTLEFIELD', data.game + '\n\n' + data.message));
                break;

            default:
                break;
        }
    }
}

function generateImage(url, title, caption) {
    const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setTimestamp()
        .setTitle(title)
        .setDescription(caption)
        .setImage(url)
    return embed;
}

function generateTextEmbed(title, detail) {
    const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setTimestamp()
        .setTitle(title)
        .setDescription(detail)
    return embed;
}

bot.on("message", async msg => {
  try {
    // common commands here   
      await command(msg);
    // game commands here
  } catch (error) {
      console.log(error);
  }
})
bot.login(config.token);