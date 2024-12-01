import ENVIROMENT from "../config/enviroment.config.js";
import jwt from "jsonwebtoken";
class AuthService {
    generateToken(email){
        return jwt.sign({email: email},ENVIROMENT.SECRET_KEY,{expiresIn: '1d'})
    }

    verifyToken(token){
        return jwt.verify(token,ENVIROMENT.SECRET_KEY)
    }

}
export default new AuthService();