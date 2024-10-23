import express from 'express';
import userRoutes from './routes/user.routes.js';
import AppDataSource from './config/typeorm.config.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', userRoutes);

const startServer = async () => {
  await AppDataSource.initialize();
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
  });
};

startServer().catch((error) => console.error(error));
