const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProveedorSchema = new Schema({
    nombre: {type: String},
    email: {type: String},
    ruc: {type: String},
    telefono: {type: String},
    inventario_disponible: {type: Number},
    inventario_vendido: {type: Number},
    inventario_restante: {type:Number}
})



module.exports = Proveedor = mongoose.model('Proveedor', ProveedorSchema)
