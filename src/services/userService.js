import dataSource  from '../config/typeorm.config.js';
import User  from '../entities/User.js';
import bcrypt from 'bcryptjs';
import authService from './authService.js';
import {sendVerifyMail, sendForgotPasswordMail} from '../helper/emailTransporter.helpers.js';
import ENVIROMENT from '../config/enviroment.config.js';

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
                const baseurl = 'http://localhost:3000'
                const token =  authService.generateToken(result.email);
                const url = `/auth/verify-mail/${token}`
                const redirectUrl = `${baseurl}${url}`
                await sendVerifyMail(result.email,redirectUrl);
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

    async getUserByEmail(email) {
        console.log('emailllll', email);
        return await this.userRepository.findOneBy({
            'email': email
        });
    }

    async verifyMail(token){
        const payload = authService.verifyToken(token);
        const email_to_verify = payload.email;
        const user = await this.getUserByEmail(email_to_verify)
        user.email_verified = true
        user.verfication_token = token
        return await this.userRepository.save(user);
    } 

    async forgotPassword(email){
        const user = await this.getUserByEmail(email);
        if (!user) {
            throw new Error('User not found');
        }
        const reset_password = authService.generateToken(user.email);
        const resetUrl = `${ENVIROMENT.FRONTEND_URL}/auth/recovery-password/${reset_token}`
        return await sendForgotPasswordMail(user.email,resetUrl);
    }

    async recoveryPassword(password, reset_token){
        try {
            const {email} = authService.verifyToken(reset_token);
            const user = await this.getUserByEmail(email);
            if (!user) {
                throw new Error('User not found');
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            user.password_hash = hashedPassword;
            return this.userRepository.save(user);
            
        } catch (error) {
            throw new Error(error);
        }

    };
}

export default new UserService();