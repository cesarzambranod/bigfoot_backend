import Product from '../models/product.js';

class ProductService {
    async createProduct(productData) {
        return Product.create(productData);
    }

    async indexProduct(id) {
        return Product.findByPk(id);
    }

    async deleteProduct(id) {
        return Product.destroy({ where: { id } });
    }

    async showProduct() {
        return Product.findAll();
    }

    async updateProduct(id, productData) {
        return Product.update(productData, { where: { id } });
    }
}

export default new ProductService();
