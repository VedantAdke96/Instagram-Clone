import express from "express";
import path from "path";
import mongoose from "mongoose";
import uploadRoute from './routes/upload.js'
import submit from './routes/submit.js'
import Post from "./models/Post.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

mongoose
  .connect("mongodb://localhost:27017/instagram", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

// Set up view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true })); // Handle form submissions
app.use(express.static("src")); // Serve static assets (CSS, JS)
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve uploaded images

app.get("/home", async (req, res) => {
  try {
    const posts = await Post.find().sort({ _id: -1 })
    res.render("index", { posts });
  } catch (err) {
    console.error("Error fetching posts:", err);
    res.status(500).send("Error fetching posts");
  }
});

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.use('/upload',uploadRoute)

app.use('/submit-post',submit)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
