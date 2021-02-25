const kbbi = require('../kamus.json')
module.exports = {
    name: 'kbbi',
    description: 'Ngatain',
    isWithArgs: true,
    type: 'dictionary',
    content: async (args) => {
        return kbbi[args] ? 
            kbbi[args].split('&#183;').join('.')
            .split('&#233;').join('e') 
            : 'Istilah tidak ditemukan';
    }
}