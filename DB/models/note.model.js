import { Schema, model } from "mongoose";

const noteSchema = new Schema(
  {
    noteName: {
      type: String,
      required: true,
    },
    description: String,
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: 'User Id is required'
    },
  },
  {
    timestamps: true,
  }
);
const noteModel = model("Note", noteSchema);

export default noteModel;
