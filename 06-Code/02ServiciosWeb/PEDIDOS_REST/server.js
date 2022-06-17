const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const portParameter = 8080

const EndPoints = require('./api/EndPoints')
var app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use("/pedidos",EndPoints)
//http://localhost:8080/pedidos/uri

mongoose.connect(
    "mongodb+srv://grupo4nrc5450:grupo4nrc5450@clusterg4.q6pz6.mongodb.net/Happy_Avocado?retryWrites=true&w=majority",
    {useNewUrlParser: true},
    (err, res) => {
        err && console.log("Error al conectar a la base de datos")
        app.listen(portParameter,() => {
            console.log(`El servicio esta corriendo en el puerto ${portParameter}`)
        })
    }
)

