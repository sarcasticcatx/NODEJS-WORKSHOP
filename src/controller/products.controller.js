import { productsSchema, updateProductsSchema } from "../schemas/products.schema.js";
import { ProductsService } from "../services/products.service.js";

export class ProductsController {
  //get all
  static async getAllProducts(req, res) {
    try {
      const products = await ProductsService.getAllProducts(req.query);

      res.json(products);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: error.message });
    }
}
//get by id
static async getProductById(req, res) {
  try {
    const product = await ProductsService.getProductById(req.params.id);

    res.json(product)
  } catch (error) {
    res.status(404).json({msg: error.message})
  }
}
//create prod
static async createProduct(req, res) {
  try {
    await productsSchema.validateAsync(req.body, {
      abortEarly: false,
    });
    const createdProduct = await ProductsService.createProduct(req.body);

    res.status(201).json(createdProduct);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error.message });
  }
}
//update one
static async updateProduct(req, res) {
  try {
    await updateProductsSchema.validateAsync(req.body);

    const updatedProduct = await ProductsService.updateProduct(req.params.id, req.body);

    res.json(updatedProduct);
  } catch (error) {
    console.log(error);
    res.status(400).json({msg: error.message})
  }
}
//delete one
static async deleteProduct(req, res) {
  try {
   await ProductsService.deleteProduct(req.params.id);

   res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(404).json({msg: error.message});
  }
}
}