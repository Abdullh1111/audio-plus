
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


export default {
    addProduct,
    updateProduct
}