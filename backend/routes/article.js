import { Router } from "express";
import { Article } from "../models/article.js";

const articleRouter = new Router();

articleRouter.post("/", async (req, res) => {
    if (!req.user_id) {
        return res.json({
            error: true,
            message: "nikal be chutiye! pehle login krke aa"
        })
    }
    if(req.body.body=='' || req.body.heading==''){
        res.json({
            error : true,
            message : 'body or heading cannot be empty'
        })
    }
    try {
        let article = await Article.create({
            author: req.user_id,
            article_id: `${req.user_id}@${Date.now()}-${parseInt(Math.random() * 1000)}`,
            heading: req.body.heading,
            body: req.body.body
        })
        return res.json({
            error : false,
            message : "article posted successfully",
            article_id : article.article_id
        })
    } catch {
        res.json({
            error : true,
            message : "internal server error"
        })
    }

})

export default articleRouter;