import express from 'express';
import { getAllBorrowed, getBorrowedById, createBorrowed, updateBorrowed, deleteBorrowed } from '../controllers/borrowedController.js';

const router = express.Router();

router.get('/', getAllBorrowed);
router.get('/:id', getBorrowedById);
router.post('/', createBorrowed);
router.put('/:id', updateBorrowed);
router.delete('/:id', deleteBorrowed);

export default router;
