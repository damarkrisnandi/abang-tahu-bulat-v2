module.exports = {
    commands: () => {
        const url = '../commands/';
        const cmd = ['meme', 'quotes', 'ke', 'kucing', 'reaction', 'help', 'random'];
        return cmd.map(o => { return require(url + o) })
    }
}