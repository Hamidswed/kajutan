import fs from "fs";
import FoodServices from "../services/food.js";
import Food from "../models/Food.js";
import Category from "../models/Category.js";

let foodData = [];

fs.readFile("./src/newDB.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading JSON file:", err);
    return;
  }
  foodData = JSON.parse(data);
});

export const getAllFoods = async (req, res) => {
  try {
    const foods = await FoodServices.getFoods();
    res.json(foods);
  } catch (error) {
    res.json(error);
  }
};

export const createNewCategory = async (req, res) => {
  try {
    const newCategory = new Category({
      main_title: req.body.main_title,
      included: req.body.included,
      main_img: req.body.main_img,
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
      title,
      price,
      ingredient,
      image,
      category,
    });
    const food = await FoodServices.createFood(newFood);
    res.json(food);
  } catch (error) {
    res.json(error);
  }
};

export const deleteFoodById = async (req, res) => {
  try {
    const foodId = req.params;
    const result = foodList.filter((food) => food.id !== Number(foodId.id));
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

export const updateFoodById = async (req, res) => {
  const foodId = req.params.id;
  const newFoodInfo = req.body;
  try {
    const updatedUser = await FoodServices.updateFoodById(foodId, newFoodInfo);
    res.json(updatedUser);
  } catch (error) {
    res.json(error);
  }
};

