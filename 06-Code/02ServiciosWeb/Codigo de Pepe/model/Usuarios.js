const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    Name: {type: String},
    Surname: {type: String},
    Age: {type: Number},
    Card: {type: Number},
    Email: {type: String},
    DateofBrth: {type: Date},
    UserType:{type: String}
})

module.exports = User = mongoose.model('Usuarios', UserSchema)