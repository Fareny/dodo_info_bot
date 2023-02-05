const Users = require("../schema/users");
module.exports = async (
    { id,
        firstName = '',
        nickname = '',
        workTime = '',
        timeToSend = 180000,
        profession = '',
        city = '',
        idMessage = 0,
        welcomeMeeting = '',
        howAreYouOne = '',
        shapeAndIcon = '',
        dodoBook = '',
        met = '',
        howAreYouTwo = '',
        equipment = '',
        instructionsAndHelp = '',
        howAreYouThree = '',
        interestingForTheMonth = '',
        sixMonthsOfWork = '' }) => {
    const userBD = await Users.findOne({ id });

    if (!userBD) {
        const newUser = new Users({
            id: id,
            name: firstName,
            nickname: nickname,
            workTime: workTime,
            timeToSend: timeToSend,
            city: city,
            idMessage: idMessage,
            profession: profession,
            welcomeMeeting: welcomeMeeting,
            howAreYouOne: howAreYouOne,
            shapeAndIcon: shapeAndIcon,
            dodoBook: dodoBook,
            met: met,
            howAreYouTwo: howAreYouTwo,
            equipment: equipment,
            instructionsAndHelp: instructionsAndHelp,
            howAreYouThree: howAreYouThree,
            interestingForTheMonth: interestingForTheMonth,
            sixMonthsOfWork: sixMonthsOfWork
        });
        await newUser.save();
        console.log("Сохранил");
    }

};