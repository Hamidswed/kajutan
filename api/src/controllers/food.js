const foodList = [
  {
    id: 1,
    name: "hamid",
    age: 35,
  },
  {
    id: 2,
    name: "titi",
    age: 30,
  },
  {
    id: 3,
    name: "bool",
    age: 48,
  },
];

export const getAllFoods = async (req, res) => {
  try {
    res.json(foodList);
  } catch (error) {
    res.json(error);
  }
};

export const createNewFood = async (req, res) => {
  try {
    const newFood = req.body;
    foodList.push(newFood);
    res.json(foodList);
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
