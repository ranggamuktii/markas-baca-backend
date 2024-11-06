import express from 'express';
import { getAuthors, getAuthorById, addAuthor, updateAuthor, deleteAuthor, uploadProfileAuthor } from '../controllers/authorController.js';
import { upload } from '../controllers/authorController.js';

const router = express.Router();

router.get('/authors', getAuthors);
router.get('/author/:id', getAuthorById);
router.post('/author', addAuthor);
router.put('/author/:id', updateAuthor);
router.delete('/author/:id', deleteAuthor);
router.post('/author/upload', upload.single('profileImage'), uploadProfileAuthor);

export default router;
