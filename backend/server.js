import express from "express";
import mongoose from "mongoose";
import path from "path";
import userRouter from "./routes/user.js"

const PORT = process.env.PORT || 8000;
mongoose.connect(process.env.MONGO_URL);

const app = express();
app.use(express.static(path.join(__dirname,"../frontend/dist")));
app.use(express.json());
app.route("/api/user", userRouter);


app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,"../frontend/dist/index.html"))
})

app.listen(PORT,(err)=>{
  if(!err){
    console.log("server running on PORT:",PORT);
  }
})