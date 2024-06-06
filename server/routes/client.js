import express from 'express';
import {
  getCustomers,
  getProducts,
  getTransactions,
  transactionTotalNum,
} from '../controller/client.js';

const router = express.Router();

router.get('/products', getProducts);
router.get('/customers', getCustomers);
router.get('/transactions', getTransactions);
router.get('/transactions/total', transactionTotalNum);

export default router;
