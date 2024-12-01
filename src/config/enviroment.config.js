import dotenv from 'dotenv'
dotenv.config();

const ENVIROMENT = {
    SECRET_KEY: process.env.SECRET_KEY,
    MYSQL: {
        DB_USERNAME: process.env.DB_USERNAME,
        DB_PASSWORD: process.env.DB_PASSWORD,
        DB_HOST: process.env.DB_HOST,
        DB_PORT: process.env.DB_PORT,
        DB_DATABASE: process.env.DB_DATABASE,
    },
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    FRONTEND_URL: process.env.FRONTEND_URL,
}
export default ENVIROMENT;