import UserService from '../services/userService.js';
import { userSchema } from '../validation/userValidation.js';

class UserController {
    async create(req, res) {
        const validation = userSchema.validate(req.body);

        if (validation.hasErrors()) {
            return res.status(400).json(validation.errors());
        }

        const user = await UserService.createUser(req.body);
        return res.status(201).json(user);
    }

    async getById(req, res) {
        const user = await UserService.getUserById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        return res.status(200).json(user);
    }
}

export default new UserController();