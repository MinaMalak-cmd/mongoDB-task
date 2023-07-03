import jwt from 'jsonwebtoken';

import userModel from "../../../../DB/models/user.model.js";

const isAuthorized = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  jwt.verify(token, "MKMSHJAA", (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Token verification failed" });
    }
    req.user = user;
    next();
  });
};

export default isAuthorized;
