module.exports = () => {
    config = require('./config.json');
    Discord = require("discord.js");
    axios = require('axios');
    bot = new Discord.Client();

    function generateTextEmbed(title, detail) {
        const embed = new Discord.RichEmbed()
            .setColor(0x00AE86)
            .setTimestamp()
            .setTitle(title)
            .setDescription(detail)
        return embed;
    }

    function gatAllIngredient() {
        const main = ['nasi', 'roti', 'sagu', 'mie', 'spagetti'];
        const lauk = ['ayam', 'sapi', 'udang', 'kepiting', 'lobster', 'tempe', 'tahu'];
        const sayur = ['bayam', 'kangkung', 'kubis', 'daun pepaya'];
        const bumbu = ['bombay', 'kecap', 'saos', 'kecap asin', 'micin', 'cuka'];
        return {main, lauk, sayur, bumbu};
    }

    function getYourIngredient() {
        const allInredient = getAllIngredient();
    }

    bot.on("message", async msg => {
        if (message.content == 'bang masterchef') {
            message.reply('mulai masterchef');
        }        
    })
}