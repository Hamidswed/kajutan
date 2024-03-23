import Express from "express";
import foodRouter from "./routers/food.js";
import categoryRouter from "./routers/category.js";
import userRouter from "./routers/user.js";
import commentRouter from "./routers/comment.js";
import { jwtStrategy } from "./config/passport.js";

import cors from "cors";
import cookieParser from "cookie-parser";
import passport from "passport";

const app = Express();

app.use(Express.json());
app.use(cors());
app.use(cookieParser());
app.use(passport.initialize());
passport.use(jwtStrategy);

app.use("/foods", foodRouter);
app.use("/categories", categoryRouter);
app.use("/users", userRouter);
app.use("/comments", commentRouter);

export default app;
