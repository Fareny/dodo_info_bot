const helper = require('./settings/helper');
module.exports = async (bot) => {

    await bot.on("callback_query", async (msg) => {
        const data = msg.data;
        const id = msg.from.id;
        switch (data) {

            case "moscowAndKhimki":
                helper.cityFunc(data, id);
                break;
            case "syktyvkar":
                helper.cityFunc(data, id);
                break;
            case "saintPetersburg":
                helper.cityFunc(data, id);
                break;
            case "novomoskovsk":
                helper.cityFunc(data, id);
                break;
        }
    })
}