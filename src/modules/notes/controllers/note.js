// import userModel from "../../../../DB/models/user.model.js";

const getAllNotes = async (req, res, next) => {
  // for any usage of sequelize methods you have to use async and await
//   const result = await userModel.findAll({
//     attributes: {
//       exclude: ["password", "createdAt", "updatedAt", "confirmEmail"],
//     },
//   });
  return res.json({ message: "Done" });
};

export { getAllNotes };
