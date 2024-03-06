import http from "./httpServices";

export async function getCategories() {
  const { data } = await http.get("/categories");
  return data;
}
