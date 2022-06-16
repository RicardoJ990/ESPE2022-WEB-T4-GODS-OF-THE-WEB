const Proveedor = require('../model/Proveedor')

const createProveedor = (req, res) => {
    let proveedor = new Proveedor({
        nombre: req.body.nombre,
        email: req.body.email,
        ruc: req.body.ruc,
        telefono: req.body.telefono,
        inventario_disponible: req.body.inventario_disponible,
        inventario_vendido: req.body.inventario_vendido,
        inventario_restante: req.body.inventario_restante
    })

    proveedor.save((err, pro) => {
        err && res.status(500).json(err.message)
        res.status(200).json(pro)
    })
}

const getproveedores = (req, res) => {
    Proveedor.find((err, proveedores) => {
        err && res.status(500).send(err.message)
        res.status(200).json(proveedores)
    })
}

const updateinventario_vendido  = (req, res) => {
    Proveedor.findOneAndUpdate({nombre: req.body.nombre}, {inventario_vendido: req.body.inventario_vendido}, {inventario_disponible: req.body.inventario_disponible}, (err, pro) => {
        err && res.status(500).send(err.message)
        res.status(200).send(pro)
    })
}

const deleteProveedor = (req, res) => {
    Proveedor.findOneAndDelete({nombre: req.body.nombre}, (err , pro) => {
        err && res.status(501).send(err.message)
        res.status(200).send(pro)
    })
}
const stockrestante = (req, res) => {
    Proveedor.findOneAndUpdate({inventario_restante: req.body.inventario_restante} = {inventario_disponible: req.body.inventario_restante} - {inventario_vendido: req.body.inventario_vendido}, (err, pro) =>{
        err && res.status(501).send(err.message)
        res.status(200).send(pro)        
    })
}

module.exports = {createProveedor, getproveedores, updateinventario_vendido, deleteProveedor, stockrestante}