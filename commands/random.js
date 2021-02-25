module.exports = {
    name: 'random',
    description: 'Get a random number',
    type: 'text',
    isWithArgs: true,
    content: async (args) => {
        return (Math.floor((Math.random() * parseInt(args)) + 1)).toString();
    }
}