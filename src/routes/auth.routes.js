import { Router } from 'express';
import UserController from '../controllers/userController.js';

const userRoutes = Router();

userRoutes.post('/register', UserController.create);

export default userRoutes;