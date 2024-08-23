import express from 'express';
import { getSales } from '../controller/sale.js';

const router = express.Router();
router.get('/sales', getSales);

export default router;
