import UserService from '../services/userService.js';
import { UserSchema } from '../validation/userValidation.js';
class UserController {
    async create(req, res) {
        try{
            await UserSchema.validate(req.body);
            const result = await UserService.create(req.body);
    
            return res.status(201).json({email:result.email, token:result.token});
        }
        catch(error){
            return res.status(400).json({
                message: error.messages,
                error: error.message,
            });
        }
    }

    async getById(req, res) {
        const user = await UserService.getById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        return res.status(200).json(user);
    }

    async verifyMail(req, res) {
        try {
            const { validation_token } = req.params
            await UserService.verifyMail(validation_token);
            res.redirect('http://localhost:5173/login')
        }
        catch (error) {
            return res.status(400).json({
                message: error.messages,
                error: error.message,
            });
        }
    }

    async forgotPassword(req, res) {    
        try {
            const { email } = req.body
            await UserService.forgotPassword(email);
            res.status(200).json({ message: 'Email with password reset link sent' })
        } catch (error) {
            return res.status(400).json({
                message: error.messages,
                error: error.message,
            });
        }
        
    }

    async recoveryPassword(req, res) {
        try {
            const { form, reset_token } = req.body
            const resul = await UserService.recoveryPassword(form.password, reset_token);
            if(!resul){
                throw new Error('Token expired or invalid')
            }
            res.status(200).json({ message: 'Password recovered' })
        } catch (error) {
            return res.status(400).json({
                message: error.messages,
                error: error.message,
            });
        }
    }
}

export default new UserController();
