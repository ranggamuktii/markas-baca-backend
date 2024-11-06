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
  fine: {
    type: Number,
    default: 0,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

borrowedSchema.methods.calculateFine = function () {
  if (this.returnedAt && this.returnedAt > this.expectedReturnedAt) {
    const delayInDays = Math.ceil((this.returnedAt - this.expectedReturnedAt) / (1000 * 60 * 60 * 24));
    const finePerDay = 5000;
    this.fine = delayInDays * finePerDay;
  } else {
    this.fine = 0;
  }
};

export default mongoose.model('borrowed', borrowedSchema);
