import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

const productScheema = new Schema<TProduct>({
    productName:{type:String, required:true},
    price: {type: Number, required: true},
    details: {type: String, required: true},
    category:{type:String,required:true},
    rating: {type: Number},
    productImage: {type: String, required: true}
})


export const product = model<TProduct>('product',productScheema)