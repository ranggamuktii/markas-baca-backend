import express from 'express';
import bookRoute from './bookRoute.js';
import authorRoute from './authorRoute.js';
import categoryRoute from './categoryRoute.js';

const router = express.Router();

router.use('/books', bookRoute);
router.use('/authors', authorRoute);
router.use('/categories', categoryRoute);

export default router;
