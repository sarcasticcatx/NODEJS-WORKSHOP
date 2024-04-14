import { Router } from "express";
import { ProductsController } from "../controller/products.controller.js";

export const productsRouter = Router();

productsRouter.get("/", ProductsController.getAllProducts);
productsRouter.get("/:id", ProductsController.getProductById);
productsRouter.post("/", ProductsController.createProduct);
productsRouter.patch("/:id", ProductsController.updateProduct);
productsRouter.delete("/:id", ProductsController.deleteProduct);