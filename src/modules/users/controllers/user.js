import jwt from 'jsonwebtoken';

import userModel from "../../../../DB/models/user.model.js";

const getAllUsers = async (req, res, next) => {
  const users = await userModel.find();
  return res.json({ message: "Done", users });
};

const login = async (req, res, next) => {
  try {
    const { username, password} = req.body;
    const user = await userModel.findOne({ username, password});
    if (!user) {
      return res.json({ message: "User not found" });
    }
    const token = jwt.sign({ userId: user._id }, 'MKMSHJAA', { expiresIn: '2h' });
    return res.json({ message: "User logged In", token });
  } catch (error) {
    return res.json({ message: "Catch error" });
  }
  
};

const addUser = async (req, res, next) => {
  try {
    const users = await userModel.create(req.body);
    return res.json({ message: "Done", users });
  } catch (error) {
    return res.json({ message: "Catch error" });
  }
};
export { getAllUsers, addUser, login };
