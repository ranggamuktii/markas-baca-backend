import express from 'express';
import { getCategories, getCategoryById, addCategory, updateCategory, deleteCategory } from '../controllers/categoryController.js';

const router = express.Router();

router.get('/categories', getCategories);
router.get('/xategory/:id', getCategoryById);
router.post('/xategory', addCategory);
router.put('/xategory/:id', updateCategory);
router.delete('/xategory/:id', deleteCategory);

export default router;
