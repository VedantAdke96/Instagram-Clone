import express from 'express';
import Post from "/Instagram-Clone/models/Post.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { imagePath, caption } = req.body;

  const post = new Post({
    imagePath: `/uploads/${imagePath}`,
    caption: caption,
  });
  await post.save();
  res.render("submitPost", {
    imagePath,
    caption,
  });
});

export default router;