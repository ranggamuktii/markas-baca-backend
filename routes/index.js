import express from 'express';
import bookRoute from './bookRoute.js';
import authorRoute from './authorRoute.js';
import categoryRoute from './categoryRoute.js';
import borrowerRoute from './borrowerRoute.js';
import borrowedRoute from './borrowedRoute.js';
import stockLogRoutes from './stockLogRoute.js';

const router = express.Router();

router.use('/', bookRoute);
router.use('/', authorRoute);
router.use('/', categoryRoute);
router.use('/', borrowerRoute);
router.use('/', borrowedRoute);
router.use('/stockLog', stockLogRoutes);

export default router;
