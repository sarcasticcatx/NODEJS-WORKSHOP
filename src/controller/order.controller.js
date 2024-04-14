import { ordersSchema, updatedOrdersSchema } from "../schemas/order.schema.js";
import { OrderService } from "../services/order.service.js";

export class OrderController {
    //get all
    static async getAllOrders(req, res) {
        try {
            const orders = await OrderService.getAllOrders();

            res.json(orders)
        } catch (error) {
            console.log(error);
      res.status(500).json({ msg: error.message });
        }
    }
    //get by id
    static async getOrderById(req, res) {
        try {
            const order = await OrderService.getOrderById(req.params.id);

            res.json(order)
        } catch (error) {
            console.log(error);
      res.status(404).json({ msg: error.message });
        }
    }
    //create order
    static async createOrder(req, res) {
        try {
            await ordersSchema.validateAsync(req.body, {
                abortEarly: false,
            });

            const createdOrder = await OrderService.createOrder(req.body);

            res.status(201).json(createdOrder);
        } catch (error) {
            console.log(error);
      res.status(400).json({ msg: error.message });
        }
    }
    //update order
    static async updateOrder(req, res) {
        try {
            await updatedOrdersSchema.validateAsync(req.body);

            const updatedOrder = await OrderService.updateOrder(req.params.id, req.body);

            res.json(updatedOrder);
        } catch (error) {
            console.log(error);
      res.status(400).json({ msg: error.message });
        }
    }

    //delete one
    static async deleteOrder(req, res) {
        try {
            await OrderService.deleteOrder(req.params.id);

            res.sendStatus(204);
        } catch (error) {
            console.log(error);
            res.status(404).json({ msg: error.message });
        }
    }
}