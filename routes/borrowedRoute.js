import express from 'express';
import { getAllBorrowed, createBorrowed, returnBorrowedBook } from '../controllers/borrowedController.js';

const router = express.Router();

router.post('/borrow/book', createBorrowed);
router.get('/borrow/book/list', getAllBorrowed);
router.post('/borrow/book/return', returnBorrowedBook);

export default router;
