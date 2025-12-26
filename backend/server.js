const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.static(path.join(__dirname,"../frontend/dist")));


app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,"../frontend/dist/index.html"))
})

app.listen(PORT,(err)=>{
  if(!err){
    console.log("server running on PORT:",PORT);
  }
})