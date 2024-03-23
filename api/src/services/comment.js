import Comment from "../models/Comment.js";

const createComment = async (comment) => {
  return comment.save();
};

const getComments = async () => {
  return Comment.find();
};

export default {
  createComment,
  getComments,
};
