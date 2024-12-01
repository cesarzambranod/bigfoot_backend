import { Router } from 'express';
import UserController from '../controllers/userController.js';
import userController from '../controllers/userController.js';

const userRoutes = Router();

userRoutes.post('/register', UserController.create);
userRoutes.get('/verify-mail/:validation_token', UserController.verifyMail)
userRoutes.post('/forgot-password', userController.forgotPassword);
userRoutes.put('/recovery-password', userController.recoveryPassword);

export default userRoutes;