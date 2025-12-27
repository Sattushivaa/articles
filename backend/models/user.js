import {Schema, model} from "mongoose";

const usr = new Schema({
  username : String,
  password : String,
  user_id : String
},{
  timestamps : true
});

const User = model("User",usr);

export { User }