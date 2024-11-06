import express from 'express';
import { getStockLogs } from '../controllers/stockLogController.js';

const router = express.Router();

router.get('/:bookId', getStockLogs);

export default router;
