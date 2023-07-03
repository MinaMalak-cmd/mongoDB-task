import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    age: Number,
    notes: [{
      type: Schema.Types.ObjectId,
      ref: "Note"
    }]
  },
  {
    timestamps: false,
  }
);
const userModel = model('User', userSchema);

export default userModel;
