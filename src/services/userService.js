import dataSource  from '../config/typeorm.config.js';
import User  from '../entities/User.js';
import bcrypt from 'bcryptjs';

class UserService {
    constructor() {
        this.userRepository = dataSource.getRepository(User);
    }

    async create(userData) {
        try{
            const hashedPassword = await bcrypt.hash(userData.password, 10);
            const newUser = {
                email: userData.email,
                password_hash: hashedPassword,
            };
            await this.userRepository.save(newUser);
        }catch(err){
            throw new Error(err);
        }
    }

    async getById(id) {
        return await this.userRepository.findOneBy({
            id: id,
        });
    }

    async update(id, userData) {
        const user = await this.getById(id);
        if (!user) {
            throw new Error('User not found');
        }
        Object.assign(user, userData);
        return await this.userRepository.save(user);
    }

    async delete(id) {
        const user = await this.getUserById(id);
        if (!user) {
            throw new Error('User not found');
        }
        return await this.userRepository.softRemove(user);
    }

    async show() {
        return await this.userRepository.find();
    }
}

export default new UserService();