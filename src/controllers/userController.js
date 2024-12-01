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
}

export default new UserController();
