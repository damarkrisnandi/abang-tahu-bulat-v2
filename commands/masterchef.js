module.exports = {
    name: 'masterchef',
    description: 'survive from redzone',
    type: 'game',
    content: async () => {
        const main = ['nasi', 'roti', 'sagu', 'mie', 'spagetti'];
        const lauk = ['ayam', 'sapi', 'udang', 'kepiting', 'lobster', 'tempe', 'tahu'];
        const sayur = ['bayam', 'kangkung', 'kubis', 'daun pepaya'];
        const bumbu = ['bombay', 'kecap', 'saos', 'kecap asin', 'micin', 'cuka'];
        
        
        const ingredient = [];
        ingredient.push.apply(main)
        const message = 'Silahkan buat kreasi masakan anda dan biarkan teman anda menilai';
        return {game: ingredient, message};
    }
}