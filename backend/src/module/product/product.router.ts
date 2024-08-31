import { Router } from "express";
import productController from "./product.controller";
import authAdmin from './../../middleware/authAdmin';

const productRouter = Router()
productRouter.post('/addproduct',authAdmin,productController.addProduct);
productRouter.put('/update/:id',authAdmin,productController.updateProduct);
productRouter.get('/getallproduct',productController.getAllProduct);
productRouter.get('/getproduct/:id',productController.getProductById);
productRouter.get('/getproductbycategory/:category',productController.getProductByCategory);


export default productRouter