import { Router } from "express";
import { productsRouter } from "../routes/products.routes.js";
import { ordersRouter } from "../routes/order.routes.js";

export const globalRouter = Router();

globalRouter.use("/products", productsRouter);
globalRouter.use("/orders", ordersRouter);