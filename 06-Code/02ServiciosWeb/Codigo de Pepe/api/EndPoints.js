 //Importamos el controlador creado
const EventController = require('../controller/Events')
const express = require('express') //Importamos el modulo express para la creacion de las uris
const router = express.Router() //Creamos el router para enrutar las uris con los metodos creados

/* ----- CREACION DE LAS URIS ---- */
//router.metodo_CRUD.('uri', controlador.metodo)
router.post("/event/add",EventController.createEvent)
router.get("/event/all",EventController.getEvent)
router.put("/event/edit",EventController.updateEvent)
router.delete("/event/delete",EventController.deleteEvent)
router.put("/event/missing",EventController.dayEvent)

module.exports = router //Exportamos el router con las uris creadas

