import AppDataSource  from '../config/typeorm.config.js';
import { User } from '../entities/User.js';
import bcrypt from 'bcryptjs';

class UserService {
    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    async createUser(userData) {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const newUser = {
            username: userData.username,
            email: userData.email,
            password_hash: hashedPassword,
            address: userData.address,
            phone_number: userData.phone_number,
            is_active: true
        };
        return await this.userRepository.save(newUser);
    }

    async getUserById(id) {
        return await this.userRepository.findOneBy({
            id: id,
        });
    }

    async updateUser(id, userData) {
        const user = await this.getUserById(id);
        if (!user) {
            throw new Error('User not found');
        }
        Object.assign(user, userData);
        return await this.userRepository.save(user);
    }

    async deleteUser(id) {
        const user = await this.getUserById(id);
        if (!user) {
            throw new Error('User not found');
        }
        return await this.userRepository.softRemove(user);
    }

    async getAllUsers() {
        return await this.userRepository.find();
    }
}

export default UserService;