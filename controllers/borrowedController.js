import Borrowed from '../models/borrowedBookModel.js';

export const getAllBorrowed = async (req, res) => {
  try {
    const borrowedBooks = await Borrowed.find().populate('bookId').populate('borrowerId');
    res.status(200).json(borrowedBooks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBorrowedById = async (req, res) => {
  try {
    const borrowed = await Borrowed.findById(req.params.id).populate('bookId').populate('borrowerId');
    if (!borrowed) return res.status(404).json({ message: 'Record not found' });
    res.status(200).json(borrowed);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createBorrowed = async (req, res) => {
  const { bookId, borrowerId, expectedReturnedAt } = req.body;
  try {
    const newBorrowed = new Borrowed({ bookId, borrowerId, expectedReturnedAt });
    await newBorrowed.save();
    res.status(201).json(newBorrowed);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateBorrowed = async (req, res) => {
  const { returnedAt } = req.body;
  try {
    const borrowed = await Borrowed.findByIdAndUpdate(req.params.id, { returnedAt }, { new: true }).populate('bookId').populate('borrowerId');
    if (!borrowed) return res.status(404).json({ message: 'Record not found' });
    res.status(200).json(borrowed);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteBorrowed = async (req, res) => {
  try {
    const borrowed = await Borrowed.findByIdAndDelete(req.params.id);
    if (!borrowed) return res.status(404).json({ message: 'Record not found' });
    res.status(200).json({ message: 'Record deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
