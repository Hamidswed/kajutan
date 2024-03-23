import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  DOB: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("Comment", CommentSchema);
