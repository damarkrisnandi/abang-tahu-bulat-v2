const axios = require('axios');
module.exports = {
    name: 'quote',
    description: 'Get a random quotes',
    type: 'textEmbed',
    isWithArgs: false,
    content: async () => {
        const num = [0, 1, 2, 3]
    rand = Math.round(Math.random() * (num.length - 1));
    try {
        switch (rand) {
            case 0:
                return (await axios.get('http://api.icndb.com/jokes/random/')).data.value.joke;
                break;
            case 1:
                return (await axios.get('https://geek-jokes.sameerkumar.website/api')).data;
                break;
            case 2:
                return (await axios.get('https://api.tronalddump.io/random/quote')).data.value;
                break;
            case 3:
                var quoteData = (await axios.get('https://api.quotable.io/random')).data;
                return quoteData.content + ' - ' + quoteData.author;
                break;
            case 3:
                return (await axios.get('https://api.quotable.io/random')).data.value;
                break;
            default:
                return (await axios.get('http://api.icndb.com/jokes/random/')).data.value.joke;
                break;
        }

    } catch (error) {
        console.log(error);
        return (error)
    }
    }
}