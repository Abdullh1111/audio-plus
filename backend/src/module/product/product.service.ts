
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

const getProductByPage =async (page: number,limit: number) =>{
    const countDoc =await product.countDocuments()
    const totalPage = countDoc/limit
    const skip = page*limit
    const result =await product.find().skip(skip).limit(limit)
    if(result.length===0){
        throw new appError("This page product not found", 404)
    }
    return {totalPage,result}
}

export default {
    addProduct,
    updateProduct,
    getAllProduct,
    getProductById,
    getProductByCategory,
    getProductByPage
}