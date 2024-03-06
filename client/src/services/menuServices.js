import http from "./httpServices";

export async function getFoods() {
  const { data } = await http.get("/foods");
  return data;
}
