import {Schema, model} from "mongoose"

const eventSchema = new Schema({
    Name: {type: String},
    DateEvent: {type: Date},
    MissingDay: {type: String},
    Affair: {type: String},
    Content: {type: String}

})

export default model ('Eventos', eventSchema)