const axios = require('axios');
module.exports = {
    name: 'kucing',
    description: 'Are You love cats?',
    isWithArgs: false,
    type: 'image',
    content: async () => {
        const img = (await axios.get("https://aws.random.cat/meow?ref=apilist.fun")).data.file;
        return {url: img, title: 'NIH GAMBAR KUCING BUAT LO'}
    }
}