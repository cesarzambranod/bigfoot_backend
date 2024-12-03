import { Router } from 'express';
import ProductController from '../controllers/productController.js';
import authMiddleware from '../middleware/auth.js';
const productRoutes = Router();

productRoutes.post('/', authMiddleware(),ProductController.create);
productRoutes.get('/:id', ProductController.index);
productRoutes.get('/', ProductController.show);
productRoutes.delete('/:id', authMiddleware(),ProductController.delete);
productRoutes.put('/:id', authMiddleware(),ProductController.update);

export default productRoutes;
