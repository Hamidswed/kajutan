import Express from "express";
import foodRouter from "./routers/food.js";
import cors from "cors";

const app = Express();

app.use(Express.json());
app.use(cors());

app.use("/foods", foodRouter);

export default app;
