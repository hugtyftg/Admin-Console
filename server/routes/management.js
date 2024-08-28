import express from 'express';
import { getAdmins } from '../controller/management.js';
import { getUserPerformance } from '../controller/management.js';

const router = express.Router();
router.get('/admins', getAdmins);
router.get('/performance/:id', getUserPerformance);

export default router;
