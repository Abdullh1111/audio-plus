import { catchAsync } from "../../ErrorHandler/catchAsynch";
import productService from "./product.service";

const addProduct = catchAsync(async (req, res) => {
    const result =await productService.addProduct(req.body)
    res.status(201).json({
        success: true,
        message: "Product added successfully",
        data: result
    })
})

export default {
    addProduct
}