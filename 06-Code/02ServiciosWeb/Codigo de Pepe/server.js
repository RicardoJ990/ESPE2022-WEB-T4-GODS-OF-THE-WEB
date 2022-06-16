const express = require('express') //Llamamos al modulo express para el levantamiento del servidor
const mongoose = require('mongoose') //Incluimos el modulo mongoose para conectar con mongoDB Atlas
const bodyParser = require('body-parser') //Incluimos el modulo para obtener informacion del body de las consultas
const portParameter = 8080 //Asignamos un puerto para que se levante el sevidor
const EndPoints = require('./api/EndPoints') //Importamos las uris

var app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use("/users",EndPoints) //Creamos la url para el llamado de las uris

mongoose.connect( //Establecemos conexion
    "mongodb+srv://grupo4nrc5450:grupo4nrc5450@clusterg4.q6pz6.mongodb.net/Happy_Avocado?retryWrites=true&w=majority", //pegamos el link de la base de datos
    {useNewUrlParser: true},
    (err,res) => {
        err && console.log("Error conectado a la BD")
        app.listen(portParameter, () => {
            console.log(`Server is running at http://localhost:${portParameter}`)
        })
    }
)