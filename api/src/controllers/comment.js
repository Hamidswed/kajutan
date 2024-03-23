import Comment from "../models/Comment.js";
import CommentServices from "../services/comment.js";

export const getAllComments = async (req, res) => {
  try {
    const comments = await CommentServices.getComments();
    res.json(comments);
  } catch (error) {
    res.json(error);
  }
};

export const createNewComment = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newComment = new Comment({
      name,
      email,
      message,
    });
    const comment = await CommentServices.createComment(newComment);
    res.json(comment);
  } catch (error) {
    console.log(error);
  }
};
