export default function authMiddleware(req,res,next){
  const authHeader = req.headers.authorization;
  const token = authHeader.split(' ')[1];
  const verified = jwt.verify(token, process.env.JWT_SECRET)
  next()
}