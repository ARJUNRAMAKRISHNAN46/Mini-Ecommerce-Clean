import { Router } from "express";
import { productController } from "../handlers/controllers";
import * as dependencies from "../config/dependencies"

const router: Router = Router();
const {productListController} = productController(dependencies)


router.route('/productList')
    .get(productListController);


export default router;