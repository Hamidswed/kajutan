import mongoose from "mongoose";
import { FoodSchema } from "./Food";

const CategorySchema = new mongoose.Schema({
  main_title: {
    type: String,
    required: true,
  },
  included: {
    type: String,
  },
  main_img: {
    type: String,
  },
  menu: [FoodSchema],
});

export default mongoose.model("Category", CategorySchema);
