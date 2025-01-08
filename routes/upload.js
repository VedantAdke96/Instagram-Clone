import express from "express";
import multer from "multer";

const router = express.Router()

const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), (req, res) => {
  const { file } = req;
  const imageUrl = `/uploads/${file.filename}`;

  res.render('createPost',{
    imageUrl: imageUrl,
    filename: file.filename,
  })
  
});

export default router