
import appError from "../../ErrorHandler/appError";
import { TProduct } from "./product.interface";
import { product } from "./product.model";

const addProduct =async (payload: TProduct) =>{
    const result =await product.create(payload)
    return result
}

const updateProduct =async (payload: TProduct, _id: string) =>{
        const result =await product.updateOne({_id},payload)
    return result
}

const getAllProduct =async () =>{
    const result =await product.find()
    return result
}

const getProductById =async (id:string) =>{
    const result =await product.findById(id)
    return result
}

const getProductByCategory =async (category: string) =>{
    const result =await product.find({category})
    if(result.length ===0){
        throw new appError("This category product not found", 404)

    }
    return result
}

export default {
    addProduct,
    updateProduct,
    getAllProduct,
    getProductById,
    getProductByCategory
}