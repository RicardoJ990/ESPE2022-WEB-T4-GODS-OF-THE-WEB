
import {Router} from "express";
import * as PedidosController from '../controllers/Pedido'
const router = Router ()

router.post('/',PedidosController.createPedidos)
router.get('/',PedidosController.getPedidos)
router.put('/:pedidoId',PedidosController.updatePedidos)
router.delete('/:pedidoId', PedidosController.deletePedidos)
router.get('/:pedidoId', PedidosController.DateOrder)

export default router;