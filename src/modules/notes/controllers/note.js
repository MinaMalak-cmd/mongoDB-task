import noteModel from "../../../../DB/models/note.model.js";
import userModel from "../../../../DB/models/user.model.js";

// Get all to do notes 
const getAllNotes = async (req, res, next) => {
  const notes = await noteModel.find().populate("owner");
  return res.json({ message: "Done", notes });
};

// Get to do information for specific user
const getANote = async (req, res, next) => {
  try {
    const { noteId, owner } = req.params;
    const result = await noteModel.findOne({
      _id: noteId,
      owner,
    }).populate("owner");
    return result
      ? res.json({ message: "Done", result })
      : res.json({ message: "No note found with this data" });
  } catch (error) {
    if (error.path === "_id")
      return res.json({ message: "Note Not found" });
    if (error.path === "owner")
      return res.json({ message: "User Not found" });
    return res.json({ message: "No data found" });
  }
};

// Add new to do for specific user.
const addNote = async (req, res, next) => {
  try {
    const { userId } = req.body;
    await userModel.findById(userId);
    const notes = await noteModel.create(req.body);
    return res.json({ message: "Done", notes });
  } catch (error) {
    if (error?.errors?.owner?.kind === "ObjectId")
      return res.json({ message: "User Not found" });
    return res.json({ message: "You can't add this note" });
  }
};
// Update an existing to do for specific user
const updateNote = async (req, res, next) => {
  try {
    const { noteId } = req.params;
    const { noteName, description, owner } = req.body;
    const selectedNote = await noteModel.findOneAndUpdate(
      {
        _id: noteId,
        owner: owner,
      },
      { noteName, description }
    );
    return selectedNote? res.json({ message: "Done", selectedNote }): res.json({ message: "No note found with this data" });
  } catch (error) {
    if (error.path === "_id") return res.json({ message: "Note Not found" });
    if (error.path === "owner") return res.json({ message: "User Not found" });
    return res.json({ message: "You can't update this note" });
  }
};
// Delete an existing to do for specific user.
const deleteNote = async (req, res, next) => {
  try {
    const { noteId, owner } = req.params;
    const selectedNote = await noteModel.findOneAndDelete({
      _id: noteId,
      owner,
    });
    return selectedNote
      ? res.json({ message: "Done" })
      : res.json({ message: "No note found with this data" });
  } catch (error) {
    if (error.path === "_id")
      return res.json({ message: "Note Not found" });
    if (error.path === "owner")
      return res.json({ message: "User Not found" });
    return res.json({ message: "You can't delete this note" });
  }
};
export { getANote, addNote, updateNote, deleteNote, getAllNotes };
