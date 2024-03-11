import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  loginWithPassword,
  updateUserById,
} from "../controllers/user.js";

import passport from "passport";

const router = Router();

router.post("/", createUser);
router.get("/", getAllUsers);
router.post("/login", loginWithPassword);
router.put(
  "/update/:id",
  passport.authenticate("jwt", { session: false }),
  updateUserById
);
router.get(
  "/profile/:id",
  passport.authenticate("jwt", { session: false }),
  getUserById
);

export default router;
