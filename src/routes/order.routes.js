import { Router } from 'express';
import OrderController from '../controllers/orderController.js';

const orderRoutes = Router();

orderRoutes.post('/', OrderController.create);
orderRoutes.get('/:id', OrderController.index);
orderRoutes.get('/', OrderController.show);
orderRoutes.delete('/:id', OrderController.delete);
orderRoutes.put('/:id', OrderController.update);

export default orderRoutes;
