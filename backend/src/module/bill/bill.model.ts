import { model, Schema } from "mongoose";
import { TBill } from "./bill.interface";

const billScheema = new Schema<TBill>({
    fullName: {type:String, required: true},
    email: {type:String, required: true},
    phoneNumber: {type: Number, required:true},
    address: {type:String, required:true},
    totalPrice: {type:Number, required:true},
    quantity: {type: Number, required: true},
    products: [{type:Schema.Types.ObjectId, ref:'product'}],
    user: {type: Schema.Types.ObjectId, ref:'user'}
})

export const bill = model<TBill>('bill',billScheema)