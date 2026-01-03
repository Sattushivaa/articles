import {Schema, model} from "mongoose";

const pf = new Schema({
  username : String,
  user_id : String,
  about : String,
  profile_image : String
},{
  timestamps : true
});

const Profile = model("Profile", pf);

export { Profile }