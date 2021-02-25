const axios = require('axios');
module.exports = {
    name: 'meme',
    description: 'Get a random meme',
    isWithArgs: false,
    type: 'image',
    content: async () => {
        const data = (await axios.get('https://meme-api.herokuapp.com/gimme')).data
        return data;
    }
}