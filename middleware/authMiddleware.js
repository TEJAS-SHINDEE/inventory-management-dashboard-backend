import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {

  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id);
    next(); // calling next function 
  } catch(err) {

    res.status(401).json({ msg: "Token Invalid" });
  }
};
