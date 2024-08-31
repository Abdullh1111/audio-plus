import { TBill } from "./bill.interface"
import { bill } from "./bill.model"

const newBill =async (payload: TBill) =>{
    const result =await bill.create(payload)
    return result
}

export default {
    newBill
}