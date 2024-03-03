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

const createFood = async (food) => {
  return food.save();
};

export default {
  createFood,
  createCategory,
  findCategoryByName,
  getCategories,
  getFoods,
};