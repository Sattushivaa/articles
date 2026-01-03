import jwt from "jsonwebtoken"

const authMiddleware = (req,res,next) => {
  const token = req.cookies.auth;
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user_id = verified.user_id;
  } catch {
    req.user_id = null;
  }
  next();
}

export default authMiddleware;