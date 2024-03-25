import Comment from "../models/Comment.js";

const createComment = async (comment) => {
  return comment.save();
};

const getComments = async () => {
  return Comment.find();
};

const deleteCommentById = async (id) => {
  return Comment.findByIdAndDelete(id);
};

const updateCommentById = async (id, update) => {
  return Comment.findByIdAndUpdate(id, update, { new: true });
};

export default {
  createComment,
  getComments,
  deleteCommentById,
  updateCommentById,
};
