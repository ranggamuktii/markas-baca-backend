import mongoose from 'mongoose';

const stockLogSchema = new mongoose.Schema({
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true,
  },
  action: {
    type: String,
    enum: ['borrow', 'return'],
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  status: {
    type: String,
    enum: ['tersedia', 'dipinjam'],
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('stockLog', stockLogSchema);
