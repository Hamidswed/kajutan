import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  main_title: {
    type: String,
    unique: true,
    required: true,
  },
  included: {
    type: String,
  },
  main_img: {
    type: String,
  },
  DOB: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Category", CategorySchema);
