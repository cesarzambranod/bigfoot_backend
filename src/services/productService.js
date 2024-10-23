import dataSource  from '../config/typeorm.config.js';
import Product from '../entities/Product.js';

class ProductService {
    constructor() {
        this.productRepository = dataSource.getRepository(Product);
    }
    async create(productData) {
        return await this.productRepository.save(productData);
    }

    async index(id) {
        return await this.productRepository.findOneBy({ id: id });
    }

    async delete(id) {
        const product = await this.indexProduct(id);
        if (!product) {
            throw new Error('Product not found');
        }
        return await this.productRepository.softRemove(product);
    }

    async show() {
        return await this.productRepository.find();
    }

    async update(id, productData) {
        const product = await this.indexProduct(id);
        if (!product) {
            throw new Error('Product not found');
        }
        return await this.productRepository.save({ ...product, ...productData });
    }
}

export default new ProductService();
