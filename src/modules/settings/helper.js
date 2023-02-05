const writeNewInfoAboutUser = require("../../dataBase/checkUsers");

const cityFunc = async (data, id) => { //Время работы
    await writeNewInfoAboutUser(id, { city: data });
}
const profFunc = async (data, id) => { //Выбор профессии
    await writeNewInfoAboutUser(id, { workTime: data });
    // await require("./menus/profession")(bot, chatId, id);
}
const mainMenu = async (data, id) => { //Главное меню
    await writeNewInfoAboutUser(id, { profession: data });
    // await require("./menus/mainMenu")(bot, chatId, id);
}

module.exports = { cityFunc };