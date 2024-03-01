import mongoose from "mongoose";

export const FoodSchema = new mongoose.Schema({
      title: {
        type: String,
        unique: true,
        required: true,
      },
      price: {
        type: Number,
      },
      category: {
        type: String,
      },
      ingredient: {
        type: String,
      },
      image: {
        type: String,
      },
      DOB: {
        type: Date,
        default: Date.now,
      },
    })

export default mongoose.model("Food", FoodSchema)
