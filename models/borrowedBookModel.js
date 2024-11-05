import mongoose from 'mongoose';

const borrowedSchema = new mongoose.Schema({
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'book',
    required: true,
  },
  borrowerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'borrower',
    required: true,
  },
  borrowedAt: {
    type: Date,
    default: new Date(),
  },
  expectedReturnedAt: {
    type: Date,
    required: true,
  },
  returnedAt: {
    type: Date,
  },
});

export default mongoose.model('borrowed', borrowedSchema);
