const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
            id: {type: Number},
            Description: {type: String},
            Address: {type: String},
            DateOrder: {type: String}
        },


{
    collection:"Order",
    versionKey: false,
}

);
module.exports = mongoose.model("Order", orderSchema)
