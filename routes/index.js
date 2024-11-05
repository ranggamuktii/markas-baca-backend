import express from 'express';
import bookRoute from './bookRoute.js';

const router = express.Router();

router.use('/books', bookRoute);

export default router;
