import Express from "express";
import foodRouter from "./routers/food.js";
import categoryRouter from "./routers/category.js";
import cors from "cors";

const app = Express();

app.use(Express.json());
app.use(cors());

app.use("/foods", foodRouter);
app.use("/categories", categoryRouter);

export default app;
