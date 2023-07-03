import noteModel from "../../../../DB/models/note.model.js";

const getAllNotes = async (req, res, next) => {
  const notes = await noteModel.find();
  return res.json({ message: "Done", notes });
};
const addNote = async (req, res, next) => {
  try {
    const notes = await noteModel.create(req.body);
    return res.json({ message: "Done", notes });
  } catch (error) {
    return res.json({ message: "Catch error" });
  }
};
export { getAllNotes, addNote };
