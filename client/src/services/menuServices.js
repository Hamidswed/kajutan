import http from "./httpServices";

export async function getFoods() {
  const { data } = await http.get("/foods");
  return data;
}

export async function addFood(food){
  const {data} = await http.post("/foods",food)
  return data
}
