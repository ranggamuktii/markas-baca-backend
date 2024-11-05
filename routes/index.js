import express from 'express';
import bookRoute from './bookRoute.js';
import authorRoute from './authorRoute.js';
import categoryRoute from './categoryRoute.js';
import borrowerRoute from './borrowerRoute.js';

const router = express.Router();

router.use('/books', bookRoute);
router.use('/authors', authorRoute);
router.use('/categories', categoryRoute);
router.use('/borrowers', borrowerRoute);

export default router;
