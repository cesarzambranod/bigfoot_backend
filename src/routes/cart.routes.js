import { Router } from 'express';
import CartController from '../controllers/cartController.js';

const cartRoutes = Router();

cartRoutes.post('/', CartController.create);
cartRoutes.get('/:id', CartController.index);
cartRoutes.get('/', CartController.show);
cartRoutes.delete('/:id', CartController.delete);
cartRoutes.put('/:id', CartController.update);

export default cartRoutes;
