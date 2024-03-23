import { Router } from "express";
import { createNewComment, getAllComments } from "../controllers/comment.js";

const router = Router();

router.get("/", getAllComments);
router.post("/", createNewComment);

export default router;
