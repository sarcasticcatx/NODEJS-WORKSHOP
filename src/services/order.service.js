import { Order } from "../models/order.model.js";
import { Products } from "../models/products.model.js";

export class OrderService {
    //get all orders 
    static async getAllOrders() {
         const orders = await Order.find({});

         return orders;
    }
   //get order by id //populate add 
   static async getOrderById(orderId) {
    const foundOrder = await Order.findById(orderId).populate({
        path: "products",
        model: Products,
        select: "title"
        ,
    }).exec();

    if(!foundOrder) throw new Error("order not found");

    return foundOrder;
   }
   
//create order
static async createOrder(orderData) {
    const newOrder = new Order(orderData);

    const createdOrder = await newOrder.save();

    return createdOrder;
}
//update order
static async updateOrder(orderId, updateData) {
    const foundOrder = await this.getOrderById(orderId);

    Object.assign(foundOrder, updateData);

    const updatedOrder = await foundOrder.save();

    return updatedOrder;
}

//delete order 
static async deleteOrder(orderId) {
    const response = await Order.findByIdAndDelete(orderId);

    if(!response) throw new Error("order not found");

    console.log(response);
}
}


