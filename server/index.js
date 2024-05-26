import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import clientRoutes from './routes/client.js';
import generaRoutes from './routes/general.js';
import managementRoutes from './routes/management.js';
import salesRoutes from './routes/sale.js';
import { User } from './models/User.js';
import { Product } from './models/Product.js';
import { ProductStat } from './models/ProductStat.js';
import { dataUser, dataProduct, dataProductStat } from './data/index.js';

/* configuration */
dotenv.config(); // 将.env敏感信息注入到环境中、能被process.env访问
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* route */
app.use('/client', clientRoutes);
app.use('/general', generaRoutes);
app.use('/management', managementRoutes);
app.use('/sales', salesRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running at http://localhost:${PORT}`);
    });

    /* 仅在初始时添加数据;User是一个collection */
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // User.insertMany(dataUser);
  })
  .catch((error) => {
    console.log(error);
  });
