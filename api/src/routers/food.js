import { Router } from "express";
import {
  createNewFood,
  deleteFoodById,
  getAllFoods,
} from "../controllers/food.js";

const router = Router();

router.get("/", getAllFoods);

router.post("/", createNewFood);

router.delete("/:id", deleteFoodById);

export default router;
