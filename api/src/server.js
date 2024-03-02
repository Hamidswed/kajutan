import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();
const port = 8001;
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(
      `MongoDB connection error! Please make sure MongoDB is running. ${error}`
    );
    process.exit(1);
  });
