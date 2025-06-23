import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const exists = await User.findOne({ email });

    if (exists) return res.status(400).json({ msg: "User already exists" });

    const user = await User.create({ email, password, provider: "local" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token });

  } catch (err) {
    res.status(500).json({ msg: "Register failed" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found" });



    if (password !== user.password) {
      return res.status(400).json({ msg: "Wrong password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {


    res.status(500).json({ msg: "Login failed" });
  }
};

export const googleLogin = async (req, res) => {
  const { email } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) user = await User.create({ email, provider: "google" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {

    
    res.status(500).json({ msg: "Google login failed" });
  }
};
