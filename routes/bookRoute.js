import express from 'express';
import { getBooks, getBookById, addBook, updateBook, deleteBook } from '../controllers/bookController.js';

const router = express.Router();

router.get('/books', getBooks);
router.get('/book/:id', getBookById);
router.post('/book', addBook);
router.put('/book/:id', updateBook);
router.delete('/book/:id', deleteBook);

export default router;
