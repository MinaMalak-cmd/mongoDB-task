import { Schema, model } from "mongoose";

const noteSchema = new Schema(
  {
    noteName: {
      type: String,
      required: true,
    },
    description: String
  },
  {
    timestamps: true,
  }
);
const noteModel = model('Note', noteSchema);

export default noteModel;
