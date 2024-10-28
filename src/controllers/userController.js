import UserService from '../services/userService.js';
import { UserSchema } from '../validation/userValidation.js';
import { errors } from '@vinejs/vine'


class UserController {
    async create(req, res) {
        try {
            await UserSchema.validate(req.body);
            const user = await UserService.create(req.body);
            return res.status(201).json(user);
        } catch (error) {
            let errormessage = 'Internal Server Error'
            if (error instanceof errors.E_VALIDATION_ERROR) {
                errormessage = error.messages
            }
            console.log('errormessage', errormessage)
            return res.status(400).json({
                message: errormessage,
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
