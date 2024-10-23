import ProductService from '../services/productService.js';
import { ProductSchema } from '../validation/productValidation.js';
import { errors } from '@vinejs/vine'
class ProductController {
    async create(req, res) {
    try {
        await ProductSchema.validate(req.body);
        const product = await ProductService.createProduct(req.body);
        return res.status(201).json(product);
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
        const product = await ProductService.indexProduct(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        return res.status(200).json(product);
    }

    async show(req, res){
        const product = await ProductService.showProduct();
        return res.status(200).json(product);
    }

    async delete(req, res) {
        const product = await ProductService.deleteProduct(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        return res.status(200).json({ message: 'Product deleted successfully' });
    }

    async update(req, res) {
        const product = await ProductService.updateProduct(req.params.id, req.body);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        return res.status(200).json({ message: 'Product updated successfully' });
    }
}

export default new ProductController();
