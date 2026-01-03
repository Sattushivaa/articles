import { Router } from 'express'
// import mongoose from 'mongoose'
import { User } from '../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userRouter = Router();
userRouter.post("/signup", async (req, res) => {
  if (!req.body.user_id || !req.body.password || !req.body.username) {
    return res.json({
      error: true,
      message: "user id, password, or username cannot be empty"
    });
  }
  let usr = await User.findOne({ user_id: req.body.user_id });
  if (!!usr) {
    return res.json({
      error: true,
      message: "user id already exists"
    })
  }
  const hashedpass = await bcrypt.hash(req.body.password, 10);
  const newUser = await User.create({
    username: req.body.username,
    password: hashedpass,
    user_id: req.body.user_id
  });
  res.json({
    error: false,
    message: "user created successfully"
  })

});

userRouter.post('/login', async (req, res) => {
  let user = await User.findOne({ user_id: req.body.user_id });
  if (!user) {
    return res.json({
      error: true,
      message: "invalid user id"
    });
  }
  const verified = await bcrypt.compare(req.body.password, user.password);
  if (!verified) {
    return res.json({
      error: true,
      message: "invalid password"
    });
  }
  const token = jwt.sign({ user_id: user.user_id }, process.env.JWT_SECRET);
  res.cookie('auth', token, {
    httpOnly: true,
    sameSite: "lax"
  })
  res.json({
    error: false,
    message: "login successful"
  })
})

userRouter.get("/hasauth", (req, res) => {
  //console.log(req);
  try {
    let verified = jwt.verify(req.cookies?.auth, process.env.JWT_SECRET);
    //console.log(verified);
    res.json({
      error: false,
      user_id: verified.user_id
    })
  } catch {
    res.json({
      error: true
    })
  }
})

userRouter.get("/logout", (req, res) => {
  try {
    res.clearCookie("auth");
    return res.json({
      error: false
    })
  } catch {
    return res.status(500).json({
      error : true,
      message : 'internal server error'
    })
  }

})

export default userRouter;