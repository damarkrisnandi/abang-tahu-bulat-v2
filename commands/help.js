const axios = require('axios');
module.exports = {
    name: 'help',
    description: 'Help Center',
    type: 'textEmbed',
    content: async () => {
        const message = 
        'Halo sobatku semua, demi kelancaran pekerjaan saya sebagai bot, saya akan membantu mas mbak yang ada disini untuk menyampaikan bahwa: \n' +
        '``meme`` untuk minta meme \n' +
        '``kucing`` untuk minta gambar kucing \n' +
        '``quote`` untuk minta quote \n' +
        '``react`` untuk minta react pada pesanmu \n' +
        '``kbbi <istilah>`` untuk minta penjelasan istilah dari KBBI \n' +
        '\n' +
        'Suwun Slur \n'
        return message;
    }
}