const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(403).json({ message: "Access Denied" });
  }
  const SECRET_KEY = process.env.SECRET_KEY;
  const decodedToken = jwt.verify(token, SECRET_KEY);

  req.userId = decodedToken.id;

  next();
};

module.exports = verifyToken;
