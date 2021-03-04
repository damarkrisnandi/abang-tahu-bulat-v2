const axios = require('axios');

module.exports = {
  getMeme: async () => {
    return (await axios.get('https://meme-api.herokuapp.com/gimme')).data;
  },

  getQuotes0: async () => {
    return (await axios.get('http://api.icndb.com/jokes/random/')).data.value.joke;
  },

  getQuotes1: async () => {
    return (await axios.get('https://geek-jokes.sameerkumar.website/api')).data;
  },

  getQuotes2: async () => {
    const quoteData = (await axios.get('https://api.quotable.io/random')).data;
    return quoteData.content + ' - ' + quoteData.author;
  },

  getQuotes3: async () => {
    return (await axios.get('https://api.quotable.io/random')).data.value;
  },

  getQuotes4: async () => {
    return (await axios.get('https://api.quotable.io/random')).data.value;
  },

  getKocheng: async () => {
    const img = (await axios.get("https://aws.random.cat/meow?ref=apilist.fun")).data.file;
    return img;
  }

} 