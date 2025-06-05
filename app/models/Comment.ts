import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  name: String,
  email: String,
  comment: String,
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  createdAt: { type: Date, default: Date.now },
});
const Comment =
  mongoose.models.Comment || mongoose.model('Comment', commentSchema);

export default Comment;
