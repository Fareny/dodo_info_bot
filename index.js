const telegramApi = require("node-telegram-bot-api");
const config = require("./config.json");
const token = config.token;
const bot = new telegramApi(token, { polling: true });

const start = () => {
    require('./src/modules/menus/mainMenu')(bot);
    require('./src/modules/callbackMsg')(bot);
    require('./src/modules/callbackButtons')(bot);
    require('./src/dataBase/connectDataBase')();
};
start();