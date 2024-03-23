import http from "./httpServices";

export async function getAllComments() {
  const { data } = await http.get("/comments");
  return data;
}

export async function createComment(comment) {
  const { data } = await http.post("/comments", comment);
  return data;
}

export async function removeComment(id) {
  const { data } = await http.delete(`/comments/${id}`);
  return data;
}
