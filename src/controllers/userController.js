import UserService from '../services/userService.js';
import { UserSchema } from '../validation/userValidation.js';

class UserController {
    async create(req, res) {
        const validation = UserSchema.validate(req.body);

        if (validation.hasErrors()) {
            return res.status(400).json(validation.errors());
        }

        const user = await UserService.create(req.body);
        return res.status(201).json(user);
    }

    async getById(req, res) {
        const user = await UserService.getById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        return res.status(200).json(user);
    }
}

export default new UserController();
