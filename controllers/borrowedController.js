import Borrowed from '../models/borrowedBookModel.js';
import Book from '../models/bookModel.js';
import { createStockLog } from '../controllers/stockLogController.js';

export const createBorrowed = async (req, res) => {
  const { bookId, borrowerId, expectedReturnedAt } = req.body;
  try {
    const book = await Book.findById(bookId);
    const availableStock = book.stocks.find((stock) => stock.status === 'tersedia');

    if (!availableStock) {
      return res.status(400).json({ message: 'No available stock for this book' });
    }

    availableStock.status = 'dipinjam';
    await book.save();

    const newBorrowed = new Borrowed({ bookId, borrowerId, expectedReturnedAt });
    await newBorrowed.save();

    await createStockLog(bookId, 'borrow', 'dipinjam');

    res.status(201).json(newBorrowed);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllBorrowed = async (req, res) => {
  try {
    const borrowedBooks = await Borrowed.find({ returnedAt: null, isDeleted: false }).populate('bookId').populate('borrowerId');
    res.status(200).json(borrowedBooks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const returnBorrowedBook = async (req, res) => {
  const { borrowedId, returnedAt } = req.body;
  try {
    const borrowed = await Borrowed.findById(borrowedId).populate('bookId').populate('borrowerId');
    if (!borrowed) return res.status(404).json({ message: 'Borrow record not found' });

    borrowed.returnedAt = returnedAt;
    borrowed.calculateFine();
    await borrowed.save();

    const book = await Book.findById(borrowed.bookId);
    const borrowedStock = book.stocks.find((stock) => stock.status === 'dipinjam');
    if (borrowedStock) borrowedStock.status = 'tersedia';
    await book.save();

    await createStockLog(borrowed.bookId, 'return', 'tersedia');

    res.status(200).json(borrowed);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
