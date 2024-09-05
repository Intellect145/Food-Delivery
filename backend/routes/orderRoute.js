import express from "express"
import authmiddleware from "../middlewear/auth.js"
import { placeOrder } from "../controllers/orderController.js"

const orderRouter = express.Router();

orderRouter.post("/place",authmiddleware,placeOrder)

export default orderRouter;