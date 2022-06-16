const Usuario = require('../model/Usuarios') //importamos el modelo creado

//Metodo para crear un cliente
const createUser = (req, res) => { //Tenemos en cuenta los parametros de respuesta (res) y consulta (req)
    let user = new Usuario({ //Creamos un objeto con la informacion desde el body de la consulta
        Name: req.body.Name,
        Surname: req.body.SurName,
        Age: req.body.Age,
        Card: req.body.Card,
        Email: req.body.Email,
        DateofBrth: req.body.DateofBrth,
        UserType: req.body.UserType
    })

    user.save((err, usr) => { //Guardamos el Cliente obtenido desde el body de la consulta
        err && res.status(500).json(err.message) //si existe un error, nos mostrara el error
        res.status(200).json(usr) //Caso contrario nos mostrara el cliente guardado
    })
}

//Metodo para crear un cliente
const getUsers = (req, res) => { //Tenemos en cuenta los parametros de respuesta (res) y consulta (req)
    Usuario.find((err, usrs) => { //Obtenemos todos los clientes contenidos en la base de datos
        err && res.status(500).send(err.message) //si existe un error, nos mostrara el error
        res.status(200).json(usrs) //Caso contrario nos mostrara el arreglo de clientes existentes
    })
}

module.exports = {createUser,getUsers} //Exportamos el metodo creado

