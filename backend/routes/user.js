import { Router } from 'express';
import { User } from '../models/user.js';

const userRouter = Router();
userRouter.get("/",(req,res)=>{
  console.log(req.data)
});

export default userRouter;