import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    age: Number,
    role: {
        type: String,
        enum: ['admin', 'user']
    }
  },
  {
    timestamps: true,
  }
);
const userModel = model('User', userSchema);

export default userModel;
