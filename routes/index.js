import express from 'express';
import bookRoute from './bookRoute.js';
import authorRoute from './authorRoute.js';

const router = express.Router();

router.use('/books', bookRoute);
router.use('/authors', authorRoute);

export default router;
