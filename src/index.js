import express from 'express';
import productRoutes from './routes/product.routes.js';
import cartRoutes from './routes/cart.routes.js';
import orderRoutes from './routes/order.routes.js';
import authRoutes from './routes/auth.routes.js';
import dataSource from './config/typeorm.config.js';
import ENVIROMENT from './config/enviroment.config.js';

const app = express();
app.use(express.json());

app.use('/products', productRoutes);
app.use('/carts', cartRoutes);
app.use('/orders', orderRoutes);
app.use('/auth', authRoutes);

const startServer = async () => {
  await dataSource.initialize()
  .then(() => {
      console.log("Data Source has been initialized!")
  })
  .catch((err) => {
      console.error("Error during Data Source initialization", err)
  })
  app.listen(ENVIROMENT.PORT || 3000, () => {
    console.log(`Server running on port ${ENVIROMENT.PORT || 3000}`);
  });
};

startServer().catch((error) => console.error(error));
