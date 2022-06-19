import Pedidos from '../models/Pedidos'

export const createPedidos = async (req, res) => {

    const {Description, Address, DateOrder}= req.body
    
    const newPedido = new Pedidos ({Description, Address, DateOrder});

    const pedidoSave = await newPedido.save()

    res.status(201).json(pedidoSave)
}

export const getPedidos = (req, res) => {
    Pedidos.find((err, pedidos) =>{
        err && res.status(500).send(err.message)
        res.status(200).json(pedidos)
    })
    
}

export const updatePedidos = async (req, res) => {
    const updatePedido = await Pedidos.findByIdAndUpdate(req.params.pedidoId, req.body, {
        new:true
    })
    res.status(200).json(updatePedido)  
}

export const deletePedidos = async (req, res) => {
    const {pedidoId} = req.params;
    await Pedidos.findByIdAndDelete(pedidoId)
    res.status(204).json()
}
export const DateOrder = async (req, res) => {
    
    const updateDate = await Pedidos.findOneAndUpdate(req.params.DateOrder, req.body.DateOrder, {
        new:true
    })
    res.status(200).json(DateOrder)  
}


