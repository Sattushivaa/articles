import {Schema, model} from "mongoose";

const threadSchema = new Schema({
  user_id : String,
  with : String,
  text : String,
},{
  timestamps : true
});

const Thread = model("Thread",threadSchema);
export { Thread }