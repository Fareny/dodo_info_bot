const mongoose = require('mongoose')
const users_Schema = mongoose.Schema({
    id: Number,
    name: String,
    nickname: String,
    workTime: String,
    timeToSend: Number,
    city: String,
    profession: String,
    idMessage: Number,
    welcomeMeeting: String,
    howAreYouOne: String,
    shapeAndIcon: String,
    dodoBook: String,
    met: String,
    howAreYouTwo: String,
    equipment: String,
    instructionsAndHelp: String,
    howAreYouThree: String,
    interestingForTheMonth: String,
    sixMonthsOfWork: String
},
    { versionKey: false });


module.exports = mongoose.model('users', users_Schema, 'users');