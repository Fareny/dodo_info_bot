const { cities } = require("../modules/settings/options");
module.exports = (bot) => {

    bot.on('message', (msg) => {
        const data = msg.text;
        const id = msg.chat.id;

        switch (data) {
            case '/start':
                require('../dataBase/checkUsers')(id);
                bot.sendMessage(id, `Для начала выбери город, в котором ты работаешь:`, cities);
                break;
        }
    });
};