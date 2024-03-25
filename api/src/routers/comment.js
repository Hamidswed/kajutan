import { Router } from "express";
import {
  createNewComment,
  deleteCommentById,
  getAllComments,
  updateCommentById,
} from "../controllers/comment.js";

const router = Router();

router.get("/", getAllComments);
router.post("/", createNewComment);
router.delete("/:id", deleteCommentById);
router.patch("/update/:id", updateCommentById);

export default router;
