const Evento = require('../model/event') //importamos el modelo creado

//Metodo para crear un cliente
const createEvent = (req, res) => { //Tenemos en cuenta los parametros de respuesta (res) y consulta (req)
    let event = new Evento({ //Creamos un objeto con la informacion desde el body de la consulta
        Name: req.body.Name,
        DateEvent: req.body.DateEvent,
        Affair: req.body.Affair,
        Content: req.body.Content
    })

    event.save((err, evt) => { //Guardamos el Cliente obtenido desde el body de la consulta
        err && res.status(500).json(err.message) //si existe un error, nos mostrara el error
        res.status(200).json(evt) //Caso contrario nos mostrara el cliente guardado
    })
}

//Metodo para crear un cliente
const getEvent = (req, res) => { //Tenemos en cuenta los parametros de respuesta (res) y consulta (req)
    Evento.find((err, evt) => { //Obtenemos todos los clientes contenidos en la base de datos
        err && res.status(500).send(err.message) //si existe un error, nos mostrara el error
        res.status(200).json(evt) //Caso contrario nos mostrara el arreglo de clientes existentes
    })
}

const updateEvent = (req, res) => {
    Evento.findOneAndUpdate({Name: req.body.Name},{DateEvent: req.body.DateEvent}, (err, evt)=>{
            err && res.status(500).send(err.message)
            res.status(200).send(evt)
    })
}

const deleteEvent = (req, res) => {
    Evento.findOneAndDelete({Name: req.body.Name},{DateEvent: req.body.DateEvent}, (err , evt) => {
        err && res.status(501).send(err.message)
        res.status(200).send(evt)
    })
}

const dayEvent = (req, res) => {
    Evento.findOneAndUpdate({Name: req.body.Name},{DateEvent: req.body.DateEvent},{Affair: req.body.Affair},{Content: req.body.Content},{MissingDay: " dias de diferencia"},(err, evt)=>{
        err && res.status(500).send(err.message)
        res.status(200).send(evt)
    })
}


module.exports = {createEvent,getEvent,updateEvent,deleteEvent,dayEvent}