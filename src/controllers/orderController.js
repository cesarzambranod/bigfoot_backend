import OrderService from '../services/orderService.js';
import { OrderSchema } from '../validation/orderValidation .js';
import { errors } from '@vinejs/vine'
class OrderController {
    async create(req, res) {
        try {
            await OrderSchema.validate(req.body);
            const order = await OrderService.create(req.body);
            return res.status(201).json(order);
        } catch (error) {
            return res.status(400).json({
                message: error.messages,
                error: error.message,
            });
        }
    }

    async index(req, res) {
        const order = await OrderService.index(req.params.id);
        if (!order) return res.status(404).json({ message: 'order not found' });
        return res.status(200).json(order);
    }

    async show(req, res){
        const order = await OrderService.show();
        return res.status(200).json(order);
    }

    async delete(req, res) {
        const order = await OrderService.delete(req.params.id);
        if (!order) return res.status(404).json({ message: 'order not found' });
        return res.status(200).json({ message: 'order deleted successfully' });
    }

    async update(req, res) {
        const order = await OrderService.update(req.params.id, req.body);
        if (!order) return res.status(404).json({ message: 'order not found' });
        return res.status(200).json({ message: 'order updated successfully' });
    }
}

export default new OrderController();
