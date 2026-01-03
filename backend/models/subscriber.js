import {Schema, model} from "mongoose";

const subs = new Schema({
  user_id : String,
  subscribes_to : String,
});

const Subscriber = model("Subscriber", subs);

export { Subscriber }