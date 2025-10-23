import { Schema, model } from 'mongoose';

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId, // verweist auf ein  anderes Dokument
    ref: 'User', // bezieht sich auf das User-Model
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model('Post', postSchema);
