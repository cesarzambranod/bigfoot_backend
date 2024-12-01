import dataSource  from '../config/typeorm.config.js';
import User  from '../entities/User.js';
import bcrypt from 'bcryptjs';
import authService from './authService.js';
import {verifyMail} from '../helper/emailTransporter.helpers.js';

class UserService {
    constructor() {
        this.userRepository = dataSource.getRepository(User);
    }

    async create(userData) {
        return await dataSource.transaction(async (manager) => {
            try{
                this.userRepository.set
                const hashedPassword = await bcrypt.hash(userData.password, 10);
                const newUser = {
                    email: userData.email,
                    password_hash: hashedPassword,
                };
                const result = await manager.getRepository(User).save(newUser);
                const baseurl = 'http://localhost:3000/'
                const token =  authService.generateToken(result.email);
                const url = `/auth/verify-mail/${token}`
                const redirectUrl = `${baseurl}${url}`
                await verifyMail(result.email,redirectUrl);
                return {email: result.email, token: token};   

            }catch(err){
                throw new Error(err);
            }
        });
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