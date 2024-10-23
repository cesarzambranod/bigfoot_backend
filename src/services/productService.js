import dataSource  from '../config/typeorm.config.js';
import Product from '../entities/Product.js';

class ProductService {
    constructor() {
        this.productRepository = dataSource.getRepository(Product);
    }
    async createProduct(productData) {
        return await this.productRepository.save(productData);
    }

    async indexProduct(id) {
        return await this.productRepository.findOneBy({ id: id });
    }

    async deleteProduct(id) {
        const product = await this.indexProduct(id);
        if (!product) {
            throw new Error('Product not found');
        }
        return await this.productRepository.softRemove(product);
    }

    async showProduct() {
        return await this.productRepository.find();
    }

    async updateProduct(id, productData) {
        const product = await this.indexProduct(id);
        if (!product) {
            throw new Error('Product not found');
        }
        return await this.productRepository.save({ ...product, ...productData });
    }
}

export default new ProductService();
