import { Router } from 'express';
import UserController from '../controllers/userController.js';

const userRoutes = Router();

userRoutes.post('/', UserController.create);
userRoutes.get('/:id', UserController.getById);

export default userRoutes;
