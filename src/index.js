import express from 'express';
import userRoutes from './routes/user.routes.js';
import productRoutes from './routes/product.routes.js';
import cartRoutes from './routes/cart.routes.js';
import dataSource from './config/typeorm.config.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/carts', cartRoutes);


const startServer = async () => {
  await dataSource.initialize()
  .then(() => {
      console.log("Data Source has been initialized!")
  })
  .catch((err) => {
      console.error("Error during Data Source initialization", err)
  })
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
  });
};

startServer().catch((error) => console.error(error));
