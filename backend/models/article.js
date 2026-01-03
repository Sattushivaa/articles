import {Schema, model} from "mongoose";

const articleSchema = new Schema({
    author : String,
    article_id : String,
    heading : String,
    body : String
},{
  timestamps : true
});

const Article = model("Article", articleSchema);

export { Article }