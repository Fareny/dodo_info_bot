module.exports = {
    // ТУТ НАХОДЯТСЯ ВСЕ КНОПКИ
    menu: { //МЕНЮ ДЛЯ НОВИЧКОВ
        inline_keyboard: [
            [{ text: "📈 Как составить график?", callback_data: "/workPrinciples" }],
            [{ text: "🍔 Что взять на обед?", callback_data: "/workRules" }],
            [{ text: "💰 Выплаты", callback_data: "/adaptation" }, { text: "✈️ Отпуск", callback_data: "/adaptation" }],
            [{ text: "👕 Форма на смене", callback_data: "/firstExit" }],
            [{ text: "🐣 История ДоДо", callback_data: "/vacation" }, { text: "📖 ДоДо Книга", callback_data: "/sickLeave" }],
            [{ text: "💼 Стандарты работы", callback_data: "/salary" }],
            [{ text: "💊 Больничный", callback_data: "/education" }, { text: "🎓 Развитие", callback_data: "/development" }],
            [{ text: "❓Другое", callback_data: "/anotherTopic" }],
            // [{ text: "🧾 Назад в Меню", callback_data: "/back" }]
        ],
    },
    menuMoreMonth: { //МЕНЮ ДЛЯ СТАРИЧКОВ
        inline_keyboard: [
            [{ text: "💰 Выплаты", callback_data: "/adaptation" }, { text: "✈️ Отпуск", callback_data: "/adaptation" }],
            [{ text: "💼 Стандарты работы", callback_data: "/salary" }],
            [{ text: "💊 Больничный", callback_data: "/education" }, { text: "🎓 Развитие", callback_data: "/development" }],
            [{ text: "❓Другое", callback_data: "/anotherTopic" }],
            // [{ text: "🧾 Назад в Меню", callback_data: "/backToMenu" }],
        ],
    },

    cities: { //Выбор города
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: "Москва и Химки", callback_data: "moscowAndKhimki" }],
                [{ text: "Сыктывкар", callback_data: "syktyvkar" }],
                [{ text: "Санкт-Петербург", callback_data: "saintPetersburg" }],
                [{ text: "Новомосковск", callback_data: "novomoskovsk" }],
                // [{ text: "Другой", callback_data: "Другой" }],
            ],
        }),
    },

    profession: { //Профессии
        inline_keyboard: [
            [{ text: "Курьер", callback_data: "Курьер" }],
            [{ text: "Кассир", callback_data: "Кассир" }],
            [{ text: "Пиццамейкер", callback_data: "Пиццамейкер" }],
            [{ text: "Менеджер", callback_data: "Менеджер" }],
            [{ text: "Другая", callback_data: "Другая" }],
        ],
    },

    workingHours: {//Время работы
        inline_keyboard: [
            [{ text: "Меньше месяца", callback_data: "Меньше_Месяца" }],
            [{ text: "Больше месяца", callback_data: "Больше_Месяца" }],
            [{ text: "Несколько месяцев", callback_data: "Несколько_месяцев" }],
            [{ text: "Больше года", callback_data: "Больше_года" }]
        ],
    },

    answer: { //Ответ
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: "Да", callback_data: "/yes" }, { text: "Нет", callback_data: "/no" }],
            ],
        })
    },

    grade: { //Оценки
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: "😡", callback_data: "/veryBad" }, { text: "😕", callback_data: "/bad" }, { text: "😐", callback_data: "/normal" }, { text: "🙂", callback_data: "/nice" }, { text: "🤩", callback_data: "/veryNice" }]
            ]//😡😕😐🙂🤩
        })
    },

    anotherTopic: { //ДРУГОЕ В ГЛАВНОМ МЕНЮ
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: "🎁 Какие бонусы дает компания?", callback_data: "/companyBonuses" }],
                [{ text: "📲 Новые стандарты", callback_data: "/newStandards" }],
                [{ text: "🗣 Как задать вопрос компании?", callback_data: "/companyQuestion" }],
                [{ text: "◀️ НАЗАД ◀️", callback_data: "/back" }],
            ],
        })
    },

};
