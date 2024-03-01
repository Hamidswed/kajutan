import fs from "fs";
import FoodServices from "../services/food.js";
import Food from "../models/Food.js";

let foodData = [];

fs.readFile("./src/db.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading JSON file:", err);
    return;
  }
  foodData = JSON.parse(data);
});

export const getAllFoods = async (req, res) => {
  try {
    res.json(foodData);
  } catch (error) {
    res.json(error);
  }
};

export const createNewFood = async (req, res) => {
  try {
    const newFood = new Food({
      title: req.body.title,
      price: req.body.price,
      category: req.body.category,
      ingredient: req.body.ingredient,
      image: req.body.image,
    });
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
