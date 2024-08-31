import { TProduct } from "./product.interface";
import { product } from "./product.model";

const addProduct =async (payload: TProduct) =>{
    const result =await product.create(payload)
    return result
}


export default {
    addProduct
}