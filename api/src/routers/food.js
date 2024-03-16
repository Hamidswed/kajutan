import { Router } from "express";
import {
  createNewFood,
  deleteFoodById,
  getAllFoods,
  updateFoodById,
} from "../controllers/food.js";

const router = Router();

router.get("/", getAllFoods);

router.post("/", createNewFood);

router.delete("/:id", deleteFoodById);

router.patch("/update/:id", updateFoodById);
export default router;
