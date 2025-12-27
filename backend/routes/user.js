import { Router } from 'express';
import { User } from '../models/user';

const userRouter = Router();
userRouter.post("/",(req,res)=>{
  console.log(req.data)
});