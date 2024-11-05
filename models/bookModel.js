import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  summary: {
    type: String,
  },
  stocks: [
    {
      book_identifier: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        enum: ['tersedia', 'dipinjam'],
        default: 'tersedia',
      },
    },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model('book', bookSchema);
