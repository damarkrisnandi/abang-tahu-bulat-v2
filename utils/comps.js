const Discord = require("discord.js");
const config = require("../config.json");
module.exports = {
    generateTextEmbed: (title, detail) => {
        const embed = new Discord.RichEmbed()
            .setColor(0x00AE86)
            .setTimestamp()
            .setTitle(title)
            .setDescription(detail)
        return embed;
    },
    generateImage: (url, title, caption) => {
        const embed = new Discord.RichEmbed()
            .setColor(0x00AE86)
            .setTimestamp()
            .setTitle(title)
            .setDescription(caption)
            .setImage(url)
        return embed;
    },
    setPrefix: (isMaintenance) => {
        if (isMaintenance) {
            return config.prefixMaintenance;
        } else {
            return config.prefix;
        }
    }
}