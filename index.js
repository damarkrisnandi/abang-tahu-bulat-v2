require("dotenv").config()
const config = require('./config.json');
const Discord = require("discord.js");
const { generateImage, generateTextEmbed } = require("./utils/comps");
const { commands } = require("./utils/register-commands");
const { ONLINE, MAINTENANCE } = require("./utils/status");

const bot = new Discord.Client();

// -- bot setting
const status = MAINTENANCE;
// -- end of bot setting

bot.on("ready", async () => {
    console.log('---ready---');
    bot.user.setActivity(status.activity);
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
    const prefix = config.prefix;
    
    const split_command = message.content.split(' ');
    let msgPref = null;
    let cmmd = null;
    let args = null;

    if (split_command.length == 2) {
        [msgPref, cmmd] = split_command;
    } else if (split_command.length == 3) {
        [msgPref, cmmd, args] = split_command;
    }
    
    if ( 
        msgPref == prefix && cmmd && 
        commands().map(item => item.name) && 
        commands()[commands().map(item => item.name).indexOf(cmmd)]
    ) {
        if (status.isMainternance && message.author.id != config.authorID && message.author.id != config.botID ) {
            message.channel.send(generateTextEmbed('MAS BAMBANG', 'Sedang maintenis, kamu bukan author'));
            return;
        }

        const selected = commands()[commands().map(item => item.name).indexOf(cmmd)];
        
        const data = selected.isWithArgs ? await selected.content(args) : await selected.content();

        if (selected.type == 'image') message.channel.send(generateImage(data.url, 'MAS BAMBANG', data.title));
        else if (selected.type == 'textEmbed') message.channel.send(generateTextEmbed('MAS BAMBANG', data));
        else if (selected.type == 'text') message.reply(data);
        else if (selected.type == 'react') message.react(data);
    }
}

bot.on("message", async msg => {
    console.time('runtime')
    try {
        // common commands here  
        console.log(msg.author.id) 
        await command(msg);
        // game commands here
    } catch (error) {
        console.log(error);
    }
    console.timeEnd('runtime')
})

bot.login(config.token);