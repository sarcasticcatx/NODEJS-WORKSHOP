import { Schema, model } from "mongoose";

const productsSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 5,
  },
  stock: {
    type: Number,
    minLength: 1,
  },
  description: {
    type: String,
    maxLength: 100,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
    min: 100,
    max: 10000,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
});

export const Products = model("Product", productsSchema);