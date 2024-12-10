import express from 'express';
import {
  getCustomers,
  getGeography,
  getProducts,
  getTransactions,
  transactionTotalNum,
} from '../controller/client.js';

const router = express.Router();

router.get('/products', getProducts);
router.get('/customers', getCustomers);
router.get('/transactions', getTransactions);
router.get('/transactions/total', transactionTotalNum);
router.get('/geography', getGeography);

export default router;
