const { getQuotes0, getQuotes1, getQuotes2, getQuotes3, getQuotes4 } = require('../utils/service');
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
                    return await getQuotes0();
                    break;
                case 1:
                    return await getQuotes1();
                    break;
                case 2:
                    return await getQuotes2();
                    break;
                case 3:
                    return await getQuotes3();
                    break;
                case 4:
                    return await getQuotes4();
                    break;
                default:
                    return await getQuotes0();
                    break;
            }

        } catch (error) {
            console.log(error);
            return (error)
        }
    }
}