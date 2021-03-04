const { getKocheng } = require('../utils/service');
module.exports = {
    name: 'kucing',
    description: 'Are You love cats?',
    isWithArgs: false,
    type: 'image',
    content: async () => {
        const img = await getKocheng();
        return {url: img, title: 'NIH GAMBAR KUCING BUAT LO'}
    }
}