import express from 'express';
import { getAuthors, getAuthorById, addAuthor, updateAuthor, deleteAuthor } from '../controllers/authorController.js';

const router = express.Router();

router.get('/', getAuthors);
router.get('/:id', getAuthorById);
router.post('/', addAuthor);
router.put('/:id', updateAuthor);
router.delete('/:id', deleteAuthor);

export default router;
