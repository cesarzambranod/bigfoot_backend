import User from '../models/user.js';
import bcrypt from 'bcryptjs';

class UserService {
    async createUser(userData) {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        return User.create({ ...userData, password_hash: hashedPassword });
    }

    async getUserById(id) {
        return User.findByPk(id);
    }
}

export default new UserService();
