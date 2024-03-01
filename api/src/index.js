import Express from "express";
import foodRouter from "./routers/food.js";

const app = Express();

app.use(Express.json());

app.use("/foods", foodRouter);

const port = 8000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
