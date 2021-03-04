const { getMeme } = require("../utils/service");

module.exports = {
    name: 'meme',
    description: 'Get a random meme',
    isWithArgs: false,
    type: 'image',
    content: async () => {
        const data = await getMeme();
        return data;
    }
}