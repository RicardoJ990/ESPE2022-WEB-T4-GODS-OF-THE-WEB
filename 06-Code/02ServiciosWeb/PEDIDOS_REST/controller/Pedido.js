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

const getPedidos = (req, res) => 
{
    pedidos.find((err, ped) =>{
        err && res.status(500).send(err.message)
        res.status(200).json(ped)
    })
    
}

const updatePedidos = (req, res) => {
    pedidos.findOneAndUpdate({Description: req.body.Description},{Address: req.body.Address},(err,ped) =>{    
        err&&res.status(500).send(err.message)
        res.status(200).send(ped)
    })
        
}

const deletePedidos = (req, res) => {
    pedidos.findOneAndDelete({nombre: req.body.Description}, (err , ped) => {
        err && res.status(501).send(err.message)
        res.status(200).send(ped)
    })
}
const DateOrder = (req, res) => {
    pedidos.findOneAndUpdate({DateOrder: req.body.DateOrder}, (err, ped) =>{
        err && res.status(501).send(err.message)
        res.status(200).send(ped)        
    })
}

module.exports = {createPedidos, getPedidos, updatePedidos, deletePedidos, DateOrder}

