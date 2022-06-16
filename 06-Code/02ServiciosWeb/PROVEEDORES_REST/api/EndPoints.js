const ProveedorController = require('../controller/Proveedores')
const express = require('express')
const router = express.Router()

router.post("/add", ProveedorController.createProveedor)
router.get("/all", ProveedorController.getproveedores)
router.put('/updateProveedor', ProveedorController.updateinventario_vendido)
router.delete('/deleteProveedor', ProveedorController.deleteProveedor)
router.put('/stockrestante', ProveedorController.stockrestante)


module.exports = router
