import noteModel from "../../../../DB/models/note.model.js";
import userModel from "../../../../DB/models/user.model.js";

const getAllNotes = async (req, res, next) => {
  const notes = await noteModel.find();
  return res.json({ message: "Done", notes });
};

// Add new to do for specific user.
const addNote = async (req, res, next) => {
  try {
    const { userId } = req.body;
    console.log("🚀 ~ file: note.js:10 ~ addNote ~ userId:", userId)
    await userModel.findById(userId);
    const notes = await noteModel.create(req.body);
    return res.json({ message: "Done", notes });
  } catch (error) {
    if(error.kind === "ObjectId")
      return res.json({ message: "User Not found" });
    return res.json({ message: "Catch error", error });
  }
};
// Update an existing to do for specific user
const updateNote = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { noteName, description, userId } = req.body;
    console.log("🚀 ~ file: note.js:10 ~ addNote ~ userId:", id, req.body);
    await userModel.findById(userId);
    const notes = await noteModel.findByIdAndUpdate(id, { noteName, description });
    if(notes){
      return res.json({ message: "Done", notes });
    }
    // const notes = await noteModel.create(req.body);
    // return res.json({ message: "Done", notes });
  } catch (error) {
    if(error.kind === "ObjectId")
      return res.json({ message: "User Not found", error });
    return res.json({ message: "Catch error", error });
  }
};
export { getAllNotes, addNote, updateNote };
