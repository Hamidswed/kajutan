import { Router } from "express";
import {
  createNewComment,
  deleteCommentById,
  getAllComments,
} from "../controllers/comment.js";

const router = Router();

router.get("/", getAllComments);
router.post("/", createNewComment);
router.delete("/:id", deleteCommentById);

export default router;
