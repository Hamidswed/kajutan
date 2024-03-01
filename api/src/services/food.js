const createFood = async (food) => {
  return food.save();
};

export default { createFood };
