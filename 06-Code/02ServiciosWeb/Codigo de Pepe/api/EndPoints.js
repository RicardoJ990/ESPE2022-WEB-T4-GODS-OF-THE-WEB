const UserController = require('../controller/User') //Importamos el controlador creado
const EventController = require('../controller/Events')
const express = require('express') //Importamos el modulo express para la creacion de las uris
const router = express.Router() //Creamos el router para enrutar las uris con los metodos creados

/* ----- CREACION DE LAS URIS ---- */
//router.metodo_CRUD.('uri', controlador.metodo)
router.post("/add", UserController.createUser)
router.get("/all",UserController.getUsers)

router.post()
router.get()
router.put()
router.delete()
router.put()

module.exports = router //Exportamos el router con las uris creadas

