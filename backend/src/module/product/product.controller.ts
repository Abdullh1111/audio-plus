import { catchAsync } from "../../ErrorHandler/catchAsynch";
import productService from "./product.service";

// add product
const addProduct = catchAsync(async (req, res) => {
    const result =await productService.addProduct(req.body)
    res.status(201).json({
        success: true,
        message: "Product added successfully",
        data: result
    })
})

// update product
const updateProduct = catchAsync(async (req, res) => {
    const {id} = req.params
    const result =await productService.updateProduct(req.body,id)
    res.status(200).json({
        success: true,
        message: "Product updated successfully",
        data: result
    })
})

// get all product
const getAllProduct = catchAsync(async (req, res) => {
    const result =await productService.getAllProduct()
    res.status(200).json({
        success: true,
        message: "Get all product successfully",
        data: result
    })
})

// get product by id
const getProductById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result =await productService.getProductById(id)
    res.status(200).json({
        success: true,
        message: "Get all product successfully",
        data: result
    })
})

export default {
    addProduct,
    updateProduct,
    getAllProduct,
    getProductById
}