import CartService from '../services/cartService.js';
import { CartSchema } from '../validation/cartValidation.js';
import { errors } from '@vinejs/vine'
class CarttController {
    async create(req, res) {
        try {
            await CartSchema.validate(req.body);
            const cart = await CartService.create(req.body);
            return res.status(201).json(cart);
        } catch (error) {
            let errormessage = 'Internal Server Error'
            if (error instanceof errors.E_VALIDATION_ERROR) {
                errormessage = error.messages
            }
            console.log('errormessage', errormessage)
            return res.status(400).json({
                message: errormessage,
                error: error.message,
            });
        }
    }

    async index(req, res) {
        const cart = await CartService.index(req.params.id);
        if (!cart) return res.status(404).json({ message: 'cart not found' });
        return res.status(200).json(cart);
    }

    async show(req, res){
        const cart = await CartService.show();
        return res.status(200).json(cart);
    }

    async delete(req, res) {
        const cart = await CartService.delete(req.params.id);
        if (!cart) return res.status(404).json({ message: 'cart not found' });
        return res.status(200).json({ message: 'cart deleted successfully' });
    }

    async update(req, res) {
        const cart = await CartService.update(req.params.id, req.body);
        if (!cart) return res.status(404).json({ message: 'cart not found' });
        return res.status(200).json({ message: 'cart updated successfully' });
    }
}

export default new CarttController();
