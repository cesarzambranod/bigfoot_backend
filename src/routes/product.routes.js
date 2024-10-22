import { Router } from 'express';
import ProductController from '../controllers/productController.js';

const productRoutes = Router();

productRoutes.post('/', ProductController.create);
productRoutes.get('/:id', ProductController.index);
productRoutes.get('/', ProductController.show);
productRoutes.delete('/:id', ProductController.delete);
productRoutes.put('/:id', ProductController.update);

export default productRoutes;
