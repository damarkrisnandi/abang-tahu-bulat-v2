module.exports = {
    name: 'survival',
    description: 'survive from redzone',
    type: 'game',
    content: async () => {
        const line = 'O O O O O O O O';
        let battleField = '';
        for (const side of line.split(' ')) {
            battleField += line + '\n';
        } 
        const message = 'pilih titik tampat kamu untuk berdiri';
        return {game: battleField, message};
    }
}