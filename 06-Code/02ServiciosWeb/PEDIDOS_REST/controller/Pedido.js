const Pedidos = require('../model/Pedidos')

const createPedidos = (req, res) => {
    let pedidos = new Pedidos({
        Description: req.body.Description,
        Address: req.body.Address,
        DateOrder: req.body.DateOrder,
    })

    pedidos.save((err, ped) => {
        err&&res.status(500).json(err.message)
        res.status(200).json(ped)
    })
}

const getPedidos = (req, res) => {
    Pedidos.find((err, pedidos) =>{
        err && res.status(500).send(err.message)
        res.status(200).json(pedidos)
    })
    
}

const updatePedidos = (req, res) => {
    Pedidos.findOneAndUpdate({Description: req.body.Description},{Address: req.body.Address},(err,ped) =>{    
        err&&res.status(500).send(err.message)
        res.status(200).send(ped)
    })
        
}

const deletePedidos = (req, res) => {
    Pedidos.findOneAndDelete({Description: req.body.Description}, (err , ped) => {
        err && res.status(501).send(err.message)
        res.status(200).send(ped)
    })
}
const DateOrder = (req, res) => {
    Pedidos.findOneAndUpdate({DateOrder: req.body.DateOrder}, (err, ped) =>{
        err && res.status(501).send(err.message)
        res.status(200).send(ped)        
    })
}

module.exports = {createPedidos, getPedidos, updatePedidos, deletePedidos, DateOrder}

