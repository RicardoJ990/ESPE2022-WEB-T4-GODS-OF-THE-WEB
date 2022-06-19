import Evento from '../models/event'


export const createEvent = async (req, res) => { 
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


export const getEvent = async (req, res) => { 
    Evento.find((err, Evento) => { 
        err && res.status(500).send(err.message) 
        res.status(200).json(Evento) 
    })
}

export const updateEvent = async (req, res) => {
    const updateEvent = await Evento.findByIdAndUpdate(req.params.eventId, req.body, {
        new:true
    })
    res.status(200).json(updatePedido) 
}

export const deleteEvent = async (req, res) => {
    const {eventId} = req.params;
    await Evento.findByIdAndDelete(eventId)
    res.status(204).json()
}

export const dayEvent = async (req, res) => {
    Evento.findOneAndUpdate({Name: req.body.Name},{DateEvent: req.body.DateEvent},{Affair: req.body.Affair},{Content: req.body.Content},{MissingDay: " dias de diferencia"},(err, evt)=>{
        err && res.status(500).send(err.message)
        res.status(200).send(evt)
    })
}
