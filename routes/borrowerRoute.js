import express from 'express';
import { getBorrowers, getBorrowerById, addBorrower, updateBorrower, deleteBorrower } from '../controllers/borrowerController.js';

const router = express.Router();

router.get('/borrowers', getBorrowers);
router.get('/borrower/:id', getBorrowerById);
router.post('/borrower', addBorrower);
router.put('/borrower/:id', updateBorrower);
router.delete('/borrower/:id', deleteBorrower);

export default router;
