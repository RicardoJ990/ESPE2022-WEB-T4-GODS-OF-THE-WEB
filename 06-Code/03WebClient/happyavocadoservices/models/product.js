const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        id: {type: Number},
        name: {type: String},
        price: {type: Number},
        type: {type: String},
        description: {type: String}
    },

    {
        collection:"Product",
        versionKey: false,
    }
);

module.exports = mongoose.model("Product", productSchema)
