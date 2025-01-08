import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  imagePath: String,
  caption: String,
  createdAt: { type: Date, default: Date.now },
});

const Post = mongoose.model('Post', postSchema);

export default Post;
