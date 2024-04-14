import joi from "joi";

export const ordersSchema = joi.object({
  date: joi.date().required(),
  user: joi.string().min(3).required(),
  products: joi.array().items(joi.string()),
});


export const updatedOrdersSchema = joi.object({
  date: joi.date().required(),
  user: joi.string().min(3).required(),
  products: joi.array().items(joi.string()),
});