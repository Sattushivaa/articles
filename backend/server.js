import express from "express";
import mongoose from "mongoose";
import path from "path";
import userRouter from "./routes/user.js"
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import authMiddleware from './middlewares/auth.js'
import articleRouter from "./routes/article.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 8000;
mongoose.connect(process.env.MONGO_URL);

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// extended maked the nested objects parsing possible

app.use(cookieParser());
//app.use(authMiddleware());

app.use("/api/user", userRouter);
app.use("/api/articles", authMiddleware, articleRouter);

if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"))
  })
}

app.listen(PORT, (err) => {
  if (!err) {
    console.log("server running on PORT:", PORT);
  }
})