import { Schema, model } from "mongoose";

const ordersSchema = new Schema({
  date: {
    type: Date,
  },
  user: {
    type: String,
    minLength: 3,
  },
  products: [
    {
      type: Schema.Types.ObjectId,

      ref: "Products",
    },
  ],
});
export const Order = model("Order", ordersSchema);