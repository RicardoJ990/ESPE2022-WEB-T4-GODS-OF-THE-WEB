const mongoose = require("mongoose");

const providerSchema = new mongoose.Schema({
    id: {type: Number},
    name: {type: String},
    email: {type: String},
    ruc: {type: String},
    phone: {type: String},
    inventory_available: {type: Number},
    inventory_sold: {type: Number},
    inventory_remaining: {type:Number}
},

{
    collection:"Provider",
    versionKey: false,
}

);
module.exports = mongoose.model("Provider", providerSchema)


