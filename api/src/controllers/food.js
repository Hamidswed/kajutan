import fs from "fs";
import FoodServices from "../services/food.js";
import Food from "../models/Food.js";
import Category from "../models/Category.js";

// let foodData = [];

// fs.readFile("./src/newDB.json", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading JSON file:", err);
//     return;
//   }
//   foodData = JSON.parse(data);
// });

export const getAllFoods = async (req, res) => {
  try {
    const foods = await FoodServices.getFoods();
    res.json(foods);
  } catch (error) {
    res.json(error);
  }
};

export const createNewCategory = async (req, res) => {
  const { main_title, included, main_img } = req.body;
  try {
    const newCategory = new Category({
      main_title: main_title.toUpperCase(),
      included,
      main_img,
    });
    const category = await FoodServices.createCategory(newCategory);
    res.json(category);
  } catch (error) {
    console.log(error);
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await FoodServices.getCategories();
    res.json(categories);
  } catch (error) {
    console.log(error);
  }
};

export const createNewFood = async (req, res) => {
  const { title, price, ingredient, image, category } = req.body;
  try {
    const newFood = new Food({
      title: title.toUpperCase(),
      price,
      ingredient,
      image,
      category: category.toUpperCase(),
    });
    const food = await FoodServices.createFood(newFood);
    res.json(food);
  } catch (error) {
    res.json(error);
  }
};

export const deleteFoodById = async (req, res) => {
  try {
    const foodId = req.params.id;
    const deletedFood = await FoodServices.deleteFoodById(foodId);
    res.json(deletedFood);
  } catch (error) {
    res.json(error);
  }
};

export const deleteCategoryById = async (req, res) => {
  try {
    const deletedCategory = await FoodServices.deleteCategoryById(
      req.params.id
    );
    res.json(deletedCategory);
  } catch (error) {
    res.json(error);
  }
};

export const updateFoodById = async (req, res) => {
  const foodId = req.params.id;
  const newFoodInfo = req.body;
  try {
    const updatedFood = await FoodServices.updateFoodById(foodId, newFoodInfo);
    res.json(updatedFood);
  } catch (error) {
    res.json(error);
  }
};

export const updateCategoryById = async (req, res) => {
  try {
    const updatedCategory = await FoodServices.updateCategoryById(
      req.params.id,
      req.body
    );
    res.json(updatedCategory);
  } catch (error) {
    res.json(error);
  }
};
