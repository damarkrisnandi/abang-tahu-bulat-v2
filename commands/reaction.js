const axios = require('axios');
const Discord = require("discord.js");
const client = new Discord.Client();
module.exports = {
    name: 'react',
    description: 'Asking a reaction from Abang Tahu Bulat',
    isWithArgs: false,
    type: 'react',
    content: async () => {
        // const reactsName = client.emojis.map(emoji => emoji.name);
        const reacts = [ 
            '705203981407879303',
            '705203988496252938',
            '705203992069931119',
            '705203999095390288',
            '705204043538235452',
            '705205369189826650',
            '705205369432965141',
            '705205370922205244',
            '705205371400355930',
            '705205540086743087',
            '705205540707500143',
            '705205541420662858',
            '705205546239918121',
            '705205549524058143',
            '705205551746908211',
            '705205552078258228',
            '705205556951908393',
            '705205557430321213',
            '705205560982765588',
            '705206013287989328',
            '705206013548298391',
            '705206013598629978',
            '705206013900357663',
            '705206014927962172',
            '705206016194773054',
            '705206016350093332',
            '705206016710672454',
            '705206027196563587',
            '705206030069399622',
            '705206414087422082',
            '705206415962275940',
            '706320141310492783',
            '706320158389436477',
            '706320172545343599',
            '706321564152627210',
            '706321575175258153',
            '706321585593647124',
            '706322666650468394',
            '706323141424578671',
            '706323161544917062',
            '706323161632866316',
            '706326552249368657',
            '706327212973883402',
            '706327865037422623',
            '706328157409640519',
            '706328866322513970',
            '706330523269726280',
            '706490928113647926' 
        ];
        console.log(reacts);
        rand = Math.round(Math.random() * (reacts.length - 1));
        // const react = '706328157409640519';
        const react = reacts[rand];
        return react;
    }
}