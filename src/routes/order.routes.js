import { Router } from "express";
import { OrderController } from "../controller/order.controller.js";

export const ordersRouter = Router();

ordersRouter.get("/", OrderController.getAllOrders);
ordersRouter.get("/:id", OrderController.getOrderById);
ordersRouter.post("/", OrderController.createOrder);
ordersRouter.patch("/:id", OrderController.updateOrder);
ordersRouter.delete("/:id", OrderController.deleteOrder);