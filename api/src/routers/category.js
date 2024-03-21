import { Router } from "express";
import {
  createNewCategory,
  deleteCategoryById,
  getAllCategories,
  updateCategoryById,
} from "../controllers/food.js";

const router = Router();

router.get("/", getAllCategories);
router.post("/", createNewCategory);
router.delete("/:id", deleteCategoryById);
router.patch("/update/:id", updateCategoryById);

export default router;
