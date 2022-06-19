import {Router} from "express";
import * as productControl from '../controllers/products.controllers'
import { authJwt } from "../middlewares";

const router = Router ()

router.get('/', productControl.getProduct);

router.get('/:productId', productControl.getProductById);

router.post('/', authJwt.verifyToken, authJwt.isAdmin, productControl.createProduct);

router.put('/:productId', authJwt.verifyToken, authJwt.isAdmin, productControl.updateProductById);

router.delete('/:productId', authJwt.verifyToken, authJwt.isAdmin, productControl.deleteProductById);


export default router;