import http from "./httpServices";

export async function getCategories() {
  const { data } = await http.get("/categories");
  return data;
}

export async function addCategory(category) {
  const { data } = await http.post("/categories", category);
  return data;
}

export async function editCategory({ id, newCategory }) {
  const { data } = await http.patch(`/categories/update/${id}`, newCategory);
  return data;
}

export async function removeCategory(id) {
  const { data } = await http.delete(`/categories/${id}`);
}
