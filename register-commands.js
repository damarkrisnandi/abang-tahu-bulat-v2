const fs = require('fs');
const { resolve } = require('path');
module.exports = {
    commands: async () => {
        const result = await new Promise((resolve) => {
            fs.readdir(__dirname + "/commands", (err, files) => {
                resolve(files.map(file => require(`./commands/${file}`)))
            });
        });
        return result;
    }
}