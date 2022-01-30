import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'users',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.todo || mongoose.model('todo', todoSchema);
