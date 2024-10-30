import mongoose from 'mongoose';

const mongodbCollection = process.env.MONGODB_COLLECTION;

const testSchema = mongoose.Schema({
  test: {
    type: String,
  },
});

export default mongoose.model(mongodbCollection, testSchema);
