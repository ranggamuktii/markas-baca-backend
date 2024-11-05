import express from 'express';
import { getBorrowers, getBorrowerById, addBorrower, updateBorrower, deleteBorrower } from '../controllers/borrowerController.js';

const router = express.Router();

router.get('/', getBorrowers);
router.get('/:id', getBorrowerById);
router.post('/', addBorrower);
router.put('/:id', updateBorrower);
router.delete('/:id', deleteBorrower);

export default router;
