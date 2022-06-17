const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
    Name: {type: String},
    DateEvent: {type: Date},
    MissingDay: {type: String},
    Affair: {type: String},
    Content: {type: String}

})

module.exports = Event = mongoose.model('Eventos', eventSchema)