import http from "./httpServices";

export async function getFoods() {
  const { data } = await http.get("/foods");
  return data;
}

export async function addFood(food) {
  const { data } = await http.post("/foods", food);
  return data;
}

export async function editFood({ id, newFood }) {
  const { data } = await http.patch(`/foods/update/${id}`, newFood);
  return data;
}

export async function removeFood(id) {
  const { data } = await http.delete(`/foods/${id}`);
  return data;
}
