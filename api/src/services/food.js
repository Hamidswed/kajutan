import Category from "../models/Category.js";
import Food from "../models/Food.js";

const findCategoryByName = async (category) => {
  return Category.findOne(category);
};

const createCategory = async (category) => {
  return category.save();
};

const getCategories = async () => {
  return Category.find();
};

const getFoods = async () => {
  return Food.find();
};

const updateCategoryById = async (id, update) => {
  return Category.findByIdAndUpdate(id, update, { new: true });
};
const deleteCategoryById = async (id) => {
  return Category.findByIdAndDelete(id);
};

const createFood = async (food) => {
  return food.save();
};

const updateFoodById = async (id, update) => {
  return Food.findByIdAndUpdate(id, update, { new: true });
};

const deleteFoodById = async (id) => {
  return Food.findByIdAndDelete(id);
};

export default {
  createFood,
  createCategory,
  findCategoryByName,
  getCategories,
  getFoods,
  updateFoodById,
  deleteFoodById,
  updateCategoryById,
  deleteCategoryById,
};
