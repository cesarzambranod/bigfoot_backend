import jwt from 'jsonwebtoken'
import ENVIROMENT from '../config/environment'
import authService from '../services/authService'

const authMiddleware = () => {
    return (req, res, next) => {
        try {
            const auth_header = req.headers['Authorization']
            if (!auth_header) {
                return res.json({ message: 'Falta el token de autorizacion' })
            }
            const access_token = auth_header.split(' ')[1]

            if (!access_token) {
                return res.json({ message: 'El token de autorizacion esta malformado' })
            }
            const user_session_payload_decoded = authService.verifyToken(access_token);
            req.user = user_session_payload_decoded
            next()
        }
        catch (error) {
            throw new Error(error.message);
            
        }
    }
}


export default authMiddleware