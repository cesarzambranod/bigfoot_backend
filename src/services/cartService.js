import dataSource  from '../config/typeorm.config.js';
import Cart from '../entities/Cart.js';

class CartService {
    constructor() {
        this.cartRepository = dataSource.getRepository(Cart);
    }
    async create(cartData) {
        return await this.cartRepository.save(cartData);
    }

    async index(id) {
        return await this.cartRepository.findOneBy({ id: id });
    }

    async delete(id) {
        const cart = await this.index(id);
        if (!cart) {
            throw new Error('Cart not found');
        }
        return await this.cartRepository.softRemove(cart);
    }

    async show() {
        return await this.cartRepository.find();
    }

    async updateCart(id, cartData) {
        const cart = await this.index(id);
        if (!cart) {
            throw new Error('Cart not found');
        }
        return await this.cartRepository.save({ ...cart, ...cartData });
    }
}

export default new CartService();
