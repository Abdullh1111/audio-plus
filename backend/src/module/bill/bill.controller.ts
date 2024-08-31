import { catchAsync } from "../../ErrorHandler/catchAsynch"
import billService from "./bill.service"

const newBill = catchAsync(async (req, res) => {
    const result =await billService.newBill(req.body)
    res.status(201).json({
        success: true,
        message: "Place a new order",
        data: result
    })
})

const getAllBill = catchAsync(async (req, res) => {
    const result =await billService.getAllBill()
    res.status(201).json({
        success: true,
        message: "Place a new order",
        data: result
    })
})

export default {
    newBill,
    getAllBill
}