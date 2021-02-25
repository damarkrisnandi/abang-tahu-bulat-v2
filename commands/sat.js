module.exports = {
    name: 'sat',
    description: 'Ngatain',
    isWithArgs: false,
    type: 'text',
    content: async () => {
        const react = ['JANCUK', 'NGAJAK BERANTEM?', 'GELUT KUY!', 'ANAK MANA LO!', 'DASAR JAMBAN', 'TAEK', 'BANGSAT'];
        return react[Math.round(Math.random() * (react.length - 1))];
    }
}