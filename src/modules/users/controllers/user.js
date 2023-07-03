import userModel from "../../../../DB/models/user.model.js";

const getAllUsers = async (req, res, next) => {
  const users = await userModel.find();
  return res.json({ message: "Done", users });
};
const addUser = async (req, res, next) => {
  try {
    const users = await userModel.create(req.body);
    return res.json({ message: "Done", users });
  } catch (error) {
    return res.json({ message: "Catch error" });
  }
};
export { getAllUsers, addUser };
