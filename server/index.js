import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import clientRoutes from './routes/client.js';
import generaRoutes from './routes/general.js';
import managementRoutes from './routes/management.js';
import salesRoutes from './routes/sale.js';

/* configuration */
dotenv.config();
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

/* listen */
app.listen('3000', () => {
  console.log('server is running at http://localhost:3000');
});
