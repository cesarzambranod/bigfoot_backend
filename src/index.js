import express from 'express';
import userRoutes from './routes/user.routes.js';
import productRoutes from './routes/product.routes.js';
import db from './models/index.js';

const app = express();

app.use(express.json());
app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));

