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
import { Transaction } from './models/Transaction.js';
import { OverallStat } from './models/OverallStat.js';
import { AffiliateStat } from './models/AffiliateStat.js';
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from './data/index.js';

/* configuration */
dotenv.config(); // 将.env敏感信息注入到环境中、能被process.env访问
const app = express();
// 支持接口返回json数据
app.use(express.json());
// 用于增强 Express.js 应用程序的安全性的中间件。它通过设置适当的 HTTP 标头来提供各种安全功能，例如防止跨站点脚本攻击（XSS）、点击劫持（clickjacking）等
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
//  HTTP 请求日志记录器中间件。它会记录每个请求的详细信息，例如请求方法、URL、响应状态码等
app.use(morgan('common'));
// 用于解析 HTTP 请求体中的数据，例如表单数据、JSON 数据等，简化了从请求中提取数据的过程
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// 支持跨域
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
    // AffiliateStat.insertMany(dataAffiliateStat);
    // OverallStat.insertMany(dataOverallStat);
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // User.insertMany(dataUser);
    // Transaction.insertMany(dataTransaction);
  })
  .catch((error) => {
    console.log(error);
  });
