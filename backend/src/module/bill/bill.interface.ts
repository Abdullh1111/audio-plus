import { Types } from "mongoose";

export type TBill = {
    fullName: string;
    address: string;
    phoneNumber: number;
    email: string;
    quantity: number;
    totalPrice: number;
    products: Types.ObjectId[];
    user: Types.ObjectId
}