const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const portParameter = 8081
const EndPoints = require('./api/EndPoints')

var app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use("/Proveedores", EndPoints)


mongoose.connect(
    "mongodb+srv://grupo4nrc5450:grupo4nrc5450@clusterg4.q6pz6.mongodb.net/Happy_Avocado?retryWrites=true&w=majority",
    {useNewUrlParser: true},
    (err, res) => {
        err && console.log("Hubo un error al conectar a la base de datos")
        app.listen(portParameter, () => {
            console.log(`El servidor se está ejecutando en el puerto: ${portParameter}`)
    })
}
)
