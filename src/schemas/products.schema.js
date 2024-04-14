import joi from "joi";

export const productsSchema = joi.object({
  title: joi.string().min(5).required(),
  stock: joi.number().min(0).required(),
  description: joi.string().max(100).required(),
  category: joi.string().required(),
  price: joi.number().min(100).max(10000).required(),
  rating: joi.number().min(1).max(5).required(),
});

export const updateProductsSchema = joi.object({
  title: joi.string().min(5).required(),
  stock: joi.number().min(1).required(),
  description: joi.string().max(100).required(),
  category: joi.string().required(),
  price: joi.number().min(100).max(10000).required(),
  rating: joi.number().min(1).max(5).required(),
});

