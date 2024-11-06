import Borrower from '../models/borrowerModel.js';

export const getBorrowers = async (req, res) => {
  try {
    const borrowers = await Borrower.find({ isDeleted: false });
    res.status(200).json(borrowers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBorrowerById = async (req, res) => {
  try {
    const borrower = await Borrower.findOne({ _id: req.params.id, isDeleted: false });

    if (!borrower) return res.status(404).json({ message: 'Borrower not found' });

    res.status(200).json(borrower);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addBorrower = async (req, res) => {
  try {
    const newBorrower = new Borrower(req.body);
    await newBorrower.save();
    res.status(201).json(newBorrower);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateBorrower = async (req, res) => {
  try {
    const updatedBorrower = await Borrower.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedBorrower) {
      return res.status(404).json({ message: 'Borrower not found' });
    }

    res.status(200).json(updatedBorrower);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteBorrower = async (req, res) => {
  try {
    const deletedBorrower = await Borrower.findById(req.params.id);

    if (!deletedBorrower) {
      return res.status(404).json({ message: 'Borrower not found' });
    }

    deletedBorrower.isDeleted = true;
    await deletedBorrower.save();

    res.status(200).json({ message: 'Borrower successfully deleted (soft delete)' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
