import { Schema, model } from "mongoose";

const noteSchema = new Schema(
  {
    noteName: {
      type: String,
      required: true,
    },
    description: String,
    userId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const noteModel = model("Note", noteSchema);

export default noteModel;
