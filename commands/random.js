module.exports = {
    name: 'random',
    description: 'Get a random number',
    type: 'textEmbed',
    isWithArgs: true,
    content: async (args) => {
        return (Math.floor((Math.random() * parseInt(args)) + 1)).toString();
    }
}