import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'author',
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category',
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
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  coverImage: {
    type: String,
    default: '',
  },
});

bookSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model('book', bookSchema);
