import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: String,
  slug: String,
  content: String,
  result: String,
  postImage: { type: String, default: '/images/teams/darren-ho.jpg' },
  comments: [
    {
      name: String,
      email: String,
      comment: String,
      createdAt: { type: Date, default: Date.now },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});
const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;
