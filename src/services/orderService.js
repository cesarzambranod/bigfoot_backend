import dataSource  from '../config/typeorm.config.js';
import Order from '../entities/Order.js';

class OrderService {
    constructor() {
        this.orderRepository = dataSource.getRepository(Order);
    }

    async create(orderData) {
        return await this.orderRepository.save(orderData);
    }

    async index(id) {
        return await this.orderRepository.findOneBy({ id: id });
    }

    async delete(id) {
        const order = await this.index(id);
        if (!order) {
            throw new Error('Order not found');
        }
        return await this.orderRepository.softRemove(order);
    }

    async show() {
        return await this.orderRepository.find();
    }

    async updateOrder(id, orderData) {
        const order = await this.index(id);
        if (!order) {
            throw new Error('Order not found');
        }
        return await this.orderRepository.save({ ...order, ...orderData });
    }
}

export default new OrderService();
