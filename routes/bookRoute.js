import express from 'express';
import { getBooks, getBookById, addBook, updateBook, deleteBook, upload, uploadBookCover } from '../controllers/bookController.js';

const router = express.Router();

router.get('/books', getBooks);
router.get('/book/:id', getBookById);
router.post('/book', addBook);
router.put('/book/:id', updateBook);
router.delete('/book/:id', deleteBook);
router.post('/book/upload', upload.single('coverImage'), uploadBookCover);

export default router;
