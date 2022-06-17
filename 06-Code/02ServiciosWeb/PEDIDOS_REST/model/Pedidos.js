const mongoose = require('mongoose')
const Schema = mongoose.Schema


const PedidosSchema = new Schema(
{
    Description: {type: String},
    Address: {type: String},
    DateOrder: {type: Date},
})

module.exports = Pedidos = mongoose.model('Pedidos', PedidosSchema)