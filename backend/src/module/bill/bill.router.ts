import { Router } from "express";
import billController from "./bill.controller";

const billRoute = Router()

billRoute.post("/newbill", billController.newBill)
billRoute.get("/getallbill", billController.getAllBill)

export default billRoute